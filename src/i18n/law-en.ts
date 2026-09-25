import type { LawCopy } from '../data/law';

export const en: Record<string, LawCopy> = {
  'paris-agreement': {
    title: 'Paris Agreement',
    hook: 'The main climate treaty still in force. It binds parties to NDCs and a well-below-2°C / 1.5°C temperature goal — not a global emissions cap written into the text.',
    imageAlt:
      'François Hollande, Laurent Fabius and Ban Ki-moon applaud on the COP21 stage after the Paris Agreement was adopted',
    jurisdiction: 'United Nations Framework Convention on Climate Change (Parties)',
    officialName: 'Paris Agreement',
    citation:
      'Paris Agreement under the UNFCCC; adopted 12 December 2015 (COP21); entered into force 4 November 2016',
    yearStatus: 'Adopted 12 December 2015 (COP21). Entered into force 4 November 2016.',
    what: 'A legally binding treaty under the UNFCCC. Parties submit nationally determined contributions (NDCs), report progress, and take stock together. The Agreement’s temperature language aims to hold warming well below 2°C above pre-industrial levels and pursue 1.5°C. It also covers adaptation, finance, technology, and sinks (including forests) — in treaty form, not as a voluntary pledge sheet alone.',
    where:
      'Applies to Parties that have ratified or otherwise consented. Adopted at COP21 in Paris (12 December 2015); entered into force 4 November 2016. UNFCCC and the UN Treaty Depositary keep the authoritative party list. Withdrawal and re-accession rules exist; treat membership as a living depositary fact, not a slogan.',
    effects:
      'Intended effects: align national climate plans under one treaty architecture, create a five-year ambition cycle, and put 1.5°C into multilateral law. Outcomes depend on NDC content and domestic implementation — the treaty does not itself shut a power plant.',
    caveats:
      'NDCs are nationally determined; the Agreement does not prescribe identical economy-wide caps for every Party. Temperature goals are collective aims, not a court-enforceable global carbon budget inside the text. Do not confuse Paris with the Kyoto Protocol’s earlier Annex-I quantified targets.',
    sourcesNote:
      'UNFCCC page on the Paris Agreement; UNFCCC English PDF of the Agreement; UN Treaty Depositary record.',
  },
  'montreal-protocol': {
    title: 'Montreal Protocol on Substances that Deplete the Ozone Layer',
    hook: 'The ozone treaty that actually cut ODS production and trade. Kigali later added HFCs for climate — still Montreal machinery, not a second UNFCCC.',
    imageAlt:
      'NASA visualization of low ozone over Antarctica — the ozone hole the Montreal Protocol was written to reverse',
    jurisdiction: 'Parties to the Montreal Protocol (UNEP Ozone Secretariat)',
    officialName: 'Montreal Protocol on Substances that Deplete the Ozone Layer',
    citation:
      'Montreal Protocol (1987, as adjusted/amended); Kigali Amendment adopted 15 October 2016, HFC controls in force from 1 January 2019 for Parties for which it entered into force',
    yearStatus:
      'Protocol adopted 1987. Kigali Amendment adopted 15 October 2016; HFC controls in force from 1 January 2019 for Parties for which it entered into force.',
    what: 'Controls production and consumption of ozone-depleting substances through binding schedules, trade controls with non-Parties, reporting, and a Multilateral Fund for Article 5 Parties. Adjustments and amendments tighten annex chemicals over time. The Kigali Amendment (2016) phases down hydrofluorocarbons (HFCs) — potent greenhouse gases used as ODS substitutes — under the same Protocol.',
    where:
      'Near-universal Protocol membership (Ozone Secretariat / depositary). Protocol adopted 1987; successive adjustments and amendments. Kigali entered into force 1 January 2019 once ratification thresholds were met; HFC trade-control provisions have a separate later trigger. Treat party status for Kigali as depositary-specific.',
    effects:
      'Ozone-layer recovery metrics and ODS phase-out schedules are the Protocol’s documented success track — use Ozone Secretariat / WMO–UNEP scientific assessments, not marketing. Kigali’s intended climate benefit is avoided HFC warming; delivery follows national phase-down schedules.',
    caveats:
      'Success on ODS is not automatic success on every climate gas. HFCs are under Montreal via Kigali; CO₂ and methane stay under UNFCCC/Paris. Illegal trade and exemptions still matter. Do not caption this card as “the climate treaty” — that is Paris.',
    sourcesNote:
      'Ozone Secretariat Montreal Protocol page; Ozone Secretariat amendments page (including Kigali); UN Treaty Depositary record for the Kigali Amendment.',
  },
  'eu-deforestation-regulation': {
    title: 'EU Deforestation Regulation',
    hook: 'An EU market rule: listed commodities must be deforestation-free and legal to place or export. Enacted 2023; main duties apply from late 2026 / mid-2027 by operator size — not a UN forest treaty.',
    imageAlt:
      'Oil-palm plantation surrounding a remaining rainforest fragment in Borneo — a commodity-and-forest edge the EU deforestation rule covers',
    jurisdiction: 'European Union',
    officialName: 'Regulation on deforestation-free products',
    citation:
      'Regulation (EU) 2023/1115 of the European Parliament and of the Council of 31 May 2023 on deforestation-free products',
    yearStatus:
      'Enacted 31 May 2023. In force as EU regulation. Application: large and medium operators 30 December 2026; micro and small operators 30 June 2027 (micro/small already under EUTR: 30 December 2026).',
    what: 'Operators and traders placing in-scope commodities (cattle, cocoa, coffee, oil palm, rubber, soya, wood, and listed derived products) on the EU market, or exporting them, must show the goods are deforestation-free (cut-off 31 December 2020) and produced legally, with due diligence and geolocation. Repeals the EU Timber Regulation for the overlapping wood pathway. Country benchmarking and an Information System support checks.',
    where:
      'In force as EU regulation. Commission pages (checked 19 Sep 2026) state application dates: large and medium operators 30 December 2026; micro and small operators 30 June 2027 (micro/small already under EUTR: 30 December 2026). Later delegated additions can have a further delayed product start. Status = enacted law with phased application — do not file under “Under consideration.”',
    effects:
      'Statutory aims: cut EU-driven deforestation/degradation and related emissions and biodiversity loss. Commission materials cite order-of-magnitude emission-cut estimates from the impact assessment — label those as intended/modelled, not measured 2026 outcomes.',
    caveats:
      'Due diligence shifts costs onto supply chains; leakage to other markets is a real risk. Delayed application means shelves must not say “already blocking every shipment today.” Not a substitute for producer-country land law or for Paris NDCs.',
    sourcesNote:
      'EUR-Lex official text of Regulation (EU) 2023/1115; Commission deforestation-free products page.',
  },
  'eu-ets': {
    title: 'EU Emissions Trading System (EU ETS)',
    hook: 'The EU’s cap-and-trade for large emitters. A declining allowance cap with auctioning and a market stability reserve — not a consumer carbon tax and not Paris itself.',
    imageAlt:
      'The Niederaussem lignite power station in Germany — a large stationary emitter of the kind the EU ETS covers',
    jurisdiction: 'European Union',
    officialName: 'EU Emissions Trading System',
    citation:
      'Directive 2003/87/EC of the European Parliament and of the Council (as amended) establishing a system for greenhouse gas emission allowance trading',
    yearStatus: 'In force. Legal spine: Directive 2003/87/EC as amended.',
    what: 'Creates a Union-wide market in emission allowances for covered installations and aviation (and, under later reforms, further sectors as amended). The cap falls over time; operators surrender allowances against verified emissions. Links and neighbouring systems are policy choices around the Directive, not automatic global coverage.',
    where:
      'In force across the EU (and linked arrangements where agreed). Legal spine: Directive 2003/87/EC as amended; Commission “What is the EU ETS” hub summarises current design. Use EUR-Lex consolidated text for citation hygiene when amending packages land.',
    effects:
      'Intended: put a price on covered GHG emissions and cut them under a falling cap. Documented system outcomes belong in EEA/Commission ETS reports — cite those for tonne figures; do not invent.',
    caveats:
      'Coverage is sector-limited; free allocation, carbon leakage rules, and price volatility are design features under debate. EU ETS is not the Paris Agreement and not a household fuel duty. Do not merge with EUDR or Nature Restoration on one card.',
    sourcesNote:
      'Commission EU ETS hub; Commission “What is the EU ETS” page; EUR-Lex Directive 2003/87/EC.',
  },
  'nature-restoration': {
    title: 'EU Nature Restoration Law',
    hook: 'A binding restoration regulation — not a strategy paper. Draft national plans were due 1 September 2026; the Commission is assessing them.',
    imageAlt:
      'A peat bog with open water and low vegetation — the kind of wetland habitat EU restoration targets cover',
    jurisdiction: 'European Union',
    officialName: 'Nature Restoration Regulation',
    citation:
      'Regulation (EU) 2024/1991 of the European Parliament and of the Council of 24 June 2024 on nature restoration',
    yearStatus: 'Adopted 24 June 2024. In force since 18 August 2024.',
    what: 'The regulation sets Union-wide restoration duties. Member States must jointly put restoration measures in place on at least 20 percent of the EU’s land and sea areas by 2030, and on all ecosystems that need restoration by 2050. It adds time-bound targets for Habitats Directive Annex I habitat types, peatlands, rivers, urban green space, agricultural ecosystems, forests, and marine habitats — on top of, not instead of, the Birds and Habitats Directives.',
    where: 'It applies directly in every EU Member State. Each state had to send the Commission a draft national restoration plan by 1 September 2026. The Commission and the European Environment Agency then assess the drafts; final plans follow after Commission observations. Implementing Regulation (EU) 2025/912 set a uniform plan format.',
    effects: 'The intended effects are to reverse ecosystem decline, store more carbon in soils and wetlands, and reduce some disaster and water-security risks. Those are statutory aims, not measured 2024–2026 outcomes. The law is too new for a completed evaluation of hectares actually restored under it.',
    caveats: 'A regulation is not a restored peatland. Delivery sits in national plans, budgets, and land-use fights. The text was politically contested. It does not repeal Natura 2000 rules, and it does not, by itself, stop conversion outside restoration sites.',
    sourcesNote:
      'Primary text on EUR-Lex; Commission pages on the law and on entry into force (18 August 2024); Commission note that draft plans were due 1 September 2026.',
  },
  'clean-air-act': {
    title: 'U.S. Clean Air Act',
    hook: 'The main U.S. air-pollution statute. EPA’s own peer-reviewed cost–benefit studies are the usual sourced claim — not a slogan.',
    imageAlt: 'The west front of the United States Capitol, where Congress writes and amends federal statutes',
    jurisdiction: 'United States',
    officialName: 'Clean Air Act',
    citation: '42 U.S.C. § 7401 et seq. (1970; major amendments 1977 and 1990)',
    yearStatus: 'Enacted 1970. Still in force, with later amendments.',
    what: 'The Act requires national ambient air-quality standards, state implementation plans, permits for new and modified sources, mobile-source controls, and — after 1990 — an acid-rain cap-and-trade programme and tighter toxics rules. It is a pollution statute, not a comprehensive climate law, though some greenhouse-gas rules have been built on it.',
    where: 'United States federal law, implemented by EPA and by the states. It does not apply outside U.S. jurisdiction.',
    effects: 'EPA’s Second Prospective study (2011), required by Section 812 of the 1990 amendments, estimated that those amendments would prevent about 230,000 premature deaths in the year 2020 and that the central benefits estimate exceeded costs by more than 30 to 1. Those figures are model results against a no-amendment baseline, not a count of named people.',
    caveats: 'Benefits are estimated, not observed one-for-one. Some areas still miss standards. Litigation and political cycles change rules. Do not treat the Act as a finished climate instrument or as proof that every local airshed is clean.',
    sourcesNote:
      'EPA Clean Air Act overview; EPA “Benefits and Costs of the Clean Air Act 1990–2020, the Second Prospective Study”; U.S. Code chapter 85.',
  },
  'single-use-plastics': {
    title: 'EU Single-Use Plastics Directive',
    hook: 'A real product ban and consumption-cut rule for a listed set of items — not a global plastic-production cap.',
    imageAlt: 'Collected PET bottles, the kind of single-use packaging the Directive targets only in part',
    jurisdiction: 'European Union',
    officialName: 'Single-Use Plastics Directive',
    citation:
      'Directive (EU) 2019/904 of the European Parliament and of the Council of 5 June 2019 on the reduction of the impact of certain plastic products on the environment',
    yearStatus: 'In force 2 July 2019. Member States had to transpose the core market restrictions by 3 July 2021.',
    what: 'The Directive bans placing certain listed single-use plastic products on the EU market (including cotton-bud sticks, cutlery, plates, straws, stirrers, and oxo-degradable plastic). It also requires consumption reduction for some cups and food containers, extended-producer-responsibility rules, marking, and separate collection targets for plastic bottles.',
    where: 'EU Member States, via national transposing laws. EEA relevance is stated on the act. It is not a United Nations treaty and does not bind non-EU countries.',
    effects: 'The intended effect is to cut marine and other environmental leakage from the products that dominate some European beach-litter counts. That rationale is in the Directive itself. National implementation and substitution differ; no single post-2021 global-tonnage reduction is cited here.',
    caveats: 'A ban on listed items is not a cap on polymer production. Substitutes (other plastics, paper, or “bio” materials) can shift the problem. Transposition quality varies. Packaging rules have since been updated by later EU acts, including the 2025 packaging regulation that amends this Directive.',
    sourcesNote: 'EUR-Lex official text; Commission single-use plastics topic page.',
  },
  'costa-rica-pes': {
    title: 'Costa Rica — payment for environmental services',
    hook: 'A 1996 forestry law that pays landowners to keep forest standing. It is one instrument, not the only reason the canopy returned.',
    imageAlt: 'Monteverde cloud forest in Costa Rica — the kind of cover the PSA programme pays to protect',
    jurisdiction: 'Costa Rica',
    officialName: 'Pago por Servicios Ambientales (PSA), under the Forestry Law',
    citation: 'Forestry Law No. 7575 (1996); PSA administered by FONAFIFO',
    yearStatus: 'Law 7575 adopted 1996. The PSA programme has run from the late 1990s and is still open for contracts.',
    what: 'Costa Rica’s Forestry Law created a legal basis to pay private landowners for four named environmental services: greenhouse-gas mitigation, water protection, biodiversity, and scenic beauty. FONAFIFO, the national forestry financing fund, runs contracts for forest protection, reforestation, natural regeneration, and agroforestry. Fuel-tax revenue is a statutory funding source described by FONAFIFO.',
    where: 'Costa Rica, on eligible private and some other lands that enter a PSA contract. It is national law, not a regional treaty.',
    effects: 'The intended effect is to make standing forest worth money. UNFCCC and FONAFIFO present PSA as a mechanism that pays for protection and reforestation. Costa Rica’s later forest-cover recovery had several causes — including an earlier collapse of extensive cattle ranching — so this page does not assign a hectare total or a percentage of recovery to PSA alone.',
    caveats: 'Payments depend on the budget and on who can navigate the application. The programme can favour titled land. It is not a ban on all deforestation, and it is not a model that copies onto every country without the tax base and the cadastre.',
    sourcesNote: 'FONAFIFO PSA page; UNFCCC Momentum for Change write-up; FAOLEX record for Law 7575.',
  },
  'turkmenistan-two-trees': {
    title: 'Turkmenistan — two trees a year',
    hook: 'A 1992 presidential decree, not a Tajikistan statute and not “three trees.” The two-tree line is civic-duty language; the operative articles organise campaigns.',
    imageAlt:
      'A landscaped avenue in Ashgabat — civic greenery of the kind the 1992 decree tries to organise, not a photograph of that year’s planting month',
    jurisdiction: 'Turkmenistan',
    officialName: 'On the development of horticulture and greening in Turkmenistan',
    citation:
      'Постановление Президента Туркменистана «О развитии садоводства и озеленении в Туркменистане», 9 November 1992',
    yearStatus:
      'Presidential decree (постановление), 9 November 1992. FAOLEX/UNEP LEAP list it as in force from official publication; they do not give a separate decree number.',
    what: 'The preamble states that it is the duty of every citizen of Turkmenistan to plant two trees each year — one in honour of a newborn citizen, one in memory of the deceased. The operative articles then declare annual autumn and spring planting months, order velayat, Ashgabat, and etrap khyakims to organise mass plantings (including along named roads), and require the ministry responsible for nature management to supply planting material. It is a presidential постановление, not an act of the Mejlis and not a criminal code for people who fail to plant.',
    where: 'Turkmenistan. Later state planting campaigns (for example Kopet Dag parkland decrees in 1998, or later national forest-programme actions) are separate instruments. This card is only the 1992 text.',
    effects: 'Intended effects: revive horticulture and organise seasonal mass planting with a public supply of seedlings. This page does not invent compliance rates, survival rates, or a hectare total attributable to the 1992 decree.',
    caveats: 'Civic-duty language in a preamble is not the same as an individually prosecuted quota. FAOLEX notes that a reference number is unavailable. Do not retitle this as “plant three trees,” as a Tajikistan personal quota, or as a Philippines graduation bill — those are different or unverified stories.',
    sourcesNote:
      'Primary Russian text on FAOLEX (tuk80588.pdf); UNEP LEAP catalogue abstract of the same decree.',
  },
  'uzbekistan-compensatory-planting': {
    title: 'Uzbekistan — 100 saplings per illegal cut',
    hook: 'A 2024 statute: plant at least one hundred saplings after illegal felling of a valuable non-forest-fund tree. Penalty and care duty — not an annual citizen quota.',
    imageAlt:
      'Apricot trees in bloom on a Tashkent street — urban trees of the kind the flora-law amendment protects, not a photograph of a named enforcement case',
    jurisdiction: 'Uzbekistan',
    officialName: 'On the protection and use of flora (as amended)',
    citation:
      'Law of the Republic of Uzbekistan No. ЗРУ-916 / O‘RQ-916 of 29 February 2024, inserting Article 49¹ into the Law “On the protection and use of flora” (No. 543-I of 26 December 1997, restated by ЗРУ-409 of 21 September 2016)',
    yearStatus:
      'Legislative Chamber 21 November 2023; Senate 20 December 2023; signed 29 February 2024. Official publication 1 March 2024 (National legislation database No. 03/24/916/0167). Article 49¹ in force from publication. Article 49² financial sanctions delayed three months.',
    what: 'Article 49¹, inserted by ЗРУ-916, says that if valuable species of trees or shrubs that are not in the state forest fund are illegally cut or destroyed, the offender must, by decision of the Ministry of Ecology, Environmental Protection and Climate Change, plant at their own expense at least one hundred saplings of no lesser value for each such tree or shrub. Planting is on the site of the cut; if there is not enough land, the remainder goes elsewhere in the same administrative-territorial unit. The offender must care for the saplings for three years. Article 49² adds fines of 100–300 base calculation units for legal entities. The same law also raised some administrative-code penalties. This is a compensatory duty after an offence, not a yearly planting quota for every citizen.',
    where: 'Uzbekistan, for valuable trees and shrubs outside the state forest fund. It does not, by itself, rewrite forest-fund rules. The national greening project “Yashil Makon,” named in the preamble of ЗРУ-916, is a separate programme.',
    effects:
      'Intended effects, as the amending law itself states: deter illegal felling, raise liability, and unify enforcement practice. This page does not invent a count of saplings planted under Article 49¹ or a survival rate.',
    caveats:
      '“At least one hundred” applies after illegal cutting or destruction of listed valuable non-forest-fund trees — not to every tree in the country and not as an annual civic duty. Do not merge this with the Turkmenistan 1992 two-trees decree, with a Tajikistan personal quota (this catalog has no verified statute of that kind), or with the Philippines graduation bill. Cabinet rules may set how value, species, place, and deadlines are decided; those implementing details are not this article.',
    sourcesNote:
      'Primary text of ЗРУ-916 on lex.uz (Russian and Uzbek); consolidated flora-law page showing Article 49¹; UzDaily English note on Senate consideration of the same law.',
  },
  'un-plastics-treaty': {
    title: 'UN plastics treaty (INC process)',
    hook: 'A mandated negotiation for a legally binding plastics instrument. There is no agreed treaty text.',
    imageAlt: 'The Palais des Nations in Geneva, where INC-5.2 talks adjourned without a plastics treaty',
    jurisdiction: 'United Nations (intergovernmental negotiation)',
    officialName: 'International legally binding instrument on plastic pollution, including in the marine environment',
    citation: 'UNEA resolution 5/14 (2 March 2022); Intergovernmental Negotiating Committee (INC)',
    yearStatus:
      'Mandate 2022. Not adopted. INC-5.1 (Busan, 2024) and INC-5.2 (Geneva, August 2025) ended without consensus. Informal work continued in 2026; a further formal round has been discussed for 2027.',
    what: 'UNEA asked governments to negotiate a treaty covering the full life cycle of plastics, including the marine environment. The draft has been fought over production limits, chemicals, finance, and whether decisions can be taken without consensus. A 2026 chair’s “Aid to Negotiations” paper is an informal reference, not agreed law.',
    where: 'No jurisdiction yet. If adopted and ratified, it would bind only the states that join. Until then it binds no one.',
    effects: 'Intended effect, if a strong treaty existed: cut leakage and, in some countries’ positions, constrain production. That is a negotiating aim. There is no implemented global plastics statute to evaluate.',
    caveats: 'Do not file this under enacted law. Two “final” rounds failed. A chair’s paper is not a treaty. National single-use bans (including the EU Directive in this catalog) are separate instruments.',
    sourcesNote:
      'UNEP INC hub; UNEA 5/14; UN Geneva news on the August 2025 adjournment.',
  },
  'rome-statute-ecocide': {
    title: 'Ecocide as a Rome Statute crime',
    hook: 'A proposed fifth ICC crime. It is not in the Statute. Some countries have written national ecocide offences — that is not the same thing.',
    imageAlt: 'The International Criminal Court building in The Hague — the court whose Statute this idea would amend',
    jurisdiction: 'Proposal to the International Criminal Court Assembly of States Parties',
    officialName: 'Proposed amendment to add “ecocide” as a crime under the Rome Statute',
    citation:
      'Independent Expert Panel definition (June 2021); proposal presented by Vanuatu, Fiji, and Samoa (September 2024)',
    yearStatus:
      'Idea / treaty-amendment proposal. Not adopted. Discussed in the ASP Working Group on Amendments; Vanuatu told the group in October 2025 it would not table the text for adoption at that year’s Assembly.',
    what: 'The 2021 panel defined ecocide, in draft, as unlawful or wanton acts committed with knowledge of a substantial likelihood of severe and either widespread or long-term environmental damage. The idea is to add that as a fifth crime next to genocide, crimes against humanity, war crimes, and aggression. Amending the Rome Statute needs a large majority of States Parties and then ratifications.',
    where: 'Nowhere as ICC law. Separate national crimes (for example Belgium’s 2024 ecocide offence, or later national statutes) apply only in those countries. They do not create ICC jurisdiction.',
    effects: 'Intended effect: personal criminal liability for the most severe environmental destruction, and a deterrent signal. There is no ICC case law on a standalone ecocide count because the crime is not in the Statute.',
    caveats: 'This card is an idea, not a statute in force at the Court. A campaign definition is not an adopted article. National ecocide laws are worth watching and are not this proposal.',
    sourcesNote:
      'Stop Ecocide legal-definition page; ICC ASP Working Group on Amendments report (ICC-ASP-24-26); Rome Statute text as in force.',
  },
  'eu-ai-act': {
    title: 'EU Artificial Intelligence Act',
    hook: 'The first horizontal EU law that sorts AI systems by risk. High-risk duties were later deferred; some transparency rules were not.',
    imageAlt: 'The European Parliament hemicycle in Strasbourg, where the AI Act was adopted',
    jurisdiction: 'European Union',
    officialName: 'Artificial Intelligence Act',
    citation:
      'Regulation (EU) 2024/1689 of 13 June 2024 laying down harmonised rules on artificial intelligence',
    yearStatus:
      'In force 1 August 2024. Application is staged. Regulation (EU) 2026/1744 (Digital Omnibus on AI, in force 27 July 2026) moved some high-risk dates; it did not repeal the Act.',
    what: 'The Act bans some practices, imposes heavy duties on listed high-risk systems (Annex III use-cases such as employment, credit, biometrics, and critical infrastructure; Annex I product-safety AI), and sets transparency rules for certain systems and for general-purpose AI models. It is a product-and-risk law, not a cheerleading industrial plan.',
    where: 'Directly applicable in EU Member States, with extra-territorial hooks for providers who place systems on the Union market or whose output is used there. National authorities and the EU AI Office share enforcement.',
    effects: 'Intended effects: keep prohibited uses off the market, force documentation and human-oversight design for high-risk systems, and make some generative output identifiable. Those are design aims. This page does not invent a 2026 harm-reduction statistic.',
    caveats: 'Phasing matters. After the 2026 omnibus, Annex III high-risk rules apply from 2 December 2027 and Annex I product-related rules from 2 August 2028, while Article 50 transparency duties applied from 2 August 2026. “The AI Act is delayed” is a headline, not the whole timetable. Definitions and annex lists will be litigated.',
    sourcesNote:
      'EUR-Lex 2024/1689; Commission regulatory-framework page; Commission enforcement-timeline page (2026 update).',
  },
  'korea-ai-basic-act': {
    title: 'Korea AI Framework Act',
    hook: 'A national AI statute in force from January 2026, with a stated grace period on many fines.',
    imageAlt: 'The National Assembly Building of the Republic of Korea in Seoul',
    jurisdiction: 'Republic of Korea',
    officialName:
      'Framework Act on the Development of Artificial Intelligence and the Creation of a Foundation for Trust',
    citation: 'Act No. 20676, 21 January 2025 (as later amended); commonly called the AI Basic Act',
    yearStatus: 'Passed December 2024. Enacted 21 January 2025. In force 22 January 2026, with an enforcement decree.',
    what: 'The Act is a framework: national strategy and infrastructure, plus duties meant to support safe, trustworthy AI. High-impact systems face additional transparency and risk-management expectations. It is not a copy of the EU Annex III list, and the maximum administrative fine described in ministry materials is modest next to EU turnover penalties.',
    where: 'South Korea. Foreign providers that meet stated Korean-user or revenue thresholds can be pulled in; check the statute and decree, not a blog summary, for the current test.',
    effects: 'Intended effects: a legal basis for AI governance and for high-impact transparency. The Ministry of Science and ICT announced a grace period of at least one year from 22 January 2026 during which many fines and fact-finding investigations would be deferred except in serious harm cases. Duties during the grace period are not the same as “the law is off.”',
    caveats: 'A framework act plus a grace period is not a finished enforcement record. The decree and guidelines have been in active calibration. Do not call this “the world’s only AI law” — the EU Act is older as a comprehensive regime.',
    sourcesNote:
      'Korean Law Information Center English text; KLRI English viewer; MSIT English press release on entry into force.',
  },
  'china-generative-ai': {
    title: 'China generative-AI interim measures',
    hook: 'Binding rules for public generative-AI services inside China — filing, content, and training-data duties, not a general AI code.',
    imageAlt: 'Rows of data-center servers — the industrial setting of large generative models, not a named Chinese lab',
    jurisdiction: 'People’s Republic of China',
    officialName: 'Interim Measures for the Management of Generative Artificial Intelligence Services',
    citation:
      'Cyberspace Administration of China and six other departments; published 13 July 2023; effective 15 August 2023',
    yearStatus: 'In force since 15 August 2023. Interim departmental rules, not a National People’s Congress statute.',
    what: 'The Measures apply to generative services that provide text, images, audio, or video to the public in China. Providers must use lawful training data, protect personal information, manage illegal content, label generated material, and complete security assessments and algorithm filings where the rules require it. Overseas services aimed at the Chinese public can be blocked.',
    where: 'Mainland China, for public-facing generative services. Internal research tools that are not offered to the public sit outside the core scope as written.',
    effects: 'Intended effects: a filing-and-content regime for generative models used by the public, and a paper trail for regulators. CAC has published batches of filed services. This page does not treat filing counts as a safety proof.',
    caveats: 'These are interim measures under existing cyber, data, and personal-information laws. They are not an EU-style risk-tier act covering every AI system. Content rules reflect Chinese political and censorship law — relevant if you are comparing “AI safety” regimes honestly.',
    sourcesNote:
      'Official CAC publication of the Measures; FPF English comparison of the draft and the final text.',
  },
  'california-sb-53': {
    title: 'California frontier-AI transparency law',
    hook: 'A state statute for the largest model developers: publish a safety framework and report serious incidents. Not the vetoed SB 1047.',
    imageAlt: 'The California State Capitol in Sacramento',
    jurisdiction: 'California, United States',
    officialName: 'Transparency in Frontier Artificial Intelligence Act (TFAIA)',
    citation:
      'Senate Bill 53 (Wiener), Chapter 138, Statutes of 2025; Cal. Bus. & Prof. Code §§ 22757.10 et seq.',
    yearStatus:
      'Signed 29 September 2025. Core frontier-developer duties effective 1 January 2026. SB 1047 (2024) was vetoed and is not law.',
    what: 'SB 53 requires large developers of “frontier” models to publish a safety framework, assess catastrophic-risk claims in the statute’s sense, report critical safety incidents, and protect specified whistleblowers. It is a transparency and reporting law, not a licensing regime and not a ban on training.',
    where: 'California law. It aims at large developers who meet the statute’s compute and revenue tests. It is not a U.S. federal AI act.',
    effects: 'Intended effects: public safety-framework documents and a channel for incident reports to the state. Too early, as of 2026, for an official evaluation of whether those filings reduced harm.',
    caveats: 'Thresholds leave most developers out. A published framework is not a proven control. Federal pre-emption fights are a live U.S. political risk. Do not confuse this with SB 1047, which never became law.',
    sourcesNote:
      'California Legislature bill status and text; Governor’s 29 September 2025 signing release.',
  },
  'canada-c-36': {
    title: 'Canada Bill C-36 — automated decisions in privacy reform',
    hook: 'A live privacy bill with automated-decision duties. It is not AIDA, and it is not yet law.',
    imageAlt: 'The Centre Block of Parliament Hill in Ottawa',
    jurisdiction: 'Canada (federal)',
    officialName: 'Protecting Privacy and Consumer Data Act (proposed, as Part of Bill C-36)',
    citation:
      'Bill C-36, 45th Parliament, 1st session — An Act to enact the Protecting Privacy and Consumer Data Act, to amend PIPEDA, and to make related amendments',
    yearStatus:
      'Introduced 15 June 2026 (first reading). Not enacted. AIDA, Part 3 of Bill C-27, died when Parliament was prorogued in January 2025 and was not re-tabled.',
    what: 'C-36 is mainly a private-sector privacy rewrite. It defines an “automated decision system” and would require an explanation, on request, when such a system makes a prediction, recommendation, or decision with a legal or similarly significant effect — plus a chance to make written representations to a human who can review it. That is narrower than a horizontal AI Act.',
    where: 'Would apply, if passed, to federal private-sector privacy in Canada. It would not, as tabled, create a standalone high-risk AI licensing scheme.',
    effects: 'Intended effects: transparency and a human-review path for significant automated decisions. There are no enacted C-36 outcomes to measure.',
    caveats: 'First reading is the start of a bill, not a statute. Committee text can change or die. Do not file AIDA as pending — that bill is gone. Do not describe C-36 as “Canada’s AI Act.”',
    sourcesNote: 'LEGISinfo C-36; first-reading text on parl.ca.',
  },
  'ai-civil-liability': {
    title: 'A dedicated AI civil-liability law',
    hook: 'The EU drafted one and withdrew it. The idea — easier proof when an AI system causes harm — is still useful to name as an idea.',
    imageAlt: 'A statue of Justice, the usual emblem for civil claims — not a photograph of a named case',
    jurisdiction: 'Idea (EU proposal withdrawn; the problem remains)',
    officialName: 'Proposed Artificial Intelligence Liability Directive (never adopted)',
    citation: 'COM(2022) 496; procedure 2022/0303(COD); withdrawn by the Commission (2025)',
    yearStatus:
      'Idea. Proposed 28 September 2022. Withdrawn in 2025 (Legislative Observatory: withdrawn 6 October 2025). Not law.',
    what: 'The withdrawn directive would have adapted fault-based national tort rules: disclosure of evidence about high-risk AI and, in some cases, a presumption of causality so injured people would not have to reverse-engineer a model alone. It was meant to sit beside the AI Act, not replace it.',
    where: 'Nowhere. Fault-based AI claims in the EU now go through national tort law. A different instrument — the revised Product Liability Directive (EU) 2024/2853 — treats software, including AI, as a “product” for strict product liability and must be transposed by 9 December 2026. That Directive is enacted. This card is not that Directive.',
    effects: 'Intended effect of the idea: make compensation realistic when a black-box system causes harm. There is no AILD case law, because there is no AILD.',
    caveats: 'Do not list the AI Liability Directive as pending. Do not say the EU has “no AI liability rules” — product liability is being rewritten to include software. This card exists so the withdrawn idea is labeled, not quietly treated as live law.',
    sourcesNote:
      'EP Legislative Observatory fiche 2022/0303(COD); COM(2022) 496; EUR-Lex for Directive 2024/2853 as the enacted neighbour.',
  },
  cites: {
    title: 'CITES',
    hook: 'The global wildlife-trade convention. It regulates listed species in trade. It is not a habitat law.',
    imageAlt: 'African elephants — a taxon long associated with CITES Appendix listings and ivory controls',
    jurisdiction: 'International (173+ Parties; check the current list on cites.org)',
    officialName: 'Convention on International Trade in Endangered Species of Wild Fauna and Flora',
    citation: 'Signed 3 March 1973, Washington, D.C.; entered into force 1 July 1975',
    yearStatus: 'In force since 1 July 1975. Appendices are amended at Conferences of the Parties.',
    what: 'CITES controls international commercial trade in listed animals and plants through permits. Appendix I is the strictest (commercial trade in wild specimens generally prohibited); Appendix II allows regulated trade; Appendix III is a Party’s unilateral listing. Each Party must enact domestic implementing law.',
    where: 'Between Parties, at the border and in the permit system. Domestic poaching without a trade nexus is mostly other law (for example a national wildlife act or the U.S. ESA).',
    effects: 'Intended effect: keep international trade from driving listed species to extinction. Some populations have recovered while listed; others have not. This page does not invent a single global success rate.',
    caveats: 'Listings are political. Illegal trade continues. CITES does not designate national parks and does not, by itself, restore habitat. Implementation quality varies widely.',
    sourcesNote: 'CITES official text and “what is CITES” page; UN Treaty Collection.',
  },
  'endangered-species-act': {
    title: 'U.S. Endangered Species Act',
    hook: 'The core U.S. statute for listed species and their critical habitat — listing, take bans, and federal-agency duties.',
    imageAlt: 'A bald eagle, a species once listed under the ESA and later delisted after a documented recovery',
    jurisdiction: 'United States',
    officialName: 'Endangered Species Act of 1973',
    citation: '16 U.S.C. § 1531 et seq.',
    yearStatus: 'Enacted 28 December 1973. Still in force, with later amendments.',
    what: 'The ESA requires the federal government to list endangered and threatened species on the basis of science, designate critical habitat in many cases, forbid “take” of listed animals (with permits and exceptions), and make federal agencies consult so their actions are not likely to jeopardise listed species. Recovery plans are required but are not self-executing magic.',
    where: 'United States, including the territorial sea as the statute provides. It is domestic law that also implements CITES in part.',
    effects: 'Intended effect: prevent extinction and recover listed species. FWS and NOAA publish status reviews and some delistings (the bald eagle is the usual textbook case). Recovery is uneven; many listed species remain listed. This page does not invent a “90 percent saved” figure.',
    caveats: 'Listing and critical-habitat decisions are litigated. The Act is stronger on animals than on most habitat conversion by private parties without a federal nexus. It is not a corridor-funding bill.',
    sourcesNote: 'FWS ESA law page and programme page; U.S. Code chapter 35.',
  },
  'habitats-directive': {
    title: 'EU Habitats Directive',
    hook: 'The legal spine of Natura 2000 on land and at sea, together with the Birds Directive.',
    imageAlt: 'Białowieża forest on the EU side of the Polish border — a habitat type the Directive is meant to keep',
    jurisdiction: 'European Union',
    officialName: 'Habitats Directive',
    citation: 'Council Directive 92/43/EEC of 21 May 1992 on the conservation of natural habitats and of wild fauna and flora',
    yearStatus: 'Adopted 1992. Still in force. The Birds Directive (now 2009/147/EC) is the companion instrument.',
    what: 'Member States must designate Special Areas of Conservation for listed habitat types and species, keep them in favourable conservation status, and assess plans or projects that could significantly affect a Natura 2000 site. Strict protection also applies to certain species outside those sites.',
    where: 'EU Member States, through national site lists and permitting. Natura 2000 is a network of sites, not a single wilderness fence.',
    effects: 'Intended effect: a coherent ecological network and a legal test before damaging a listed site. The Commission and the EEA publish status reports; many habitat types remain in unfavourable status. The Nature Restoration Law (also in this catalog) exists partly because designation alone did not restore enough.',
    caveats: 'A site on a map is not a funded management plan. Derogations exist. Agriculture, infrastructure, and energy projects still collide with the assessment duty. Pair this card with the Birds Directive if you need bird-specific rules.',
    sourcesNote: 'EUR-Lex 92/43/EEC; Commission Habitats Directive page; EUR-Lex 2009/147/EC.',
  },
  'kenya-wildlife-act': {
    title: 'Kenya Wildlife Conservation and Management Act',
    hook: 'The current Kenyan wildlife statute: public ownership of wildlife, parks and conservancies, and a penalty scheme for killing and trafficking.',
    imageAlt:
      'Savanna elephants in Amboseli National Park, Kenya — wildlife the 2013 Act is written to manage, not a photograph of a named case',
    jurisdiction: 'Kenya',
    officialName: 'Wildlife Conservation and Management Act',
    citation: 'Act No. 47 of 2013, now Cap. 376; assented 24 December 2013, commenced 10 January 2014',
    yearStatus: 'In force since 10 January 2014, with later amendments.',
    what: 'The Act vests wildlife in the people of Kenya, held in trust by the state. It sets out the Kenya Wildlife Service, national parks and reserves, community and private conservancies, species listing, and offences for killing, capturing, or trafficking contrary to the Act. It is a conservation-and-management statute, including sustainable-use language, not an imported farmed-animal campaign law.',
    where: 'Kenya, including protected areas and wildlife on other land as the Act provides.',
    effects: 'Intended effects: a modern legal frame after the older 1976 Act, space for conservancies, and stronger written penalties for poaching and trade. Outcomes on the ground still depend on enforcement, community deals, and the ivory and bushmeat trades. This page does not invent a national elephant-recovery percentage for 2013–2026.',
    caveats: 'Human–wildlife conflict and compensation disputes are built into Kenyan wildlife politics. A statute is not a ranger. International trade rules still run through CITES implementing regulations.',
    sourcesNote: 'Kenya Law official text (Cap. 376); FAOLEX record for Act No. 47 of 2013.',
  },
  'cms-bonn-convention': {
    title: 'CMS — Bonn Convention',
    hook: 'The UN-backed treaty for animals that cross borders on a cycle. Appendix I species get strict protection duties; Appendix II species get range-state Agreements. It is not CITES (trade lists) and not a single-country habitat statute.',
    imageAlt:
      'Wildebeest moving through grass in the Serengeti — a cross-border migration of the kind the Bonn Convention asks range states to coordinate',
    jurisdiction: 'International (Parties; check the current list on cms.int)',
    officialName: 'Convention on the Conservation of Migratory Species of Wild Animals',
    citation:
      'Convention on the Conservation of Migratory Species of Wild Animals; done at Bonn 23 June 1979; entered into force 1 November 1983',
    yearStatus:
      'Done at Bonn, 23 June 1979. Entered into force 1 November 1983. Depositary: Federal Republic of Germany.',
    what: 'A framework convention under UNEP for migratory wild animals. Range States of Appendix I species must work to protect and restore key habitats, reduce migration barriers, and generally prohibit taking (with narrow exceptions). For Appendix II, Parties are to conclude AGREEMENTS or MoUs that cover whole ranges. The Conference of the Parties and a Scientific Council steer listings and guidance.',
    where: 'Applies to Parties that have ratified or acceded. Signed in Bonn (23 June 1979); force from 1 November 1983. Depositary: Federal Republic of Germany. Party and Range-State lists live on cms.int — treat membership as a depositary fact, not a slogan.',
    effects:
      'Intended effects: coordinate conservation along entire flyways and swimways; seed daughter Agreements (e.g. AEWA, EUROBATS and other CMS Family instruments). Outcomes depend on Party measures and Agreement strength — the Convention text alone does not fence a corridor.',
    caveats:
      'Not a wildlife-trade permit system (that is CITES). Not the EU Birds or Habitats Directives. Not the U.S. ESA. Appendix lists change by COP decision; always cite the current Appendices on cms.int.',
    sourcesNote: 'CMS convention text and the CMS home page on cms.int.',
  },
  'birds-directive': {
    title: 'EU Birds Directive',
    hook: 'The first EU nature directive. It protects all naturally occurring wild birds in the Union and drives Special Protection Areas inside Natura 2000 — the bird half of the pair with the Habitats Directive already on this shelf.',
    imageAlt:
      'A white-tailed eagle above the water at Svolvær, Norway — a wild European bird of the kind the Birds Directive requires Member States to protect',
    jurisdiction: 'European Union',
    officialName: 'Directive 2009/147/EC on the conservation of wild birds',
    citation:
      'Directive 2009/147/EC of the European Parliament and of the Council of 30 November 2009 on the conservation of wild birds (codified; originally Directive 79/409/EEC, 1979)',
    yearStatus:
      'Original Birds Directive 79/409/EEC (1979). Current codified text: Directive 2009/147/EC of 30 November 2009. In force across EU Member States. A 2026 Commission consultation on simplification does not repeal it.',
    what: 'Requires Member States to protect wild bird species: bans on deliberate killing/capture, nest and egg destruction, and significant disturbance (with listed hunting and derogation rules). It also requires habitat measures and classification of Special Protection Areas (SPAs) for Annex I species and for other migratory birds, with wetlands of international importance called out. SPAs form part of Natura 2000 together with Habitats SACs.',
    where: 'Applies across EU Member States. Original Birds Directive 79/409/EEC (1979); current codified text Directive 2009/147/EC. Commission pages track SPAs, Article 12 reporting, and Article 9 derogations. A 2026 Commission “stress test” / simplification consultation on Birds and Habitats is process news — it does not repeal the Directive.',
    effects:
      'Intended effects: stop declines of wild birds, restore habitats, and build the SPA network (thousands of sites; Commission cites 5,400+ SPAs covering >832,000 km²). Farmland-bird declines remain a documented pressure; the Directive is the legal frame, not a guarantee of recovering indices.',
    caveats:
      'Not CITES. Not CMS alone (though migratory birds sit in both worlds). Not the Habitats Directive (already a card) — keep Birds and Habitats as a pair, not a merge. Do not treat the 2026 stress-test consultation as “Birds repealed.”',
    sourcesNote: 'European Commission Birds Directive page; EUR-Lex text of Directive 2009/147/EC.',
  },
  'bern-convention': {
    title: 'Bern Convention',
    hook: 'The Council of Europe’s wildlife and habitats treaty. Strictly protected species and habitats lists, plus a Standing Committee — pan-European, not the same instrument as the EU Birds or Habitats Directives (though EU law draws on the same conservation agenda).',
    imageAlt:
      'An Alpine ibex on a high meadow in the Swiss Alps — European wildlife of the kind the Bern Convention lists for protection',
    jurisdiction: 'Council of Europe (Parties; open to non-members under the treaty rules)',
    officialName: 'Convention on the Conservation of European Wildlife and Natural Habitats',
    citation:
      'Convention on the Conservation of European Wildlife and Natural Habitats (ETS No. 104); opened for signature Bern, 19 September 1979; entered into force 1 June 1982',
    yearStatus:
      'Opened for signature in Bern, 19 September 1979. Entered into force 1 June 1982. Council of Europe treaty ETS No. 104.',
    what: 'Requires Parties to conserve wild flora and fauna and their natural habitats, with special attention to endangered and vulnerable species (including migratory ones). Appendices list strictly protected flora/fauna and protected fauna; Parties regulate exploitation of Appendix III species and protect habitats. A Standing Committee oversees implementation and can adopt recommendations and action plans (including Emerald Network work for non-EU Parties).',
    where: 'Council of Europe treaty ETS No. 104. Opened in Bern 19 September 1979; force from 1 June 1982. Party list and treaty text: CoE conventions portal. The EU and many European states are Parties; non-European accession follows treaty rules.',
    effects:
      'Intended effects: common European baseline for species and habitat protection outside (and alongside) EU directives; Emerald Network sites for non-EU Parties. Soft recommendations still need domestic transposition to bite.',
    caveats:
      'Not CITES (trade). Not CMS (though migratory species overlap). Not a substitute card for Birds or Habitats — those bind EU Member States as EU law. Do not invent “Emerald = Natura 2000” as identity; related goals, different legal bases.',
    sourcesNote: 'Council of Europe Bern Convention hub, treaty No. 104, and the convention text PDF.',
  },
  'marine-mammal-protection-act': {
    title: 'U.S. Marine Mammal Protection Act',
    hook: 'The U.S. statute that generally bans the take of marine mammals in U.S. waters and by U.S. persons — whales, dolphins, seals, sea lions under NOAA; manatees, sea otters, walrus, polar bears under FWS. Broader than ESA listing alone.',
    imageAlt: 'A humpback whale and calf underwater — marine mammals covered by the U.S. take moratorium',
    jurisdiction: 'United States',
    officialName: 'Marine Mammal Protection Act of 1972',
    citation: 'Marine Mammal Protection Act of 1972, 16 U.S.C. § 1361 et seq. (as amended)',
    yearStatus:
      'Enacted 1972. Major amendments include 1992 (stranding and health) and 1994 (harassment definitions, fisheries program, stock assessments). Still in force.',
    what: 'Establishes a moratorium on taking and importing marine mammals and products, with defined exceptions (permits, Alaska Native subsistence, certain incidental take authorizations, scientific research, public display under other regimes). Introduces optimum sustainable population and stock-assessment duties. NOAA Fisheries, FWS, and the Marine Mammal Commission share roles.',
    where: 'U.S. federal law enacted 1972; major amendments include 1992 (stranding/health) and 1994 (harassment definitions, fisheries program, stock assessments). Full compiled text available via GovInfo. Shared implementation: NOAA (cetaceans, seals, sea lions), FWS (walrus, manatees, sea otters, polar bears), MMC oversight.',
    effects:
      'Intended effects: stop depletion of marine mammal stocks as ecosystem components; force users to show takes will not harm stocks; support stranding response and take-reduction plans. Stock status still varies by species — the Act is the frame, not a recovery certificate.',
    caveats:
      'Not the ESA (already a card) — a species can be under both. Not CITES permits alone. Not the International Convention for the Regulation of Whaling / Whaling Convention Act (related but separate). Do not claim “all marine mammals recovered.”',
    sourcesNote:
      'NOAA Fisheries, U.S. Fish and Wildlife Service, and Marine Mammal Commission pages on the Act; GovInfo compiled text.',
  },
  'lacey-act': {
    title: 'Lacey Act',
    hook: 'The U.S. enforcement statute that makes it a federal crime to trade wildlife, fish, or plants taken, possessed, transported, or sold in violation of U.S., state, or foreign law — a force-multiplier beside CITES permits, not a second CITES list.',
    imageAlt:
      'Seized elephant ivory stacked in a warehouse for destruction — illegal wildlife product of the kind the Lacey Act is written to keep out of U.S. commerce',
    jurisdiction: 'United States',
    officialName: 'Lacey Act',
    citation: 'Lacey Act, 16 U.S.C. §§ 3371–3378 (origins 1900; major wildlife-trade amendments including 1981)',
    yearStatus:
      'First passed in 1900. Major wildlife amendments in 1969, 1981, and 1988, with later plant-related updates. Still in force. Pair claims about plant and timber scope with the current U.S. Code text.',
    what: 'Prohibits trafficking in wildlife, fish, and plants taken illegally under underlying law, plus false labeling of wildlife shipments and certain marking failures. It lets U.S. enforcers attach federal penalties to violations of foreign or state conservation rules when product crosses into U.S. commerce. Plant and timber provisions were expanded in later amendments (including 2008 farm-bill plant amendments often discussed with Lacey).',
    where: 'U.S. federal law; first passed 1900; major wildlife amendments 1969, 1981, 1988 and later plant-related updates. FWS summarizes the wildlife core; NOAA Fisheries notes fisheries use. Always pair claims about plant/timber scope with the current U.S. code text — do not invent effective dates.',
    effects:
      'Intended effects: close U.S. markets to illegally taken wildlife and support foreign and state conservation laws through federal prosecution. Effectiveness depends on detection and underlying foreign/state law quality.',
    caveats:
      'Not CITES itself (CITES is already a card) — Lacey is the domestic trafficking hammer. Not ESA listing. Not MMPA take rules. Avoid “Lacey bans all wildlife trade” — lawful trade with clean provenance remains possible.',
    sourcesNote: 'U.S. Fish and Wildlife Service Lacey Act page; NOAA Fisheries laws and policies.',
  },
  'wildlife-corridors-act': {
    title: 'U.S. Wildlife Corridors bill (2026)',
    hook: 'A House bill to map and fund habitat connectivity. Introduced. Not enacted.',
    imageAlt: 'A vegetated wildlife overpass — the kind of crossing corridor bills try to legalise and fund',
    jurisdiction: 'United States (proposed federal bill)',
    officialName: 'Wildlife Corridors and Habitat Connectivity Conservation Act of 2026',
    citation: 'H.R. 8438, 119th Congress; introduced 22 April 2026 by Rep. Donald S. Beyer and cosponsors',
    yearStatus:
      'Under consideration. Introduced and referred to House Natural Resources, Agriculture, Transportation and Infrastructure, and Armed Services. Not passed; not signed.',
    what: 'The introduced text would direct federal science and mapping of corridors, improve collaboration on federal land and water, and create a grant programme for corridor work on non-federal land — including a stated reservation of funds for big-game migration routes. Authorizations in the introduced text are proposals, not appropriated dollars.',
    where: 'Would apply, if enacted, as U.S. federal law. Until then it applies nowhere.',
    effects: 'Intended effect: treat connectivity as a conservation object with a map and a budget line. There is no enacted 2026 corridor act to evaluate.',
    caveats: 'Committee referral is not a floor vote. Previous corridor bills in earlier Congresses also failed to become law. Do not describe overpasses already built by states or Parks Canada as if this bill built them.',
    sourcesNote: 'Congress.gov H.R. 8438; GovInfo introduced PDF.',
  },
  'recovering-americas-wildlife': {
    title: 'Recovering America’s Wildlife Act',
    hook: 'A recurring funding proposal for state and Tribal species of greatest conservation need. The House once passed it. It has never become law.',
    imageAlt: 'American bison on open range — a recovered icon, not a claim that RAWA funded this herd',
    jurisdiction: 'United States (recurring proposal)',
    officialName: 'Recovering America’s Wildlife Act (various bill numbers)',
    citation:
      'e.g. H.R. 2773, 117th Congress (passed House 14 June 2022, 231–190; died in the Senate); later reintroductions including S.1149, 118th Congress',
    yearStatus:
      'Idea / recurring unenacted bill. Not in force. As of 2026 it remained a campaign and a drafting exercise, not a signed statute. Confirm any new Congress on congress.gov before treating a fresh number as live.',
    what: 'Versions would send large, dedicated sums — on the order of a billion dollars a year in the House-passed 2022 text — to state fish-and-wildlife agencies and Tribes to implement State Wildlife Action Plans and recover species before they need ESA emergency listing. It is a funding design, not a new listing statute.',
    where: 'Nowhere as law. If enacted it would be U.S. federal appropriations architecture tied to Pittman–Robertson-style accounts.',
    effects: 'Intended effect: fund proactive conservation so fewer species hit the ESA. Advocates still publish that case. There is no RAWA expenditure record because there is no RAWA.',
    caveats: 'This card is an idea, even though a text once passed one chamber. A House vote is not a law. Do not put RAWA on the Existing shelf. Do not invent a 2026 public-law number.',
    sourcesNote:
      'Congress.gov H.R. 2773 (117th) and S.1149 (118th); NWF 2026 briefing that still treats passage as future tense.',
  },
  'companion-animal-homicide-parity': {
    title: 'Intentional companion-animal cruelty parity',
    hook: 'A proposed rule: deliberate beating, torture, or sadistic harm to a companion dog or cat would be judged on the same criminal scale as the matching human crime. Accidents and roadkill are out of scope. No country has enacted that. This card is an idea.',
    imageAlt:
      'A tabby cat on a stone wall and a golden dog behind it in Mosteiros, Azores — companion animals, not a photograph of a named case',
    jurisdiction: 'Idea (no enacting jurisdiction)',
    officialName: 'Proposed intentional companion-animal cruelty-parity rule (not a filed statute)',
    citation:
      'Catalog idea. Nearest real instruments: 18 U.S.C. § 48 (PACT Act); Portugal Lei n.º 8/2017; German BGB § 90a; Ecuador Constitutional Court Sentencia 253-20-JH/22',
    yearStatus:
      'Idea / proposal. Not enacted. Not pending in a named legislature. No jurisdiction has written full assault- or homicide-equivalence for intentional cruelty to a companion animal.',
    what: 'The idea is a penal-scale rule for intentional violence only. Deliberate beating, torture, or other sadistic harm to a companion dog or cat would sit on the same criminal ladder as the matching crime against a human — assault, torture, or serious bodily harm; and, if the intentional act kills, a homicide analogue. It is not a standalone low-tariff animal-cruelty count. It is a moral and drafting proposal, not a text any parliament has adopted. Accidental harm is outside the idea: hitting a cat, dog, or raccoon on the road is not to be treated as vehicular homicide of a human. Ordinary justifications that already exist in criminal law — necessity, lawful veterinary euthanasia, self-defence — would still have to be written. This card does not draft those exceptions.',
    where:
      'Nowhere as law. In many countries, intentional abuse of a companion animal can already be a felony or other serious crime under animal-cruelty statutes. Those offences live in animal-protection or special-crime chapters. They are not the assault or homicide title, and their maximum sentences are typically far below the human-violence scale. Civil codes that call animals sentient or “not things” change property language. They do not rewrite the assault or murder statute.',
    effects:
      'Intended effects only: a stronger deterrent against deliberate cruelty to companion animals, and a public signal that those animals are not disposable property. There are no outcome statistics, because there is no statute.',
    caveats:
      'Do not claim any country has ratified or enacted full assault- or homicide-equivalence for cruelty to pets. This catalog found none. Do not read this card as covering accidents: roadkill is not in scope and is not equated with killing a human in traffic. Three real neighbours are easy to confuse with this idea and are not it. First, felony and other criminal animal-cruelty statutes already punish some intentional abuse — for example the U.S. Preventing Animal Cruelty and Torture Act, 18 U.S.C. § 48, which can mean up to seven years for specified “animal crushing.” That is a cruelty felony, not human assault or murder. Second, civil-status reforms recognise animals as sentient or as “not things”: Portugal Lei n.º 8/2017 inserted Civil Code art. 201.º-B (“os animais são seres vivos dotados de sensibilidade”); German BGB § 90a (“Tiere sind keine Sachen”) still applies the rules for things unless a special law says otherwise. A status change is not violence-scale parity. Third, limited “subjects of rights” jurisprudence — Ecuador Constitutional Court Sentencia 253-20-JH/22 (Estrellita, 27 January 2022) — recognised a wild woolly monkey as a subject of rights under the rights of Nature and said those rights are not equivalent to human rights. It does not make beating or killing a dog legally identical to assaulting or murdering a human.',
    sourcesNote:
      '18 U.S.C. § 48 on Cornell LII / U.S. Code; Diário da República PDF of Lei n.º 8/2017; gesetze-im-internet BGB § 90a; Corte Constitucional del Ecuador page for Sentencia 253-20-JH/22.',
  },
};
