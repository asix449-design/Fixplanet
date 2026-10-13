import statusLabels from '../../data/wildlife-catalog/status-labels.json';

type ScopeLabels = {
  scope?: {
    global?: string | null;
  };
};

/** Scope phrase from status-labels.json. Only the global assessment is shown. */
export function globalScopeLabel(locale: string, scope: string | undefined): string | undefined {
  if (scope !== 'global') return undefined;
  const text = (statusLabels as Record<string, ScopeLabels>)[locale]?.scope?.global;
  return typeof text === 'string' && text.trim() ? text : undefined;
}
