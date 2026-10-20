import assert from 'node:assert/strict';
import test from 'node:test';
import { dedupeWildfires, parseGdacs } from '../src/lib/hazards.mjs';

function feature(eventtype, extra = {}) {
  return {
    geometry: { type: 'Point', coordinates: [extra.lon ?? 30, extra.lat ?? -20] },
    properties: {
      eventtype,
      eventid: extra.eventid ?? 1,
      episodeid: extra.episodeid ?? 1,
      name: extra.name ?? 'Forest fires in Mozambique',
      fromdate: extra.fromdate ?? '2026-10-05T00:00:00',
      todate: extra.todate ?? '2026-10-20T00:00:00',
      iscurrent: extra.iscurrent,
      alertlevel: extra.alertlevel ?? 'Green',
      url: { report: 'https://www.gdacs.org/report.aspx?eventid=1' },
    },
  };
}

test('parseGdacs drops wildfires that are not current', () => {
  const parsed = parseGdacs({
    features: [
      feature('WF', { iscurrent: 'false', eventid: 1 }),
      feature('WF', { iscurrent: 'true', eventid: 2, name: 'Forest fires in Zambia' }),
      feature('FL', { iscurrent: 'false', eventid: 3, name: 'Flood in Zambia' }),
      feature('DR', { iscurrent: 'false', eventid: 4, name: 'Drought in Zambia' }),
    ],
  });
  assert.deepEqual(parsed.wildfires.map((event) => event.title), ['Forest fires in Zambia']);
  assert.equal(parsed.floods.length, 0);
  assert.equal(parsed.droughts.length, 1);
});

test('typed wildfire search keeps fires that are not marked current', () => {
  const parsed = parseGdacs(
    {
      features: [
        feature('WF', { iscurrent: 'false', eventid: 9, name: 'Forest fires in Australia' }),
        feature('FL', { iscurrent: 'false', eventid: 8, name: 'Flood in Australia' }),
      ],
    },
    '2026-10-20T00:00:00.000Z',
    { keepPastWildfires: true },
  );
  assert.equal(parsed.wildfires.length, 1);
  assert.equal(parsed.wildfires[0].title, 'Forest fires in Australia');
  assert.equal(parsed.wildfires[0].until, '2026-10-20T00:00:00.000Z');
  assert.equal(parsed.floods.length, 0);
});

test('dedupeWildfires drops a GDACS fire with the same name as an EONET fire', () => {
  const kept = dedupeWildfires([
    {
      id: 'gdacs-1',
      layer: 'wildfires',
      source: 'GDACS',
      title: 'Wildfire Cooley, Mendocino, California',
      lat: -25,
      lon: 45,
      time: '2026-10-01T00:00:00.000Z',
      until: '2026-10-20T00:00:00.000Z',
    },
    {
      id: 'eonet-1',
      layer: 'wildfires',
      source: 'EONET',
      title: 'Wildfire COOLEY, Mendocino, California',
      lat: 38.8,
      lon: -123.2,
      time: '2026-10-16T20:14:00.000Z',
    },
    {
      id: 'gdacs-2',
      layer: 'wildfires',
      source: 'GDACS',
      title: 'Forest fires in Mozambique',
      lat: -18,
      lon: 35,
      time: '2026-10-05T00:00:00.000Z',
      until: '2026-10-20T00:00:00.000Z',
    },
  ]);
  assert.deepEqual(
    kept.map((event) => event.id),
    ['eonet-1', 'gdacs-2'],
  );
});

test('dedupeWildfires drops a nearby GDACS fire when the dates overlap', () => {
  const eonet = {
    id: 'eonet-1',
    layer: 'wildfires',
    source: 'EONET',
    title: 'Wildfire Norte, Orange, California',
    lat: 33.48,
    lon: -117.63,
    time: '2026-10-16T14:52:00.000Z',
  };
  const near = {
    id: 'gdacs-near',
    layer: 'wildfires',
    source: 'GDACS',
    title: 'Forest fires in the United States',
    lat: 33.55,
    lon: -117.63,
    time: '2026-10-10T00:00:00.000Z',
    until: '2026-10-20T00:00:00.000Z',
  };
  const far = {
    ...near,
    id: 'gdacs-far',
    title: 'Forest fires in Peru',
    lat: -12,
    lon: -72,
  };
  const later = {
    ...near,
    id: 'gdacs-later',
    title: 'Forest fires in Mexico',
    time: '2026-09-01T00:00:00.000Z',
    until: '2026-09-10T00:00:00.000Z',
  };
  const kept = dedupeWildfires([near, far, later, eonet]);
  assert.deepEqual(
    kept.map((event) => event.id),
    ['gdacs-far', 'gdacs-later', 'eonet-1'],
  );
});
