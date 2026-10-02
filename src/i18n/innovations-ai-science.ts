import type { InnovationCopy } from '../data/innovations';
import { cite } from '../data/sources';
import type { Locale } from './config';
import { aiScienceLv } from './innovations-ai-science-lv';
import { aiSciencePl } from './innovations-ai-science-pl';
import { aiScienceRu } from './innovations-ai-science-ru';

/**
 * Innovations AI science cluster. Same wiring as the energy firm cards:
 * shape "quad" (What it is, Why it matters, How to read it, Limits),
 * a short gridSourceLabel on the hub, and localized numbered sources.
 */
function card(
  fields: Omit<InnovationCopy, 'players' | 'sourcesNote' | 'shape'>,
): InnovationCopy {
  return { players: '', sourcesNote: '', shape: 'quad', ...fields };
}

const ccBySa25 = 'https://creativecommons.org/licenses/by-sa/2.5/';
const ccBySa30 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const ccBySa40 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const ccBy20 = 'https://creativecommons.org/licenses/by/2.0/';
const jelly = 'https://commons.wikimedia.org/wiki/File:Aequorea_victoria.jpg';
const quartz = 'https://commons.wikimedia.org/wiki/File:Quartz,_Tibet.jpg';
const atmosphere = 'https://commons.wikimedia.org/wiki/File:Top_of_Atmosphere.jpg';
const jet = 'https://commons.wikimedia.org/wiki/File:Joint_European_Torus_(6055833306).jpg';
const diiid = 'https://commons.wikimedia.org/wiki/File:2017_TOCAMAC_Fusion_Chamber_N0689.jpg';
const esmPaper = 'https://europepmc.org/article/MED/39818825';
const esmBlog = 'https://www.evolutionaryscale.ai/blog/esm3-release';
const esmCard = 'https://huggingface.co/biohub/esm3-sm-open-v1';
const nobel = 'https://www.nobelprize.org/prizes/chemistry/2008/press-release/';
const matterPaper = 'https://www.nature.com/articles/s41586-025-08628-5';
const matterBlog =
  'https://www.microsoft.com/en-us/research/blog/mattergen-a-new-paradigm-of-materials-design-with-generative-ai/';
const matterCode = 'https://github.com/microsoft/mattergen';
const neuralPaper = 'https://www.nature.com/articles/s41586-024-07744-y';
const neuralBlog = 'https://research.google/blog/fast-accurate-climate-modeling-with-neuralgcm/';
const neuralCode = 'https://github.com/google-research/neuralgcm';
const toraxBlog = 'https://deepmind.google/blog/bringing-ai-to-the-next-generation-of-fusion-energy/';
const toraxNote =
  'https://deepmind.google/blog/accelerating-fusion-science-through-learned-plasma-control/';
const cfsAlliance =
  'https://blog.cfs.energy/with-ai-alliance-google-deepmind-and-cfs-take-fusion-to-the-next-level/';
const cfsPlasma =
  'https://blog.cfs.energy/why-cfs-is-confident-well-demonstrate-net-fusion-energy-q1/';
const toraxCode = 'https://github.com/google-deepmind/torax';
const tearingPaper = 'https://www.nature.com/articles/s41586-024-07024-9';

export const aiScience: Record<Locale, Record<string, InnovationCopy>> = {
  en: {
    'esm3-protein-model': card({
      title: 'ESM3 protein language model',
      hook: 'In January 2025 the journal Science published ESM3, an artificial intelligence model from the company EvolutionaryScale that reads and writes proteins. Asked to design a glowing protein, it produced one that matches its closest natural relative at only 58 percent of positions, a gap the authors compare to about 500 million years of evolution.',
      imageAlt:
        'Illustrative stock photograph of a crystal jelly (Aequorea victoria), the jellyfish species in which green fluorescent protein was first found.',
      caption:
        'Illustrative stock photograph of a crystal jelly (Aequorea victoria), the jellyfish species in which green fluorescent protein was first found.',
      figureCredit:
        'Photo: Mnolf, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). File page: https://commons.wikimedia.org/wiki/File:Aequorea_victoria.jpg',
      licenseLabel: 'Creative Commons Attribution-ShareAlike 3.0',
      licenseUrl: ccBySa30,
      what: 'Proteins are long chains of building blocks called amino acids, and the order of those blocks decides a protein’s shape and what it can do. ESM3 is a language model for proteins: just as a text model learns from words, it learns from the sequences, three-dimensional shapes and known functions of billions of natural proteins. It can be given a partial description of a protein, such as part of a shape or a wanted function, and fill in the rest. EvolutionaryScale, a public benefit company, built the model and tested it on fluorescent proteins, the kind that make jellyfish and corals glow. Selected designs were made in the laboratory, and one bright protein matched the closest known fluorescent protein at 58 percent of its positions. A smaller version of the model, with 1.4 billion parameters (the adjustable numbers a model learns during training), has been released openly for anyone to use.',
      problem:
        'Fluorescent proteins are everyday laboratory tools. Attached to another protein, they let researchers watch where it goes inside a living cell, and their discovery and development was honoured with the Nobel Prize in Chemistry in 2008. Nature produced them in only a few branches of the tree of life, and most known variants were found by searching nature. A design tool that reaches far from every known protein could widen the search for new research tools, medicines and enzymes, which is the aim EvolutionaryScale states for ESM3.',
      how: 'A sequence identity of 58 percent means that, lined up against the closest natural fluorescent protein, 58 of every 100 positions in the chain hold the same building block. The new protein differs at 96 of its 229 positions. The figure of 500 million years is the authors’ estimate: natural fluorescent proteins that differ by a similar amount are separated by hundreds of millions of years of evolution, so the gap is described as equivalent to that span. The model wrote the sequence directly, and the time span is a way to express the distance. For comparison, earlier laboratory and machine-learning searches reached variants that differ in up to 20 percent of positions. According to the EvolutionaryScale announcement, the experiment was small: a first round of 96 designs and a second round of 96 designs built on the best result of the first.',
      risks:
        'The laboratory test covers one protein family, fluorescent proteins. In the first round the most distant protein that glowed was about 50 times dimmer than natural fluorescent proteins, and its glowing centre took about a week to form, where natural ones need less than a day; only the second round gave several designs with brightness similar to natural ones. Other examples in the announcement, such as a proposed scaffold for an enzyme that breaks down plastic, are computer designs. The figure of 500 million years is an estimate based on how fast natural fluorescent proteins diverge. The open model is the version with 1.4 billion parameters, and larger models of the family are offered through the company’s online service.',
      sources: [
        cite(
          'Europe PubMed Central: Simulating 500 million years of evolution with a language model (Science, 16 January 2025)',
          esmPaper,
        ),
        cite(
          'EvolutionaryScale: ESM3: Simulating 500 million years of evolution with a language model (announcement with the January 2025 update)',
          esmBlog,
        ),
        cite('Hugging Face: ESM3 open model, model card', esmCard),
        cite('Nobel Prize: Press release, The Nobel Prize in Chemistry 2008', nobel),
        cite('Wikimedia Commons: Aequorea victoria (photo)', jelly),
      ],
    }),
    mattergen: card({
      title: 'MatterGen materials design',
      hook: 'On 16 January 2025 the journal Nature published MatterGen, an artificial intelligence model from Microsoft that proposes new crystals for a chosen property, designing them from scratch. One proposed material was made in a laboratory, and its resistance to being squeezed, estimated from laboratory tests, came within 20 percent of the 200 gigapascal target.',
      imageAlt:
        'Illustrative stock photograph of a natural quartz crystal cluster from Tibet, shown as an everyday example of a crystal.',
      caption:
        'Illustrative stock photograph of a natural quartz crystal cluster from Tibet, shown as an everyday example of a crystal.',
      figureCredit:
        'Photo: JJ Harrison, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 2.5 (https://creativecommons.org/licenses/by-sa/2.5/). File page: https://commons.wikimedia.org/wiki/File:Quartz,_Tibet.jpg',
      licenseLabel: 'Creative Commons Attribution-ShareAlike 2.5',
      licenseUrl: ccBySa25,
      what: 'Many technologies depend on crystals: batteries, magnets, catalysts and materials that capture carbon dioxide. Finding a new crystal with a useful property has usually meant testing known materials one after another. MatterGen, built by Microsoft Research, works the other way round. It is a diffusion model, the same family of artificial intelligence used by image generators: it starts from a random arrangement of atoms and refines it step by step into a crystal. It learned from about 608,000 stable crystal structures taken from two open databases of materials, the Materials Project and Alexandria. After extra training, it can be asked for a crystal with a certain chemistry, symmetry or property, such as how strongly the material resists being squeezed. The code and training data are published openly.',
      problem:
        'Screening known materials can only find what has already been catalogued, and it runs out of candidates. In the Microsoft Research blog, a generative model kept finding new candidates for very hard-to-squeeze materials while a screening search ran out of known ones. The Nature paper reports that, compared with earlier generative models, MatterGen’s crystals are more than twice as likely to be new and stable, and they sit more than ten times closer to the nearest settled, lowest-energy arrangement of their atoms, a sign that they are closer to a stable form.',
      how: 'The laboratory test is the number to look at, because computer results are only predictions. The team asked MatterGen for a material that resists squeezing with a strength of 200 gigapascals (a gigapascal is a unit of pressure). Thousands of computer designs were filtered down to 75, and the researchers chose four to make. One was made successfully: a compound of tantalum, chromium and oxygen. Testing the sample gave an estimated value of up to 169 gigapascals, which is within 20 percent of the target. The other results in the paper, such as stability, are computer calculations, so this laboratory test shows how a real sample behaves.',
      risks:
        'Only one of the four chosen designs could be made, and the real material had its tantalum and chromium atoms mixed at random, where the computer design had them in an orderly pattern. Most of the evaluation is calculation, and the authors write that real-world use needs more than these tests. The model also produces crystals with very low symmetry more often than the training data does, especially for larger crystals. The paper’s own summary calls the experiment a proof of concept.',
      sources: [
        cite(
          'Nature: A generative model for inorganic materials design (16 January 2025)',
          matterPaper,
        ),
        cite(
          'Microsoft Research: MatterGen: A new paradigm of materials design with generative AI (16 January 2025)',
          matterBlog,
        ),
        cite('GitHub: microsoft/mattergen (code and data)', matterCode),
        cite('Wikimedia Commons: Quartz, Tibet (photo)', quartz),
      ],
    }),
    neuralgcm: card({
      title: 'NeuralGCM hybrid climate model',
      hook: 'On 22 July 2024 the journal Nature published NeuralGCM, a Google Research model that keeps the physics of large-scale air movement and uses a neural network for clouds and other small-scale processes. Run over 40 years of the past, its temperature error was 0.25 degrees Celsius, against 0.75 for standard atmosphere-only models, and it ran more than 3,500 times faster than a detailed physics model.',
      imageAlt:
        'Illustrative stock photograph of Earth’s atmosphere and a crescent Moon taken from the International Space Station in 2006.',
      caption:
        'Illustrative stock photograph of Earth’s atmosphere and a crescent Moon taken from the International Space Station in 2006.',
      figureCredit:
        'Photo: National Aeronautics and Space Administration Earth Observatory (International Space Station Expedition 13 crew), via Wikimedia Commons, public domain. File page: https://commons.wikimedia.org/wiki/File:Top_of_Atmosphere.jpg',
      licenseLabel: 'public domain',
      licenseUrl: atmosphere,
      what: 'A climate model divides the atmosphere into a grid of boxes and calculates how air, heat and moisture move between them. Large-scale motion follows well-known physics, but clouds and rain form on scales much smaller than a box, so conventional models fill that gap with simplified rules of thumb. NeuralGCM, from Google Research with the European Centre for Medium-Range Weather Forecasts, is a hybrid. It keeps a physics solver for the large-scale motion and replaces the rules of thumb with a neural network, a computer program that learns patterns from data, trained on decades of past weather records. Because the solver and the network were trained together as one system, this helps the model stay stable when it runs for years. Its code and trained models are published openly.',
      problem:
        'Climate research needs many long simulations to see how the atmosphere might respond to changes, and each simulation of a detailed physics model needs a supercomputer. According to Google Research, a year of simulated atmosphere took about 8 minutes with NeuralGCM, against about 20 days with a very detailed physics model from the United States National Oceanic and Atmospheric Administration, which makes NeuralGCM more than 3,500 times faster. Because it can run on a single machine, more research groups could run their own experiments. The Nature paper also reports that NeuralGCM’s ensemble weather forecasts (sets of forecasts from slightly different starting conditions) are competitive with the European Centre’s own for 1 to 15 days ahead.',
      how: 'The 0.25 against 0.75 degrees Celsius comparison is a test on the past. The model was run over the 40 years from 1980 to 2020, given the real sea-surface temperatures of those years, and its air temperatures were compared with a standard record of past weather. According to Google Research, the average error was 0.25 degrees Celsius for NeuralGCM and 0.75 for the atmosphere-only models from an international model comparison project, which makes the new model about three times closer. Atmosphere-only means that the ocean is not simulated: its temperatures are fed in from observations, which is how the comparison models are also used. The speed figure compares the same task, simulating the atmosphere for a year, at the settings the researchers chose for each model.',
      risks:
        'NeuralGCM simulates only the atmosphere. Oceans, sea ice and the carbon cycle are outside the model, and Google Research hopes to add them later. In the 40-year test, 22 of 37 runs stayed stable for the full 40 years, and the results come from those 22. The authors state that the model does not extrapolate to substantially different future climates: when sea-surface temperatures were raised by 1 and 2 degrees it showed some realistic features of warming, but at 4 degrees its response departed from what scientists expect and it drifted. In an indirect comparison with the detailed physics model, its error for rainfall (measured as rain minus evaporation) is slightly larger, and in short forecasts it underestimates the most extreme tropical events. The authors also note that their comparison with the detailed physics model slightly favours NeuralGCM, because it was tuned to match the same weather record it was judged against.',
      sources: [
        cite(
          'Nature: Neural general circulation models for weather and climate (22 July 2024)',
          neuralPaper,
        ),
        cite(
          'Google Research: Fast, accurate climate modeling with NeuralGCM (22 July 2024)',
          neuralBlog,
        ),
        cite('GitHub: neuralgcm/neuralgcm (code and model information)', neuralCode),
        cite('Wikimedia Commons: Top of Atmosphere (photo)', atmosphere),
      ],
    }),
    'torax-fusion-ai': card({
      title: 'TORAX fusion plasma simulator',
      hook: 'In May 2024 Google DeepMind released TORAX, a fast open-source simulator of the hot gas inside a fusion machine. On 16 October 2025 Google DeepMind and Commonwealth Fusion Systems announced a partnership to use it, together with artificial intelligence, to plan how their SPARC machine will be run.',
      imageAlt:
        'Illustrative stock photograph of the inside of the Joint European Torus, a tokamak in England and a different machine from SPARC.',
      caption:
        'Illustrative stock photograph of the inside of the Joint European Torus, a tokamak in England and a different machine from SPARC.',
      figureCredit:
        'Photo: Kevan, via Wikimedia Commons, licence Creative Commons Attribution 2.0 (https://creativecommons.org/licenses/by/2.0/). File page: https://commons.wikimedia.org/wiki/File:Joint_European_Torus_(6055833306).jpg',
      licenseLabel: 'Creative Commons Attribution 2.0',
      licenseUrl: ccBy20,
      what: 'Fusion energy aims to join light atoms in a gas heated to over 100 million degrees Celsius, called a plasma, which is held in place by magnetic fields inside a doughnut-shaped machine called a tokamak. Before running such a machine, engineers use computer simulations to predict how heat, electric current and particles move through the plasma. TORAX is a simulator for the core of the plasma, released as open source by Google DeepMind in May 2024. It is written in a way that lets the computer work out how a small change in any setting would change the result, which makes it suitable for automatic searches for good settings and for training artificial intelligence. On 16 October 2025 DeepMind and Commonwealth Fusion Systems, a company building a tokamak called SPARC in Massachusetts, announced a research partnership. According to Google DeepMind, TORAX has already become central to the daily simulation work of Commonwealth Fusion Systems on SPARC.',
      problem:
        'A tokamak has many settings, such as magnet currents, fuel injection and heating power, and finding the best combination by hand is slow. DeepMind and Commonwealth Fusion Systems describe running millions of virtual experiments in TORAX before SPARC is switched on, so that the team can start with promising plans. SPARC aims to be the first magnetic fusion machine to produce more power from fusion than it takes to sustain it. The partnership also explores using reinforcement learning, a way for a computer program to learn by trial and reward, to manage the heat that SPARC will release onto its walls. Because TORAX is open, other fusion teams can use and check the same tool.',
      how: 'All of this work concerns planning and simulation. A simulation is a prediction, and its value depends on how closely it matches a real machine. Google DeepMind says it will validate and calibrate TORAX against past tokamak data and more detailed simulations as it goes. The partnership is a research effort, and SPARC itself has not yet produced a plasma: in late August 2026 Commonwealth Fusion Systems wrote that it expects to start operating SPARC in the coming months. Two dates are easy to confuse: May 2024 is the release of the simulator, and 16 October 2025 is the announcement of the partnership.',
      risks:
        'TORAX models the core of the plasma. It covers heat and particle flow and the electric current, and it relies on simpler stand-in models for some physics; the project’s own description says that one of its stand-ins covers only limited conditions. It still has to be checked against experiments. SPARC has not demonstrated net fusion energy, which is its goal. The control work is at an early stage: the partnership says it begins with learning to spread the heat on the machine’s walls, and Google DeepMind describes wider real-time control as a possibility for the future. An earlier DeepMind result from 2022 showed that reinforcement learning could control the magnets of a research tokamak in Switzerland, but that was a different machine and a different task.',
      sources: [
        cite(
          'Google DeepMind: Bringing AI to the next generation of fusion energy (16 October 2025)',
          toraxBlog,
        ),
        cite(
          'Google DeepMind: Accelerating fusion science through learned plasma control (with the note on the May 2024 TORAX release)',
          toraxNote,
        ),
        cite(
          'Commonwealth Fusion Systems: With AI alliance, Google DeepMind and CFS take fusion to the next level (16 October 2025)',
          cfsAlliance,
        ),
        cite(
          'Commonwealth Fusion Systems: Why CFS is confident we’ll demonstrate net fusion energy (28 August 2026)',
          cfsPlasma,
        ),
        cite('GitHub: google-deepmind/torax (code and description)', toraxCode),
        cite('Wikimedia Commons: Joint European Torus (photo)', jet),
      ],
    }),
    'diiid-tearing-ai': card({
      title: 'Artificial intelligence against tearing instability on DIII-D',
      hook: 'On 21 February 2024 the journal Nature published an experiment on the DIII-D tokamak in California in which an artificial intelligence controller learned by trial and reward to adjust heating and plasma shape in real time, keeping the predicted risk of tearing, a leading cause of plasma collapse, under a chosen limit.',
      imageAlt:
        'Illustrative stock photograph of a worker inside the DIII-D vacuum vessel during a maintenance period in 2017. It was taken years before the experiment described here.',
      caption:
        'Illustrative stock photograph of a worker inside the DIII-D vacuum vessel during a maintenance period in 2017. It was taken years before the experiment described here.',
      figureCredit:
        'Photo: Rswilcox, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). File page: https://commons.wikimedia.org/wiki/File:2017_TOCAMAC_Fusion_Chamber_N0689.jpg',
      licenseLabel: 'Creative Commons Attribution-ShareAlike 4.0',
      licenseUrl: ccBySa40,
      what: 'A tokamak holds an extremely hot gas, called a plasma, inside a doughnut-shaped magnetic field. Sometimes the magnetic field lines inside the plasma break and reconnect, forming ring-shaped bubbles called magnetic islands. This is called a tearing instability, and it is the leading cause of disruptions, sudden collapses of the plasma that end the experiment and can damage the machine’s walls. A team from Princeton University and the DIII-D National Fusion Facility, a United States Department of Energy research facility located at General Atomics in San Diego, trained a controller using reinforcement learning, a method in which a program learns by trying actions and being rewarded. The program was trained on a computer model that predicts, 25 milliseconds ahead, the plasma pressure and a tearing risk score between 0 and 1. It learned to change two things, the heating power of the neutral beams and the shape of the plasma, so as to keep the pressure high while the predicted risk stays under a chosen limit.',
      problem:
        'A power plant based on a tokamak needs a high plasma pressure to produce energy, and it needs to avoid disruptions, which can damage the walls. Earlier methods mainly tried to suppress tearing after it had formed, which often came too late, so the aim here was to avoid it from the start. The Nature paper reports that the controller kept the predicted risk under its limit even in difficult conditions of the kind planned for the International Thermonuclear Experimental Reactor (ITER), the large international fusion project under construction in France, where the plasma rotates only slowly and tearing is especially hard to avoid. In one comparison run, a traditional controller held a fixed pressure target, a large tearing event began and the plasma collapsed.',
      how: 'The tearing risk score is a prediction from a trained model, running from 0 (no risk expected) to 1 (high risk), for 25 milliseconds ahead. The controller was trained with three different limits: 0.2, 0.5 and 0.7. A lower limit makes it more cautious. With 0.5 and 0.7 the plasma lasted until the end of the planned period; with the most cautious limit of 0.2 the plasma collapsed at about 5.5 seconds. The cautious controller had reduced the heating to a pre-set lower bound and could not reduce it further, an interaction that was not part of its training. So a stricter limit was not always the better choice. Compare this with the traditional controller in the same experiment: it kept a fixed pressure target, a large tearing event began after 2.6 seconds, and the plasma collapsed 0.5 seconds later.',
      risks:
        'The authors call the work a proof of concept at an early stage of fine-tuning. It was tested on one machine with two controls (heating power and plasma shape), and the other controls, including the plasma current, were held fixed to keep the conditions close to those planned for ITER. The prediction model is a black box: it can say that tearing is likely but cannot explain the cause. The authors note that the controller will need to be tested with more controls, such as the radio-wave heating that ITER plans to use, and with the more limited sensors that a power plant will have. In one test with added radio-wave heating, the plasma was disrupted after an unplanned loss of plasma current, though the controller handled a brief spike in risk. The authors also report that the controller’s shape changes were large, and they checked by calculation that ITER’s coils could produce them.',
      sources: [
        cite(
          'Nature: Avoiding fusion plasma tearing instability with deep reinforcement learning (21 February 2024)',
          tearingPaper,
        ),
        cite(
          'Wikimedia Commons: 2017 TOCAMAC Fusion Chamber N0689 (photo of the DIII-D vacuum vessel)',
          diiid,
        ),
      ],
    }),
  },
  ru: aiScienceRu,
  pl: aiSciencePl,
  lv: aiScienceLv,
};
