import type { LawCopy, LawSource } from '../data/law';

const ccBy30 = 'https://creativecommons.org/licenses/by/3.0/';
const ccBy20 = 'https://creativecommons.org/licenses/by/2.0/';
const ccBySaIgo = 'https://creativecommons.org/licenses/by-sa/3.0/igo/';
const nistCopyright = 'https://www.nist.gov/oism/copyrights';

const coeUrl =
  'https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence';
const coeText = 'https://rm.coe.int/1680afae3c';
const coeChart =
  'https://www.coe.int/en/web/conventions/full-list?module=signatures-by-treaty&treatynum=225';
const coeNews =
  'https://www.coe.int/en/web/artificial-intelligence/-/european-union-ratifies-the-council-of-europe-framework-convention-on-artificial-intelligence';
const coePhoto =
  'https://commons.wikimedia.org/wiki/File:Council_of_Europe_Palais_de_l%27Europe_aerial_view.JPG';

const unescoUrl = 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics';
const unescoText = 'https://unesdoc.unesco.org/ark:/48223/pf0000381137';
const unescoPhoto =
  'https://commons.wikimedia.org/wiki/File:Architecture,_Paris_-_UNESCO_-_PHOTO0000002781_0001.tiff';

const oecdLegal = 'https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449';
const oecdOverview = 'https://oecd.ai/en/ai-principles';
const oecdPhoto =
  'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_la_Muette,_Paris_19_March_2019_002.jpg';

const nistHub = 'https://www.nist.gov/itl/ai-risk-management-framework';
const nistPdf = 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf';
const nistGen = 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf';
const nistPhoto =
  'https://commons.wikimedia.org/wiki/File:NIST_Gaithersburg_Newton_Apple_Tree_Dsc_9822-hdr-edit_processed_16x9_web.jpg';

const ukPaper = 'https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach';
const ukPdf =
  'https://assets.publishing.service.gov.uk/media/64cb71a547915a00142a91c4/a-pro-innovation-approach-to-ai-regulation-amended-web-ready.pdf';
const ukResponse =
  'https://www.gov.uk/government/consultations/ai-regulation-a-pro-innovation-approach-policy-proposals/outcome/a-pro-innovation-approach-to-ai-regulation-government-response';
const ukPhoto = 'https://commons.wikimedia.org/wiki/File:Whitehall_from_London_Eye_2014.jpg';

function sources(rows: Array<[string, string]>): LawSource[] {
  return rows.map(([label, url]) => ({ label, url }));
}

export const lawAiPackEn: Record<string, LawCopy> = {
  'coe-ai-framework-convention': {
    title: 'Council of Europe Framework Convention on AI',
    hook: 'The first international treaty on artificial intelligence that becomes binding on the countries that ratify it. On 29 September 2026 it had 21 signatories and one ratification, by the European Union.',
    imageAlt: 'The Palais de l’Europe in Strasbourg, seat of the Council of Europe, seen from the air.',
    caption: 'The Palais de l’Europe in Strasbourg, seat of the Council of Europe, seen from the air.',
    figureCredit: 'Photo: Council of Europe, via Wikimedia Commons,',
    figureLicense: 'Creative Commons Attribution 3.0 Unported licence.',
    figureLicenseUrl: ccBy30,
    jurisdiction: 'International (Council of Europe member states, partner countries and the European Union)',
    officialName:
      'Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law',
    citation: 'Council of Europe Treaty Series No. 225, opened for signature on 5 September 2024',
    yearStatus: 'Open for signature; yet to enter into force',
    what: 'The Council of Europe, the Strasbourg-based human rights organisation of 46 European states, negotiated this framework convention with its members, with observer and other countries, with the European Union, and with representatives of civil society, academia and industry. It was opened for signature in Vilnius on 5 September 2024. The Council of Europe calls it the first legally binding international treaty on artificial intelligence. It requires that activities across the whole lifecycle of an AI system respect human rights, democracy and the rule of law.',
    effects:
      'Countries that ratify the convention take on legal duties in their own law. The treaty sets shared principles: human dignity and individual autonomy, equality and non-discrimination, privacy and personal data protection, transparency and oversight, accountability and responsibility, reliability, and safe innovation. It also calls for accessible and effective remedies when an AI system violates human rights, for procedural safeguards, for telling people when they are interacting with an AI system, and for measures to identify, assess and reduce risks. The wording is technology-neutral, so it can also cover systems built in the future.',
    where: 'The convention applies in full to public authorities and to private companies acting on their behalf. For other private actors, each country must address the risks in line with the treaty’s aims and declare how it will do so: by applying the treaty’s duties directly or by other suitable measures. Countries may leave out activities that protect national security, provided they respect international law, and national defence falls outside the treaty altogether. Research and development on systems before they are made available for use is also left out, unless testing could interfere with human rights, democracy or the rule of law. The treaty enters into force on the first day of the month after three months have passed from the date when five signatories, at least three of them Council of Europe member states, have ratified it.',
    caveats:
      'On 29 September 2026 the Council of Europe Treaty Office listed 21 signatories: 15 Council of Europe member states, among them the United Kingdom, Norway, Switzerland and Ukraine; five other countries, namely Canada, Israel, Japan, the United States and Uruguay; and the European Union. Only the European Union had ratified, on 15 May 2026, so the treaty had yet to enter into force. A signature signals intent; legal duties start with ratification and entry into force. Each country decides how the rules reach private companies, so protection can differ from one country to the next. The Treaty Office chart gives the current list of signatures and ratifications.',
    sourcesNote:
      'Council of Europe treaty page, treaty text, chart of signatures and ratifications, and the news of ratification by the European Union.',
  },
  'unesco-ai-ethics': {
    title: 'UNESCO Recommendation on the Ethics of AI',
    hook: 'The first global standard on the ethics of artificial intelligence, adopted by all 193 Member States of UNESCO. Human rights and human dignity sit at its centre.',
    imageAlt: 'UNESCO headquarters in Paris in February 1962, with the Eiffel Tower in the distance.',
    caption: 'UNESCO headquarters in Paris in February 1962, with the Eiffel Tower in the distance.',
    figureCredit: 'Photo: Dominique Roger, UNESCO, via Wikimedia Commons,',
    figureLicense: 'Creative Commons Attribution-ShareAlike 3.0 licence for intergovernmental organisations.',
    figureLicenseUrl: ccBySaIgo,
    jurisdiction: 'Worldwide (UNESCO Member States)',
    officialName: 'Recommendation on the Ethics of Artificial Intelligence',
    citation: 'Adopted by the General Conference of UNESCO in November 2021',
    yearStatus: 'Adopted in November 2021; voluntary',
    what: 'The United Nations Educational, Scientific and Cultural Organization (UNESCO) adopted this recommendation in November 2021, when all 193 of its Member States agreed to it. UNESCO calls it the first global standard on the ethics of artificial intelligence (AI). It rests on four core values: respecting and promoting human dignity and human rights; fostering just, peaceful and interconnected societies; ensuring diversity and inclusiveness; and supporting a flourishing environment and ecosystems.',
    effects:
      'Ten principles turn those values into practice: proportionality and do no harm; safety and security; the right to privacy and data protection; multi-stakeholder and adaptive governance; responsibility and accountability; transparency and explainability; human oversight and determination; sustainability; awareness and literacy; and fairness and non-discrimination. The recommendation goes beyond principles and gives governments concrete policy recommendations in areas from gender to data to international cooperation, so countries can build ethics into their national AI strategies and laws.',
    where: 'A recommendation of this kind is a political and moral commitment by governments; each country chooses how to put it into law and practice. UNESCO follows up through tools such as the Global AI Ethics and Governance Observatory, which shows how ready countries are to adopt AI ethically and responsibly. The full text, with its definitions and policy chapters, is in the UNESCO Digital Library.',
    caveats:
      'The recommendation creates no treaty obligations, and no court or sanction enforces it. Its broad wording leaves room for very different national choices, so its effect depends on what each government does with it. Web pages about it summarise the text; the adopted recommendation itself is the reference.',
    sourcesNote: 'The recommendation page and the adopted text in the UNESCO Digital Library.',
  },
  'oecd-ai-principles': {
    title: 'OECD AI Principles',
    hook: 'The first intergovernmental standard on artificial intelligence, adopted in May 2019 and updated in May 2024. On 29 September 2026, 50 countries and the European Union had committed to it.',
    imageAlt: 'The Château de la Muette in Paris, part of the OECD headquarters, in March 2019.',
    caption: 'The Château de la Muette in Paris, part of the OECD headquarters, in March 2019.',
    figureCredit: 'Photo: mySociety, via Wikimedia Commons,',
    figureLicense: 'Creative Commons Attribution 2.0 Generic licence.',
    figureLicenseUrl: ccBy20,
    jurisdiction: 'International (OECD member countries and other countries that have signed up)',
    officialName: 'Recommendation of the Council on Artificial Intelligence',
    citation: 'Adopted 22 May 2019; revised 8 November 2023 and 3 May 2024',
    yearStatus: 'In force as an OECD recommendation; voluntary',
    what: 'The Organisation for Economic Co-operation and Development (OECD), an intergovernmental forum of 38 member countries, adopted this recommendation on 22 May 2019. Its Council revised it on 8 November 2023 to update the definition of an AI system, and again on 3 May 2024 to reflect new technology and policy, including generative AI. It sets five values-based principles for trustworthy artificial intelligence (AI): inclusive growth, sustainable development and well-being; human rights and democratic values, including fairness and privacy; transparency and explainability; robustness, security and safety; and accountability.',
    effects:
      'The text also gives governments five recommendations: invest in AI research and development; foster an inclusive ecosystem for AI; shape an interoperable governance and policy environment; build human capacity and prepare for changes in the labour market; and cooperate internationally on trustworthy AI. According to the OECD, the European Union, the Council of Europe, the United States and the United Nations use its definition of an AI system in their own laws, rules and guidance. In June 2019, at the Osaka summit, leaders of the Group of Twenty (G20) welcomed AI principles drawn from this text.',
    where: 'The OECD register of legal instruments lists who has committed to the recommendation: all 38 OECD members, 12 other countries (Argentina, Brazil, Cambodia, Croatia, Egypt, Malta, Peru, Romania, Saudi Arabia, Singapore, Ukraine and Uruguay) and the European Union. Cambodia and Croatia were the most recent to join, on 15 May 2026. By committing, a government accepts the principles; each one decides how to apply them in its own policy and law.',
    caveats:
      'An OECD recommendation is a political commitment with no penalties, so results depend on national follow-up. The principles are high level and leave the detailed rules to each government. The OECD’s AI policy website shows an older, lower count of countries; the register of legal instruments is the official list.',
    sourcesNote: 'The OECD register of legal instruments and the principles overview.',
  },
  'nist-ai-rmf': {
    title: 'NIST AI Risk Management Framework',
    hook: 'A voluntary guide from the U.S. National Institute of Standards and Technology that helps organisations identify, measure and manage the risks of AI systems. Released in January 2023 and now being revised.',
    imageAlt: 'The Newton apple tree on the NIST campus in Gaithersburg, Maryland, on a spring morning.',
    caption: 'The Newton apple tree on the NIST campus in Gaithersburg, Maryland, on a spring morning.',
    figureCredit: 'Photo: Stoughton, U.S. National Institute of Standards and Technology,',
    figureLicense: 'public domain (work of the U.S. federal government), via Wikimedia Commons.',
    figureLicenseUrl: nistCopyright,
    jurisdiction: 'United States',
    officialName: 'Artificial Intelligence Risk Management Framework, version 1.0',
    citation: 'Version 1.0, released 26 January 2023',
    yearStatus: 'Voluntary framework; under revision',
    what: 'The U.S. National Institute of Standards and Technology (NIST), a federal agency within the Department of Commerce, released version 1.0 of this framework on 26 January 2023, after a public request for information, several drafts and public workshops. Congress directed the work in the National Artificial Intelligence Initiative Act of 2020. The institute describes the framework as voluntary, rights-preserving, open to every sector and suited to any use of artificial intelligence (AI), for organisations of all sizes.',
    effects:
      'The framework gives organisations that design, develop, deploy or use AI systems a shared vocabulary for AI risk. Seven characteristics describe trustworthy AI: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair, with harmful bias managed. The institute supports it with companion material, including a practical guide, a roadmap and comparisons with other standards, and on 30 March 2023 it launched the Trustworthy and Responsible AI Resource Center to help organisations put the framework into practice.',
    where: 'The framework is built around four functions. Govern creates a culture of risk management and runs through the other three. Map sets out the context and identifies the risks of a system. Measure uses quantitative and qualitative methods to analyse, assess and monitor those risks. Manage directs resources to the risks that have been mapped and measured, and plans how to respond to incidents. On 26 July 2024 the institute added a profile for generative AI, and on 7 April 2026 it released a concept note for a profile on trustworthy AI in critical infrastructure.',
    caveats:
      'Using the framework is voluntary, and it creates no legal duties on its own. The institute states that version 1.0 is being revised as part of the White House AI Action Plan, so parts of it may change. The framework describes outcomes to aim for and leaves each organisation to choose its own methods, so two organisations can apply it very differently.',
    sourcesNote: 'The framework page, version 1.0, and the generative profile.',
  },
  'uk-ai-regulation': {
    title: 'UK approach to AI regulation',
    hook: 'The UK government set five principles for existing regulators to apply in their own sectors, instead of passing a single new AI law. Its February 2024 response kept that approach and added funding and deadlines for regulators.',
    imageAlt: 'Government offices around Whitehall, London, seen from the London Eye in August 2014.',
    caption: 'Government offices around Whitehall, London, seen from the London Eye in August 2014.',
    figureCredit: 'Photo: Janine and Jim Eden, via Wikimedia Commons,',
    figureLicense: 'Creative Commons Attribution 2.0 Generic licence.',
    figureLicenseUrl: ccBy20,
    jurisdiction: 'United Kingdom',
    officialName:
      'A pro-innovation approach to AI regulation (white paper, March 2023) and its government response (February 2024)',
    citation: 'White paper, 29 March 2023; government response, 6 February 2024',
    yearStatus: 'Government policy, applied through existing regulators',
    what: 'In a white paper published on 29 March 2023, the Department for Science, Innovation and Technology and the Office for Artificial Intelligence set out how the UK government proposed to regulate artificial intelligence (AI). The framework rests on five cross-sector principles: safety, security and robustness; appropriate transparency and explainability; fairness; accountability and governance; and contestability and redress. Existing regulators, such as the Information Commissioner’s Office and the Competition and Markets Authority, interpret and apply the principles within their own remits. A public consultation on the proposals closed on 21 June 2023.',
    effects:
      'The white paper issued the principles without legislation, arguing that new rigid and onerous rules could hold back innovation, and said the government expected to introduce a legal duty on regulators to have due regard to the principles once parliamentary time allowed. The government response of 6 February 2024 kept the approach without legislation for the time being, under review. It announced £10 million to build regulators’ AI capabilities, asked a number of regulators to publish their strategic approach to AI by 30 April 2024, and set up a central function in government to monitor risks and coordinate regulators.',
    where: 'Rules for AI arrive through the guidance and enforcement of each sector’s regulator, using the powers each already has. For the small number of developers of highly capable general-purpose AI models, the response set out the case for targeted binding requirements in the future and said the government would legislate when it was confident that was the right thing to do. The principles build on the AI principles of the Organisation for Economic Co-operation and Development, which the white paper cites.',
    caveats:
      'Both documents are government policy papers, and the principles have no legal force of their own and depend on each regulator’s powers, so gaps can remain where no regulator has a clear remit. GOV.UK marks both documents as published under the 2022 to 2024 Conservative government led by Rishi Sunak; later governments may have changed course, so the current GOV.UK pages are the place to check.',
    sourcesNote: 'The white paper, its web-ready text, and the February 2024 government response.',
  },
};

export const lawAiPackRu: Record<string, LawCopy> = {
  'coe-ai-framework-convention': {
    title: 'Рамочная конвенция Совета Европы об искусственном интеллекте',
    hook: 'Первый международный договор об искусственном интеллекте, который становится обязательным для ратифицировавших его стран. На 29 сентября 2026 года у него был 21 подписант и одна ратификация, Европейского союза.',
    imageAlt: 'Дворец Европы в Страсбурге, резиденция Совета Европы, вид с воздуха.',
    caption: 'Дворец Европы в Страсбурге, резиденция Совета Европы, вид с воздуха.',
    figureCredit: 'Фото: Совет Европы, через Викисклад, лицензия',
    figureLicense: 'Creative Commons «Атрибуция 3.0 Непортированная».',
    figureLicenseUrl: ccBy30,
    jurisdiction: 'Международный (государства-члены Совета Европы, страны-партнёры и Европейский союз)',
    officialName:
      'Рамочная конвенция Совета Европы об искусственном интеллекте и правах человека, демократии и верховенстве права',
    citation: 'Серия договоров Совета Европы № 225, открыта для подписания 5 сентября 2024 года',
    yearStatus: 'Открыта для подписания; ещё не вступила в силу',
    what: 'Совет Европы, правозащитная организация 46 европейских государств со штаб-квартирой в Страсбурге, подготовил эту рамочную конвенцию вместе со своими членами, странами-наблюдателями и другими государствами, Европейским союзом, а также представителями гражданского общества, науки и бизнеса. Конвенция открыта для подписания в Вильнюсе 5 сентября 2024 года. Совет Европы называет её первым юридически обязательным международным договором об искусственном интеллекте. Она требует, чтобы вся деятельность на протяжении жизненного цикла системы искусственного интеллекта уважала права человека, демократию и верховенство права.',
    effects:
      'Страны, ратифицировавшие конвенцию, принимают на себя юридические обязательства в собственном праве. Договор закрепляет общие принципы: человеческое достоинство и личная автономия, равенство и недискриминация, неприкосновенность частной жизни и защита персональных данных, прозрачность и надзор, подотчётность и ответственность, надёжность, безопасные инновации. Он также требует доступных и эффективных средств правовой защиты, когда система искусственного интеллекта нарушает права человека, процессуальных гарантий, уведомления людей о том, что они взаимодействуют с такой системой, и мер по выявлению, оценке и снижению рисков. Формулировки технологически нейтральны, поэтому договор может охватить и системы будущего.',
    where: 'Конвенция в полной мере применяется к органам государственной власти и к частным компаниям, действующим от их имени. В отношении остальных частных участников каждая страна обязана устранять риски в соответствии с целями договора и заявить, как она это сделает: прямо применяя обязательства договора или иными подходящими мерами. Страны могут не применять конвенцию к деятельности по защите национальной безопасности при условии соблюдения международного права, а национальная оборона полностью выведена из сферы договора. Исследования и разработки систем до того, как их делают доступными для использования, также исключены, если только испытания не могут затронуть права человека, демократию или верховенство права. Договор вступает в силу в первый день месяца, следующего за истечением трёх месяцев с даты, когда пять подписантов, из них не менее трёх государств-членов Совета Европы, ратифицируют его.',
    caveats:
      'На 29 сентября 2026 года Бюро договоров Совета Европы указывало 21 подписанта: 15 государств-членов Совета Европы, среди них Великобритания, Норвегия, Швейцария и Украина; пять других стран, а именно Канада, Израиль, Япония, Соединённые Штаты и Уругвай; и Европейский союз. Ратифицировал договор только Европейский союз, 15 мая 2026 года, поэтому в силу он ещё не вступил. Подпись выражает намерение; юридические обязательства возникают с ратификацией и вступлением в силу. Каждая страна сама решает, как правила распространяются на частные компании, поэтому уровень защиты в разных странах может различаться. Актуальный список подписей и ратификаций приводится в таблице Бюро договоров.',
    sourcesNote:
      'Страница договора, текст договора, таблица подписей и ратификаций и сообщение о ратификации Европейским союзом.',
    sources: sources([
      [
        'Совет Европы: Рамочная конвенция об искусственном интеллекте (The Framework Convention on Artificial Intelligence)',
        coeUrl,
      ],
      [
        'Совет Европы: текст Рамочной конвенции Совета Европы об искусственном интеллекте и правах человека, демократии и верховенстве права, Серия договоров Совета Европы № 225 (Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law)',
        coeText,
      ],
      [
        'Бюро договоров Совета Европы: таблица подписей и ратификаций договора № 225 (Chart of signatures and ratifications of Treaty 225)',
        coeChart,
      ],
      [
        'Совет Европы: Европейский союз ратифицировал Рамочную конвенцию Совета Европы об искусственном интеллекте (European Union ratifies the Council of Europe Framework Convention on Artificial Intelligence)',
        coeNews,
      ],
      [
        'Викисклад: Дворец Европы, вид с воздуха, фото (Council of Europe Palais de l’Europe aerial view)',
        coePhoto,
      ],
    ]),
  },
  'unesco-ai-ethics': {
    title: 'Рекомендация ЮНЕСКО об этике искусственного интеллекта',
    hook: 'Первый глобальный стандарт этики искусственного интеллекта, принятый всеми 193 государствами-членами ЮНЕСКО. В его центре права человека и человеческое достоинство.',
    imageAlt: 'Штаб-квартира ЮНЕСКО в Париже в феврале 1962 года, вдали Эйфелева башня.',
    caption: 'Штаб-квартира ЮНЕСКО в Париже в феврале 1962 года, вдали Эйфелева башня.',
    figureCredit: 'Фото: Доминик Роже, ЮНЕСКО, через Викисклад, лицензия',
    figureLicense: 'Creative Commons «Атрибуция, с сохранением условий 3.0 для межправительственных организаций».',
    figureLicenseUrl: ccBySaIgo,
    jurisdiction: 'Весь мир (государства-члены ЮНЕСКО)',
    officialName: 'Рекомендация об этике искусственного интеллекта',
    citation: 'Принята Генеральной конференцией в ноябре 2021 года',
    yearStatus: 'Принята в ноябре 2021 года; добровольная',
    what: 'Организация Объединённых Наций по вопросам образования, науки и культуры (ЮНЕСКО) приняла эту рекомендацию в ноябре 2021 года с согласия всех 193 государств-членов. ЮНЕСКО называет её первым глобальным стандартом этики искусственного интеллекта. Рекомендация опирается на четыре основные ценности: уважение и защита человеческого достоинства и прав человека; содействие справедливым, мирным и взаимосвязанным обществам; обеспечение разнообразия и инклюзивности; поддержка процветания окружающей среды и экосистем.',
    effects:
      'Десять принципов переводят эти ценности в практику: соразмерность и непричинение вреда; безопасность и защищённость; право на неприкосновенность частной жизни и защиту данных; многостороннее и адаптивное управление; ответственность и подотчётность; прозрачность и объяснимость; надзор и решающая роль человека; устойчивость; осведомлённость и грамотность; справедливость и недискриминация. Рекомендация идёт дальше принципов и предлагает правительствам конкретные меры политики в областях от гендерного равенства и данных до международного сотрудничества, чтобы страны могли встроить этику в свои национальные стратегии и законы об искусственном интеллекте.',
    where: 'Такая рекомендация представляет собой политическое и моральное обязательство правительств; каждая страна сама выбирает, как воплотить её в законах и на практике. ЮНЕСКО следит за выполнением с помощью таких инструментов, как Глобальная обсерватория по этике и управлению искусственным интеллектом, которая показывает, насколько страны готовы внедрять его этично и ответственно. Полный текст с определениями и главами о политике опубликован в Цифровой библиотеке ЮНЕСКО.',
    caveats:
      'Рекомендация не создаёт договорных обязательств, и никакой суд или санкция не обеспечивает её исполнение. Широкие формулировки оставляют место для очень разных национальных решений, поэтому её действие зависит от того, что с ней сделает каждое правительство. Веб-страницы о рекомендации пересказывают текст; опорой служит сама принятая рекомендация.',
    sourcesNote: 'Страница рекомендации и принятый текст в Цифровой библиотеке ЮНЕСКО.',
    sources: sources([
      [
        'ЮНЕСКО: Этика искусственного интеллекта, Рекомендация об этике искусственного интеллекта (Ethics of Artificial Intelligence, Recommendation on the Ethics of Artificial Intelligence)',
        unescoUrl,
      ],
      [
        'Цифровая библиотека ЮНЕСКО: Рекомендация об этике искусственного интеллекта (Recommendation on the Ethics of Artificial Intelligence)',
        unescoText,
      ],
      [
        'Викисклад: архитектура, Париж, ЮНЕСКО, фото (Architecture, Paris - UNESCO - PHOTO0000002781 0001)',
        unescoPhoto,
      ],
    ]),
  },
  'oecd-ai-principles': {
    title: 'Принципы ОЭСР по искусственному интеллекту',
    hook: 'Первый межправительственный стандарт в области искусственного интеллекта, принятый в мае 2019 года и обновлённый в мае 2024 года. На 29 сентября 2026 года к нему присоединились 50 стран и Европейский союз.',
    imageAlt: 'Замок Ла-Мюэтт в Париже, часть штаб-квартиры ОЭСР, в марте 2019 года.',
    caption: 'Замок Ла-Мюэтт в Париже, часть штаб-квартиры ОЭСР, в марте 2019 года.',
    figureCredit: 'Фото: mySociety, через Викисклад, лицензия',
    figureLicense: 'Creative Commons «Атрибуция 2.0 Общая».',
    figureLicenseUrl: ccBy20,
    jurisdiction: 'Международный (страны-члены ОЭСР и другие присоединившиеся страны)',
    officialName: 'Рекомендация Совета по искусственному интеллекту',
    citation: 'Принята 22 мая 2019 года; пересмотрена 8 ноября 2023 года и 3 мая 2024 года',
    yearStatus: 'Действующая рекомендация ОЭСР; добровольная',
    what: 'Организация экономического сотрудничества и развития (ОЭСР), межправительственный форум 38 стран-членов, приняла эту рекомендацию 22 мая 2019 года. Её Совет пересмотрел текст 8 ноября 2023 года, обновив определение системы искусственного интеллекта, и ещё раз 3 мая 2024 года, чтобы учесть новые технологии и политику, включая генеративный искусственный интеллект. Рекомендация устанавливает пять основанных на ценностях принципов надёжного искусственного интеллекта: инклюзивный рост, устойчивое развитие и благополучие; права человека и демократические ценности, включая справедливость и неприкосновенность частной жизни; прозрачность и объяснимость; устойчивость к сбоям, защищённость и безопасность; подотчётность.',
    effects:
      'Текст также даёт правительствам пять рекомендаций: вкладывать средства в исследования и разработки в области искусственного интеллекта; развивать инклюзивную среду для него; формировать совместимую систему управления и политики; наращивать человеческий потенциал и готовиться к переменам на рынке труда; сотрудничать на международном уровне ради надёжного искусственного интеллекта. По данным ОЭСР, Европейский союз, Совет Европы, Соединённые Штаты и Организация Объединённых Наций используют её определение системы искусственного интеллекта в своих законах, правилах и руководствах. В июне 2019 года на саммите в Осаке лидеры «Группы двадцати» одобрили принципы искусственного интеллекта, основанные на этом тексте.',
    where: 'Реестр правовых документов ОЭСР указывает, кто присоединился к рекомендации: все 38 членов ОЭСР, 12 других стран (Аргентина, Бразилия, Камбоджа, Хорватия, Египет, Мальта, Перу, Румыния, Саудовская Аравия, Сингапур, Украина и Уругвай) и Европейский союз. Последними присоединились Камбоджа и Хорватия, 15 мая 2026 года. Присоединяясь, правительство принимает принципы; каждое само решает, как применять их в своей политике и законах.',
    caveats:
      'Рекомендация ОЭСР представляет собой политическое обязательство без санкций, поэтому результат зависит от действий самих стран. Принципы сформулированы в общем виде и оставляют подробные правила каждому правительству. На сайте ОЭСР по политике в области искусственного интеллекта приведено более старое и меньшее число стран; официальным списком служит реестр правовых документов.',
    sourcesNote: 'Реестр правовых документов ОЭСР и обзор принципов.',
    sources: sources([
      [
        'Правовые документы ОЭСР: Рекомендация Совета по искусственному интеллекту (Recommendation of the Council on Artificial Intelligence, OECD/LEGAL/0449)',
        oecdLegal,
      ],
      [
        'Обсерватория политики ОЭСР в области искусственного интеллекта: обзор принципов (OECD.AI Policy Observatory, AI Principles Overview)',
        oecdOverview,
      ],
      [
        'Викисклад: замок Ла-Мюэтт, Париж, фото (Château de la Muette, Paris 19 March 2019 002)',
        oecdPhoto,
      ],
    ]),
  },
  'nist-ai-rmf': {
    title: 'Рамочная программа США по управлению рисками искусственного интеллекта',
    hook: 'Добровольное руководство Национального института стандартов и технологий США, которое помогает организациям выявлять, измерять и контролировать риски систем искусственного интеллекта. Выпущено в январе 2023 года, сейчас пересматривается.',
    imageAlt: 'Ньютонова яблоня в кампусе института в Гейтерсберге, штат Мэриленд, весенним утром.',
    caption: 'Ньютонова яблоня в кампусе института в Гейтерсберге, штат Мэриленд, весенним утром.',
    figureCredit: 'Фото: Стоутон, Национальный институт стандартов и технологий США,',
    figureLicense: 'общественное достояние (работа федерального правительства США), через Викисклад.',
    figureLicenseUrl: nistCopyright,
    jurisdiction: 'Соединённые Штаты',
    officialName: 'Рамочная программа управления рисками искусственного интеллекта, версия 1.0',
    citation: 'Версия 1.0, выпущена 26 января 2023 года',
    yearStatus: 'Добровольная рамочная программа; пересматривается',
    what: 'Национальный институт стандартов и технологий США, федеральное ведомство в составе Министерства торговли, выпустил версию 1.0 этой рамочной программы 26 января 2023 года после открытого запроса информации, нескольких проектов и публичных семинаров. Работу поручил Конгресс в Законе о национальной инициативе в области искусственного интеллекта 2020 года. Институт описывает программу как добровольную, уважающую права, открытую для любой отрасли и пригодную для любого применения искусственного интеллекта в организациях любого размера.',
    effects:
      'Программа даёт организациям, которые проектируют, разрабатывают, внедряют или используют системы искусственного интеллекта, общий язык для разговора о рисках. Надёжный искусственный интеллект описывают семь характеристик: достоверность и надёжность; безопасность; защищённость и устойчивость; подотчётность и прозрачность; объяснимость и интерпретируемость; защита частной жизни; справедливость при контроле над вредной предвзятостью. Институт дополняет программу сопутствующими материалами, включая практическое руководство, дорожную карту и сопоставления с другими стандартами, а 30 марта 2023 года открыл Центр ресурсов по надёжному и ответственному искусственному интеллекту, чтобы помочь организациям применять программу на практике.',
    where: 'Программа построена вокруг четырёх функций. «Управлять» создаёт культуру управления рисками и проходит через три остальные. «Картировать» описывает контекст и выявляет риски системы. «Измерять» с помощью количественных и качественных методов анализирует, оценивает и отслеживает эти риски. «Реагировать» направляет ресурсы на выявленные и измеренные риски и планирует ответ на инциденты. 26 июля 2024 года институт добавил профиль для генеративного искусственного интеллекта, а 7 апреля 2026 года выпустил концептуальную записку о профиле надёжного искусственного интеллекта для критической инфраструктуры.',
    caveats:
      'Применение программы добровольно, и сама по себе она не создаёт юридических обязанностей. Институт сообщает, что версия 1.0 пересматривается в рамках Плана действий Белого дома в области искусственного интеллекта, поэтому отдельные части могут измениться. Программа описывает желаемые результаты и оставляет выбор методов каждой организации, поэтому две организации могут применять её очень по-разному.',
    sourcesNote: 'Страница программы, версия 1.0 и профиль для генеративного искусственного интеллекта.',
    sources: sources([
      [
        'Национальный институт стандартов и технологий США: Рамочная программа управления рисками искусственного интеллекта (AI Risk Management Framework)',
        nistHub,
      ],
      [
        'Национальный институт стандартов и технологий США: Рамочная программа управления рисками искусственного интеллекта, версия 1.0 (Artificial Intelligence Risk Management Framework, AI RMF 1.0, NIST AI 100-1)',
        nistPdf,
      ],
      [
        'Национальный институт стандартов и технологий США: профиль генеративного искусственного интеллекта (Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1)',
        nistGen,
      ],
      [
        'Викисклад: Ньютонова яблоня в Гейтерсберге, фото (NIST Gaithersburg Newton Apple Tree)',
        nistPhoto,
      ],
    ]),
  },
  'uk-ai-regulation': {
    title: 'Британский подход к регулированию искусственного интеллекта',
    hook: 'Правительство Великобритании установило пять принципов, которые существующие надзорные органы применяют в своих отраслях, вместо того чтобы принимать один новый закон об искусственном интеллекте. Ответ правительства в феврале 2024 года сохранил этот подход и добавил надзорным органам финансирование и сроки.',
    imageAlt: 'Правительственные здания в районе Уайтхолла, Лондон, вид с колеса обозрения «Лондонский глаз» в августе 2014 года.',
    caption:
      'Правительственные здания в районе Уайтхолла, Лондон, вид с колеса обозрения «Лондонский глаз» в августе 2014 года.',
    figureCredit: 'Фото: Джанин и Джим Иден, через Викисклад, лицензия',
    figureLicense: 'Creative Commons «Атрибуция 2.0 Общая».',
    figureLicenseUrl: ccBy20,
    jurisdiction: 'Великобритания',
    officialName:
      '«Подход к регулированию искусственного интеллекта, поддерживающий инновации» (белая книга, март 2023 года) и ответ правительства (февраль 2024 года)',
    citation: 'Белая книга от 29 марта 2023 года; ответ правительства от 6 февраля 2024 года',
    yearStatus: 'Политика правительства, применяемая через существующие надзорные органы',
    what: 'В белой книге, опубликованной 29 марта 2023 года, Министерство науки, инноваций и технологий и Управление по искусственному интеллекту изложили, как правительство Великобритании предлагает регулировать искусственный интеллект. Основу составляют пять общих для всех отраслей принципов: безопасность, защищённость и устойчивость; надлежащая прозрачность и объяснимость; справедливость; подотчётность и управление; возможность оспорить решение и получить возмещение. Существующие надзорные органы, например Управление комиссара по информации и Управление по конкуренции и рынкам, толкуют и применяют принципы в пределах своих полномочий. Публичные консультации по предложениям завершились 21 июня 2023 года.',
    effects:
      'Белая книга ввела принципы без закона, поскольку, по её доводам, новые жёсткие и обременительные правила могли бы затормозить инновации, и указала, что правительство рассчитывает позже, когда позволит парламентское время, ввести для надзорных органов законную обязанность должным образом учитывать принципы. Ответ правительства от 6 февраля 2024 года пока сохранил подход без закона, оставив вопрос открытым для пересмотра. В нём объявлено о 10 миллионах фунтов стерлингов на развитие компетенций надзорных органов в области искусственного интеллекта, ряду надзорных органов предложено опубликовать свою стратегию в отношении искусственного интеллекта до 30 апреля 2024 года, а в правительстве создана центральная структура для отслеживания рисков и координации надзорных органов.',
    where: 'Правила для искусственного интеллекта появляются через руководства и надзор отраслевых органов, в пределах уже имеющихся у них полномочий. Для небольшого числа разработчиков особо мощных моделей общего назначения ответ обосновал целевые обязательные требования в будущем и указал, что правительство примет закон, когда будет уверено, что это правильный шаг. Принципы опираются на принципы искусственного интеллекта Организации экономического сотрудничества и развития, на которые ссылается белая книга.',
    caveats:
      'Оба документа представляют собой программные документы правительства, а принципы сами по себе не имеют юридической силы и зависят от полномочий каждого надзорного органа, поэтому там, где ни у одного органа нет ясных полномочий, могут оставаться пробелы. Правительственный портал Великобритании отмечает, что оба документа опубликованы при консервативном правительстве Риши Сунака в 2022-2024 годах; последующие правительства могли изменить курс, поэтому проверять стоит актуальные страницы этого портала.',
    sourcesNote: 'Белая книга, её текст для чтения в сети и ответ правительства от февраля 2024 года.',
    sources: sources([
      [
        'Правительственный портал Великобритании, Министерство науки, инноваций и технологий и Управление по искусственному интеллекту: Регулирование искусственного интеллекта, подход, поддерживающий инновации (AI regulation: a pro-innovation approach)',
        ukPaper,
      ],
      [
        'Правительственный портал Великобритании: Подход к регулированию искусственного интеллекта, поддерживающий инновации (A pro-innovation approach to AI regulation)',
        ukPdf,
      ],
      [
        'Правительственный портал Великобритании, Министерство науки, инноваций и технологий: Подход к регулированию искусственного интеллекта, поддерживающий инновации, ответ правительства (A pro-innovation approach to AI regulation: government response)',
        ukResponse,
      ],
      [
        'Викисклад: Уайтхолл с «Лондонского глаза», фото (Whitehall from London Eye 2014)',
        ukPhoto,
      ],
    ]),
  },
};

export const lawAiPackPl: Record<string, LawCopy> = {
  'coe-ai-framework-convention': {
    title: 'Konwencja ramowa Rady Europy o sztucznej inteligencji',
    hook: 'Pierwszy traktat międzynarodowy o sztucznej inteligencji, który staje się wiążący dla państw, które go ratyfikują. Na dzień 29 września 2026 r. miał 21 sygnatariuszy i jedną ratyfikację, dokonaną przez Unię Europejską.',
    imageAlt: 'Pałac Europy w Strasburgu, siedziba Rady Europy, widziany z lotu ptaka.',
    caption: 'Pałac Europy w Strasburgu, siedziba Rady Europy, widziany z lotu ptaka.',
    figureCredit: 'Zdjęcie: Rada Europy, za pośrednictwem Wikimedia Commons, licencja',
    figureLicense: 'Creative Commons Uznanie autorstwa 3.0 w wersji ogólnej.',
    figureLicenseUrl: ccBy30,
    jurisdiction: 'Międzynarodowa (państwa członkowskie Rady Europy, państwa partnerskie i Unia Europejska)',
    officialName:
      'Konwencja ramowa Rady Europy o sztucznej inteligencji i prawach człowieka, demokracji i praworządności',
    citation: 'Seria Traktatów Rady Europy nr 225, otwarta do podpisu 5 września 2024 r.',
    yearStatus: 'Otwarta do podpisu; jeszcze przed wejściem w życie',
    what: 'Rada Europy, organizacja praw człowieka zrzeszająca 46 państw europejskich z siedzibą w Strasburgu, wynegocjowała tę konwencję ramową ze swoimi członkami, z państwami obserwatorami i innymi krajami, z Unią Europejską oraz z przedstawicielami społeczeństwa obywatelskiego, nauki i biznesu. Konwencję otwarto do podpisu w Wilnie 5 września 2024 r. Rada Europy nazywa ją pierwszym prawnie wiążącym traktatem międzynarodowym o sztucznej inteligencji. Wymaga ona, aby wszelkie działania w całym cyklu życia systemu sztucznej inteligencji szanowały prawa człowieka, demokrację i praworządność.',
    effects:
      'Państwa, które ratyfikują konwencję, przyjmują zobowiązania prawne we własnym porządku prawnym. Traktat ustala wspólne zasady: godność człowieka i autonomię jednostki, równość i niedyskryminację, prywatność i ochronę danych osobowych, przejrzystość i nadzór, rozliczalność i odpowiedzialność, niezawodność oraz bezpieczne innowacje. Wymaga też dostępnych i skutecznych środków ochrony prawnej, gdy system sztucznej inteligencji narusza prawa człowieka, gwarancji proceduralnych, informowania ludzi, że mają do czynienia z takim systemem, oraz środków służących rozpoznawaniu, ocenie i ograniczaniu ryzyka. Sformułowania są neutralne technologicznie, więc traktat może objąć także przyszłe systemy.',
    where: 'Konwencja obowiązuje w pełni organy władzy publicznej i działające w ich imieniu firmy prywatne. Wobec pozostałych podmiotów prywatnych każde państwo musi przeciwdziałać ryzyku zgodnie z celami traktatu i oświadczyć, jak to zrobi: stosując bezpośrednio obowiązki z traktatu albo innymi odpowiednimi środkami. Państwa mogą wyłączyć działania służące ochronie bezpieczeństwa narodowego, pod warunkiem przestrzegania prawa międzynarodowego, a obronność narodowa leży całkowicie poza zakresem traktatu. Wyłączone są też badania i prace rozwojowe nad systemami, zanim zostaną udostępnione do użytku, chyba że testy mogłyby naruszyć prawa człowieka, demokrację lub praworządność. Traktat wchodzi w życie pierwszego dnia miesiąca następującego po upływie trzech miesięcy od dnia, w którym pięciu sygnatariuszy, w tym co najmniej trzy państwa członkowskie Rady Europy, go ratyfikuje.',
    caveats:
      'Na dzień 29 września 2026 r. Biuro Traktatów Rady Europy wymieniało 21 sygnatariuszy: 15 państw członkowskich Rady Europy, w tym Wielką Brytanię, Norwegię, Szwajcarię i Ukrainę; pięć innych państw, czyli Kanadę, Izrael, Japonię, Stany Zjednoczone i Urugwaj; oraz Unię Europejską. Ratyfikowała go tylko Unia Europejska, 15 maja 2026 r., więc traktat jeszcze czekał na wejście w życie. Podpis wyraża zamiar; obowiązki prawne powstają wraz z ratyfikacją i wejściem w życie. Każde państwo samo decyduje, jak przepisy obejmą firmy prywatne, więc poziom ochrony może się różnić między krajami. Aktualną listę podpisów i ratyfikacji podaje tabela Biura Traktatów.',
    sourcesNote:
      'Strona traktatu, tekst traktatu, tabela podpisów i ratyfikacji oraz wiadomość o ratyfikacji przez Unię Europejską.',
    sources: sources([
      [
        'Rada Europy: Konwencja ramowa o sztucznej inteligencji (The Framework Convention on Artificial Intelligence)',
        coeUrl,
      ],
      [
        'Rada Europy: tekst Konwencji ramowej Rady Europy o sztucznej inteligencji i prawach człowieka, demokracji i praworządności, Seria Traktatów Rady Europy nr 225 (Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law)',
        coeText,
      ],
      [
        'Biuro Traktatów Rady Europy: tabela podpisów i ratyfikacji traktatu nr 225 (Chart of signatures and ratifications of Treaty 225)',
        coeChart,
      ],
      [
        'Rada Europy: Unia Europejska ratyfikuje Konwencję ramową Rady Europy o sztucznej inteligencji (European Union ratifies the Council of Europe Framework Convention on Artificial Intelligence)',
        coeNews,
      ],
      [
        'Wikimedia Commons: Pałac Europy z lotu ptaka, zdjęcie (Council of Europe Palais de l’Europe aerial view)',
        coePhoto,
      ],
    ]),
  },
  'unesco-ai-ethics': {
    title: 'Zalecenie w sprawie etyki sztucznej inteligencji',
    hook: 'Pierwszy globalny standard etyki sztucznej inteligencji, przyjęty przez wszystkie 193 państwa członkowskie Organizacji Narodów Zjednoczonych do spraw Oświaty, Nauki i Kultury. W jego centrum są prawa człowieka i godność ludzka.',
    imageAlt: 'Siedziba Organizacji Narodów Zjednoczonych do spraw Oświaty, Nauki i Kultury w Paryżu w lutym 1962 r., w oddali wieża Eiffla.',
    caption:
      'Siedziba Organizacji Narodów Zjednoczonych do spraw Oświaty, Nauki i Kultury w Paryżu w lutym 1962 r., w oddali wieża Eiffla.',
    figureCredit: 'Zdjęcie: Dominique Roger, za pośrednictwem Wikimedia Commons, licencja',
    figureLicense:
      'Creative Commons Uznanie autorstwa, na tych samych warunkach 3.0 dla organizacji międzyrządowych.',
    figureLicenseUrl: ccBySaIgo,
    jurisdiction:
      'Cały świat (państwa członkowskie Organizacji Narodów Zjednoczonych do spraw Oświaty, Nauki i Kultury)',
    officialName: 'Zalecenie w sprawie etyki sztucznej inteligencji',
    citation: 'Przyjęte przez Konferencję Generalną w listopadzie 2021 r.',
    yearStatus: 'Przyjęte w listopadzie 2021 r.; dobrowolne',
    what: 'Organizacja Narodów Zjednoczonych do spraw Oświaty, Nauki i Kultury przyjęła to zalecenie w listopadzie 2021 r., za zgodą wszystkich 193 państw członkowskich. Organizacja nazywa je pierwszym globalnym standardem etyki sztucznej inteligencji. Zalecenie opiera się na czterech podstawowych wartościach: poszanowaniu i ochronie godności ludzkiej i praw człowieka; wspieraniu sprawiedliwych, pokojowych i powiązanych ze sobą społeczeństw; zapewnieniu różnorodności i włączenia; wspieraniu rozkwitu środowiska i ekosystemów.',
    effects:
      'Dziesięć zasad przekłada te wartości na praktykę: proporcjonalność i niewyrządzanie szkody; bezpieczeństwo i ochrona; prawo do prywatności i ochrony danych; wielostronne i elastyczne zarządzanie; odpowiedzialność i rozliczalność; przejrzystość i wyjaśnialność; nadzór i decydująca rola człowieka; zrównoważony rozwój; świadomość i umiejętności; sprawiedliwość i niedyskryminacja. Zalecenie wykracza poza zasady i daje rządom konkretne propozycje polityk w dziedzinach od równości płci i danych po współpracę międzynarodową, aby państwa mogły wpisać etykę w swoje krajowe strategie i przepisy dotyczące sztucznej inteligencji.',
    where: 'Takie zalecenie to polityczne i moralne zobowiązanie rządów; każde państwo samo wybiera, jak wprowadzić je do prawa i praktyki. Organizacja śledzi jego realizację za pomocą narzędzi takich jak Globalne obserwatorium etyki i zarządzania sztuczną inteligencją, które pokazuje, na ile państwa są gotowe wdrażać ją w sposób etyczny i odpowiedzialny. Pełny tekst z definicjami i rozdziałami o polityce jest dostępny w Bibliotece Cyfrowej tej organizacji.',
    caveats:
      'Zalecenie nie tworzy zobowiązań traktatowych i żaden sąd ani sankcja go nie egzekwuje. Szerokie sformułowania zostawiają miejsce na bardzo różne decyzje krajowe, więc jego skutki zależą od tego, co zrobi z nim każdy rząd. Strony internetowe o zaleceniu streszczają tekst; punktem odniesienia jest samo przyjęte zalecenie.',
    sourcesNote: 'Strona zalecenia i przyjęty tekst w Bibliotece Cyfrowej.',
    sources: sources([
      [
        'Organizacja Narodów Zjednoczonych do spraw Oświaty, Nauki i Kultury: Etyka sztucznej inteligencji, Zalecenie w sprawie etyki sztucznej inteligencji (Ethics of Artificial Intelligence, Recommendation on the Ethics of Artificial Intelligence)',
        unescoUrl,
      ],
      [
        'Biblioteka Cyfrowa: Zalecenie w sprawie etyki sztucznej inteligencji (Recommendation on the Ethics of Artificial Intelligence)',
        unescoText,
      ],
      [
        'Wikimedia Commons: architektura, Paryż, zdjęcie (Architecture, Paris - UNESCO - PHOTO0000002781 0001)',
        unescoPhoto,
      ],
    ]),
  },
  'oecd-ai-principles': {
    title: 'Zasady Organizacji Współpracy Gospodarczej i Rozwoju dotyczące sztucznej inteligencji',
    hook: 'Pierwszy międzyrządowy standard dotyczący sztucznej inteligencji, przyjęty w maju 2019 r. i zaktualizowany w maju 2024 r. Na dzień 29 września 2026 r. przystąpiło do niego 50 państw i Unia Europejska.',
    imageAlt: 'Zamek La Muette w Paryżu, część siedziby Organizacji Współpracy Gospodarczej i Rozwoju, w marcu 2019 r.',
    caption:
      'Zamek La Muette w Paryżu, część siedziby Organizacji Współpracy Gospodarczej i Rozwoju, w marcu 2019 r.',
    figureCredit: 'Zdjęcie: mySociety, za pośrednictwem Wikimedia Commons, licencja',
    figureLicense: 'Creative Commons Uznanie autorstwa 2.0 Ogólna.',
    figureLicenseUrl: ccBy20,
    jurisdiction:
      'Międzynarodowa (państwa członkowskie Organizacji Współpracy Gospodarczej i Rozwoju i inne państwa, które przystąpiły)',
    officialName: 'Zalecenie Rady w sprawie sztucznej inteligencji',
    citation: 'Przyjęte 22 maja 2019 r.; zmienione 8 listopada 2023 r. i 3 maja 2024 r.',
    yearStatus: 'Obowiązujące zalecenie; dobrowolne',
    what: 'Organizacja Współpracy Gospodarczej i Rozwoju, międzyrządowe forum 38 państw członkowskich, przyjęła to zalecenie 22 maja 2019 r. Jej Rada zmieniła tekst 8 listopada 2023 r., aktualizując definicję systemu sztucznej inteligencji, i ponownie 3 maja 2024 r., aby uwzględnić nowe technologie i polityki, w tym generatywną sztuczną inteligencję. Zalecenie ustala pięć opartych na wartościach zasad godnej zaufania sztucznej inteligencji: wzrost sprzyjający włączeniu, zrównoważony rozwój i dobrostan; prawa człowieka i wartości demokratyczne, w tym sprawiedliwość i prywatność; przejrzystość i wyjaśnialność; odporność, ochrona i bezpieczeństwo; rozliczalność.',
    effects:
      'Tekst daje też rządom pięć zaleceń: inwestować w badania i rozwój sztucznej inteligencji; wspierać sprzyjający włączeniu ekosystem; kształtować spójne, wzajemnie zgodne otoczenie zarządzania i polityki; rozwijać kompetencje ludzi i przygotowywać się na zmiany na rynku pracy; współpracować międzynarodowo na rzecz godnej zaufania sztucznej inteligencji. Według tej organizacji Unia Europejska, Rada Europy, Stany Zjednoczone i Organizacja Narodów Zjednoczonych stosują jej definicję systemu sztucznej inteligencji we własnych przepisach, regulacjach i wytycznych. W czerwcu 2019 r. na szczycie w Osace przywódcy Grupy Dwudziestu przyjęli z uznaniem zasady sztucznej inteligencji oparte na tym tekście.',
    where: 'Rejestr instrumentów prawnych wymienia państwa, które przystąpiły do zalecenia: wszystkich 38 członków organizacji, 12 innych państw (Argentyna, Brazylia, Kambodża, Chorwacja, Egipt, Malta, Peru, Rumunia, Arabia Saudyjska, Singapur, Ukraina i Urugwaj) oraz Unię Europejską. Ostatnio przystąpiły Kambodża i Chorwacja, 15 maja 2026 r. Przystępując, rząd przyjmuje zasady; każdy sam decyduje, jak stosować je we własnej polityce i prawie.',
    caveats:
      'Zalecenie jest politycznym zobowiązaniem bez kar, więc efekty zależą od działań poszczególnych państw. Zasady są ogólne i pozostawiają szczegółowe przepisy każdemu rządowi. Serwis organizacji poświęcony polityce wobec sztucznej inteligencji podaje starszą, niższą liczbę państw; oficjalną listą jest rejestr instrumentów prawnych.',
    sourcesNote: 'Rejestr instrumentów prawnych i przegląd zasad.',
    sources: sources([
      [
        'Instrumenty prawne Organizacji Współpracy Gospodarczej i Rozwoju: Zalecenie Rady w sprawie sztucznej inteligencji (Recommendation of the Council on Artificial Intelligence, OECD/LEGAL/0449)',
        oecdLegal,
      ],
      [
        'Obserwatorium polityki wobec sztucznej inteligencji: przegląd zasad (OECD.AI Policy Observatory, AI Principles Overview)',
        oecdOverview,
      ],
      [
        'Wikimedia Commons: Château de la Muette, Paryż, zdjęcie (Château de la Muette, Paris 19 March 2019 002)',
        oecdPhoto,
      ],
    ]),
  },
  'nist-ai-rmf': {
    title: 'Amerykańskie ramy zarządzania ryzykiem sztucznej inteligencji',
    hook: 'Dobrowolny przewodnik Narodowego Instytutu Standaryzacji i Technologii Stanów Zjednoczonych, który pomaga organizacjom rozpoznawać, mierzyć i kontrolować ryzyko systemów sztucznej inteligencji. Wydany w styczniu 2023 r., obecnie w trakcie przeglądu.',
    imageAlt: 'Jabłoń Newtona w kampusie instytutu w Gaithersburgu, w stanie Maryland, wiosennym rankiem.',
    caption: 'Jabłoń Newtona w kampusie instytutu w Gaithersburgu, w stanie Maryland, wiosennym rankiem.',
    figureCredit: 'Zdjęcie: Stoughton, Narodowy Instytut Standaryzacji i Technologii Stanów Zjednoczonych,',
    figureLicense: 'domena publiczna (utwór rządu federalnego Stanów Zjednoczonych), za pośrednictwem Wikimedia Commons.',
    figureLicenseUrl: nistCopyright,
    jurisdiction: 'Stany Zjednoczone',
    officialName: 'Ramy zarządzania ryzykiem sztucznej inteligencji, wersja 1.0',
    citation: 'Wersja 1.0, wydana 26 stycznia 2023 r.',
    yearStatus: 'Dobrowolne ramy; w trakcie przeglądu',
    what: 'Narodowy Instytut Standaryzacji i Technologii Stanów Zjednoczonych, agencja federalna w strukturze Departamentu Handlu, wydał wersję 1.0 tych ram 26 stycznia 2023 r., po publicznym zapytaniu o informacje, kilku projektach i otwartych warsztatach. Prace zlecił Kongres w ustawie o krajowej inicjatywie w dziedzinie sztucznej inteligencji z 2020 r. Instytut opisuje ramy jako dobrowolne, chroniące prawa, otwarte dla każdego sektora i odpowiednie dla każdego zastosowania sztucznej inteligencji w organizacjach każdej wielkości.',
    effects:
      'Ramy dają organizacjom, które projektują, rozwijają, wdrażają lub używają systemów sztucznej inteligencji, wspólny język do mówienia o ryzyku. Godną zaufania sztuczną inteligencję opisuje siedem cech: trafność i niezawodność; bezpieczeństwo; ochrona i odporność; rozliczalność i przejrzystość; wyjaśnialność i interpretowalność; ochrona prywatności; sprawiedliwość przy kontroli szkodliwych uprzedzeń. Instytut uzupełnia ramy materiałami towarzyszącymi, w tym praktycznym poradnikiem, mapą drogową i zestawieniami z innymi normami, a 30 marca 2023 r. uruchomił Centrum zasobów na rzecz godnej zaufania i odpowiedzialnej sztucznej inteligencji, aby pomóc organizacjom stosować ramy w praktyce.',
    where: 'Ramy opierają się na czterech funkcjach. „Zarządzaj” buduje kulturę zarządzania ryzykiem i przenika pozostałe trzy. „Mapuj” opisuje kontekst i rozpoznaje ryzyka systemu. „Mierz” za pomocą metod ilościowych i jakościowych analizuje, ocenia i monitoruje te ryzyka. „Reaguj” kieruje zasoby na rozpoznane i zmierzone ryzyka oraz planuje odpowiedź na incydenty. 26 lipca 2024 r. instytut dodał profil dla generatywnej sztucznej inteligencji, a 7 kwietnia 2026 r. opublikował notę koncepcyjną profilu godnej zaufania sztucznej inteligencji w infrastrukturze krytycznej.',
    caveats:
      'Stosowanie ram jest dobrowolne i same w sobie nie tworzą obowiązków prawnych. Instytut informuje, że wersja 1.0 jest poprawiana w ramach planu działań Białego Domu w sprawie sztucznej inteligencji, więc części ram mogą się zmienić. Ramy opisują pożądane rezultaty i pozostawiają wybór metod każdej organizacji, więc dwie organizacje mogą stosować je bardzo różnie.',
    sourcesNote: 'Strona ram, wersja 1.0 i profil sztucznej inteligencji generatywnej.',
    sources: sources([
      [
        'Narodowy Instytut Standaryzacji i Technologii Stanów Zjednoczonych: Ramy zarządzania ryzykiem sztucznej inteligencji (AI Risk Management Framework)',
        nistHub,
      ],
      [
        'Narodowy Instytut Standaryzacji i Technologii Stanów Zjednoczonych: Ramy zarządzania ryzykiem sztucznej inteligencji, wersja 1.0 (Artificial Intelligence Risk Management Framework, AI RMF 1.0, NIST AI 100-1)',
        nistPdf,
      ],
      [
        'Narodowy Instytut Standaryzacji i Technologii Stanów Zjednoczonych: profil generatywnej sztucznej inteligencji (Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1)',
        nistGen,
      ],
      [
        'Wikimedia Commons: Jabłoń Newtona w Gaithersburgu, zdjęcie (NIST Gaithersburg Newton Apple Tree)',
        nistPhoto,
      ],
    ]),
  },
  'uk-ai-regulation': {
    title: 'Brytyjskie podejście do regulacji sztucznej inteligencji',
    hook: 'Rząd Zjednoczonego Królestwa ustalił pięć zasad, które istniejące organy nadzoru stosują w swoich sektorach, zamiast uchwalać jedną nową ustawę o sztucznej inteligencji. Odpowiedź rządu z lutego 2024 r. utrzymała to podejście i dodała organom nadzoru finansowanie oraz terminy.',
    imageAlt: 'Budynki rządowe wokół Whitehall w Londynie, widziane z London Eye w sierpniu 2014 r.',
    caption: 'Budynki rządowe wokół Whitehall w Londynie, widziane z London Eye w sierpniu 2014 r.',
    figureCredit: 'Zdjęcie: Janine i Jim Eden, za pośrednictwem Wikimedia Commons, licencja',
    figureLicense: 'Creative Commons Uznanie autorstwa 2.0 Ogólna.',
    figureLicenseUrl: ccBy20,
    jurisdiction: 'Zjednoczone Królestwo',
    officialName:
      '„Podejście do regulacji sztucznej inteligencji sprzyjające innowacjom” (biała księga, marzec 2023 r.) i odpowiedź rządu (luty 2024 r.)',
    citation: 'Biała księga z 29 marca 2023 r.; odpowiedź rządu z 6 lutego 2024 r.',
    yearStatus: 'Polityka rządu stosowana przez istniejące organy nadzoru',
    what: 'W białej księdze opublikowanej 29 marca 2023 r. Departament Nauki, Innowacji i Technologii oraz Biuro do spraw Sztucznej Inteligencji przedstawiły, jak rząd Zjednoczonego Królestwa proponuje regulować sztuczną inteligencję. Podstawą jest pięć zasad wspólnych dla wszystkich sektorów: bezpieczeństwo, ochrona i odporność; odpowiednia przejrzystość i wyjaśnialność; sprawiedliwość; rozliczalność i zarządzanie; możliwość zakwestionowania decyzji i uzyskania zadośćuczynienia. Istniejące organy nadzoru, na przykład Biuro Komisarza do spraw Informacji i Urząd do spraw Konkurencji i Rynków, interpretują i stosują zasady w granicach swoich kompetencji. Konsultacje publiczne w sprawie propozycji zakończyły się 21 czerwca 2023 r.',
    effects:
      'Biała księga wprowadziła zasady bez ustawy, argumentując, że nowe sztywne i uciążliwe przepisy mogłyby hamować innowacje, i zapowiedziała, że rząd zamierza później, gdy pozwoli na to kalendarz parlamentu, wprowadzić ustawowy obowiązek należytego uwzględniania zasad przez organy nadzoru. Odpowiedź rządu z 6 lutego 2024 r. na razie utrzymała podejście bez ustawy, pozostawiając je do przeglądu. Zapowiedziano w niej 10 milionów funtów na rozwój kompetencji organów nadzoru w dziedzinie sztucznej inteligencji, poproszono szereg organów nadzoru o opublikowanie swojej strategii wobec sztucznej inteligencji do 30 kwietnia 2024 r. i utworzono w rządzie centralną jednostkę do monitorowania ryzyka i koordynacji organów nadzoru.',
    where: 'Reguły dla sztucznej inteligencji pojawiają się poprzez wytyczne i egzekwowanie prawa przez organy nadzoru poszczególnych sektorów, w granicach uprawnień, które już mają. Wobec niewielkiej liczby twórców bardzo zaawansowanych modeli ogólnego przeznaczenia odpowiedź uzasadniła przyszłe ukierunkowane, wiążące wymogi i zapowiedziała, że rząd uchwali ustawę, gdy będzie pewny, że to właściwy krok. Zasady nawiązują do zasad dotyczących sztucznej inteligencji Organizacji Współpracy Gospodarczej i Rozwoju, na które powołuje się biała księga.',
    caveats:
      'Oba dokumenty to rządowe dokumenty programowe, a zasady same w sobie nie mają mocy prawnej i zależą od uprawnień każdego organu nadzoru, więc tam, gdzie żaden organ nie ma jasnych kompetencji, mogą zostać luki. Portal rządu Zjednoczonego Królestwa oznacza oba dokumenty jako opublikowane przez konserwatywny rząd Rishiego Sunaka z lat 2022-2024; kolejne rządy mogły zmienić kurs, dlatego warto sprawdzać aktualne strony tego portalu.',
    sourcesNote: 'Biała księga, jej tekst do czytania w sieci i odpowiedź rządu z lutego 2024 r.',
    sources: sources([
      [
        'Portal rządu Zjednoczonego Królestwa, Departament Nauki, Innowacji i Technologii oraz Biuro do spraw Sztucznej Inteligencji: Regulacja sztucznej inteligencji, podejście sprzyjające innowacjom (AI regulation: a pro-innovation approach)',
        ukPaper,
      ],
      [
        'Portal rządu Zjednoczonego Królestwa: Podejście do regulacji sztucznej inteligencji sprzyjające innowacjom (A pro-innovation approach to AI regulation)',
        ukPdf,
      ],
      [
        'Portal rządu Zjednoczonego Królestwa, Departament Nauki, Innowacji i Technologii: Podejście do regulacji sztucznej inteligencji sprzyjające innowacjom, odpowiedź rządu (A pro-innovation approach to AI regulation: government response)',
        ukResponse,
      ],
      [
        'Wikimedia Commons: Whitehall z London Eye, zdjęcie (Whitehall from London Eye 2014)',
        ukPhoto,
      ],
    ]),
  },
};

export const lawAiPackLv: Record<string, LawCopy> = {
  'coe-ai-framework-convention': {
    title: 'Eiropas Padomes Pamatkonvencija par mākslīgo intelektu',
    hook: 'Pirmais starptautiskais līgums par mākslīgo intelektu, kas kļūst saistošs valstīm, kuras to ratificē. 2026. gada 29. septembrī tam bija 21 parakstītājs un viena ratifikācija, ko veikusi Eiropas Savienība.',
    imageAlt: 'Eiropas pils Strasbūrā, Eiropas Padomes mītne, skats no gaisa.',
    caption: 'Eiropas pils Strasbūrā, Eiropas Padomes mītne, skats no gaisa.',
    figureCredit: 'Foto: Eiropas Padome, ar Wikimedia Commons starpniecību, licence',
    figureLicense: 'Creative Commons „Atsauce 3.0 Vispārējā”.',
    figureLicenseUrl: ccBy30,
    jurisdiction: 'Starptautiska (Eiropas Padomes dalībvalstis, partnervalstis un Eiropas Savienība)',
    officialName:
      'Eiropas Padomes Pamatkonvencija par mākslīgo intelektu un cilvēktiesībām, demokrātiju un tiesiskumu',
    citation: 'Eiropas Padomes līgumu sērija Nr. 225, atvērta parakstīšanai 2024. gada 5. septembrī',
    yearStatus: 'Atvērta parakstīšanai; vēl nav stājusies spēkā',
    what: 'Eiropas Padome, cilvēktiesību organizācija, kurā apvienojušās 46 Eiropas valstis un kuras mītne ir Strasbūrā, izstrādāja šo pamatkonvenciju kopā ar savām dalībvalstīm, novērotājvalstīm un citām valstīm, Eiropas Savienību, kā arī pilsoniskās sabiedrības, akadēmisko aprindu un nozares pārstāvjiem. Konvencija tika atvērta parakstīšanai Viļņā 2024. gada 5. septembrī. Eiropas Padome to sauc par pirmo juridiski saistošo starptautisko līgumu par mākslīgo intelektu. Tā prasa, lai visas darbības visā mākslīgā intelekta sistēmas dzīves ciklā ievērotu cilvēktiesības, demokrātiju un tiesiskumu.',
    effects:
      'Valstis, kas ratificē konvenciju, uzņemas juridiskas saistības savos tiesību aktos. Līgums nosaka kopīgus principus: cilvēka cieņa un personas autonomija, vienlīdzība un nediskriminācija, privātums un personas datu aizsardzība, pārredzamība un uzraudzība, pārskatatbildība un atbildība, uzticamība un droša inovācija. Tas prasa arī pieejamus un efektīvus tiesiskās aizsardzības līdzekļus, ja mākslīgā intelekta sistēma pārkāpj cilvēktiesības, procesuālās garantijas, cilvēku informēšanu par to, ka viņi sazinās ar šādu sistēmu, un pasākumus risku apzināšanai, novērtēšanai un mazināšanai. Formulējumi ir tehnoloģiski neitrāli, tāpēc līgums var aptvert arī nākotnes sistēmas.',
    where: 'Konvencija pilnā apmērā attiecas uz valsts iestādēm un privātiem uzņēmumiem, kas darbojas to vārdā. Attiecībā uz pārējiem privātajiem dalībniekiem katrai valstij jānovērš riski saskaņā ar līguma mērķiem un jāpaziņo, kā tā to darīs: tieši piemērojot līguma pienākumus vai ar citiem piemērotiem pasākumiem. Valstis drīkst nepiemērot konvenciju darbībām, kas aizsargā valsts drošību, ja tiek ievērotas starptautiskās tiesības, bet valsts aizsardzība ir pilnībā ārpus līguma darbības jomas. Izņemta ir arī sistēmu pētniecība un izstrāde, pirms tās tiek darītas pieejamas lietošanai, izņemot gadījumus, kad testēšana varētu skart cilvēktiesības, demokrātiju vai tiesiskumu. Līgums stājas spēkā nākamā mēneša pirmajā dienā pēc tam, kad pagājuši trīs mēneši kopš dienas, kad to ratificējuši pieci parakstītāji, no kuriem vismaz trīs ir Eiropas Padomes dalībvalstis.',
    caveats:
      '2026. gada 29. septembrī Eiropas Padomes Līgumu birojs uzskaitīja 21 parakstītāju: 15 Eiropas Padomes dalībvalstis, to vidū Apvienoto Karalisti, Norvēģiju, Šveici un Ukrainu; piecas citas valstis, proti, Kanādu, Izraēlu, Japānu, Amerikas Savienotās Valstis un Urugvaju; un Eiropas Savienību. Līgumu bija ratificējusi tikai Eiropas Savienība, 2026. gada 15. maijā, tāpēc tas vēl nebija stājies spēkā. Paraksts pauž nodomu; juridiskās saistības sākas ar ratifikāciju un stāšanos spēkā. Katra valsts pati lemj, kā noteikumi attieksies uz privātiem uzņēmumiem, tāpēc aizsardzības līmenis dažādās valstīs var atšķirties. Aktuālais parakstu un ratifikāciju saraksts ir Līgumu biroja tabulā.',
    sourcesNote:
      'Līguma lapa, līguma teksts, parakstu un ratifikāciju tabula un ziņa par Eiropas Savienības ratifikāciju.',
    sources: sources([
      [
        'Eiropas Padome: Pamatkonvencija par mākslīgo intelektu (The Framework Convention on Artificial Intelligence)',
        coeUrl,
      ],
      [
        'Eiropas Padome: Eiropas Padomes Pamatkonvencijas par mākslīgo intelektu un cilvēktiesībām, demokrātiju un tiesiskumu teksts, Eiropas Padomes līgumu sērija Nr. 225 (Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law)',
        coeText,
      ],
      [
        'Eiropas Padomes Līgumu birojs: līguma Nr. 225 parakstu un ratifikāciju tabula (Chart of signatures and ratifications of Treaty 225)',
        coeChart,
      ],
      [
        'Eiropas Padome: Eiropas Savienība ratificē Eiropas Padomes Pamatkonvenciju par mākslīgo intelektu (European Union ratifies the Council of Europe Framework Convention on Artificial Intelligence)',
        coeNews,
      ],
      [
        'Wikimedia Commons: Eiropas pils no gaisa, foto (Council of Europe Palais de l’Europe aerial view)',
        coePhoto,
      ],
    ]),
  },
  'unesco-ai-ethics': {
    title: 'Ieteikums par mākslīgā intelekta ētiku',
    hook: 'Pirmais globālais mākslīgā intelekta ētikas standarts, ko pieņēma visas 193 Apvienoto Nāciju Izglītības, zinātnes un kultūras organizācijas dalībvalstis. Tā centrā ir cilvēktiesības un cilvēka cieņa.',
    imageAlt:
      'Apvienoto Nāciju Izglītības, zinātnes un kultūras organizācijas galvenā mītne Parīzē 1962. gada februārī, tālumā Eifeļa tornis.',
    caption:
      'Apvienoto Nāciju Izglītības, zinātnes un kultūras organizācijas galvenā mītne Parīzē 1962. gada februārī, tālumā Eifeļa tornis.',
    figureCredit: 'Foto: Dominiks Rožē (Dominique Roger), ar Wikimedia Commons starpniecību, licence',
    figureLicense: 'Creative Commons „Atsauce, Līdzīga koplietošana 3.0 starpvaldību organizācijām”.',
    figureLicenseUrl: ccBySaIgo,
    jurisdiction: 'Visa pasaule (Apvienoto Nāciju Izglītības, zinātnes un kultūras organizācijas dalībvalstis)',
    officialName: 'Ieteikums par mākslīgā intelekta ētiku',
    citation: 'Pieņemts Ģenerālajā konferencē 2021. gada novembrī',
    yearStatus: 'Pieņemts 2021. gada novembrī; brīvprātīgs',
    what: 'Apvienoto Nāciju Izglītības, zinātnes un kultūras organizācija pieņēma šo ieteikumu 2021. gada novembrī ar visu 193 dalībvalstu piekrišanu. Organizācija to sauc par pirmo globālo mākslīgā intelekta ētikas standartu. Ieteikums balstās uz četrām pamatvērtībām: cilvēka cieņas un cilvēktiesību ievērošana un veicināšana; taisnīgu, mierīgu un savstarpēji saistītu sabiedrību veicināšana; daudzveidības un iekļautības nodrošināšana; vides un ekosistēmu plaukšanas atbalstīšana.',
    effects:
      'Desmit principi pārvērš šīs vērtības praksē: samērīgums un kaitējuma nenodarīšana; drošība un aizsardzība; tiesības uz privātumu un datu aizsardzību; daudzpusēja un pielāgoties spējīga pārvaldība; atbildība un pārskatatbildība; pārredzamība un izskaidrojamība; cilvēka uzraudzība un izšķirošā loma; ilgtspēja; informētība un pratība; taisnīgums un nediskriminācija. Ieteikums sniedzas tālāk par principiem un dod valdībām konkrētus politikas ieteikumus jomās no dzimumu līdztiesības un datiem līdz starptautiskajai sadarbībai, lai valstis varētu iestrādāt ētiku savās nacionālajās mākslīgā intelekta stratēģijās un likumos.',
    where: 'Šāds ieteikums ir valdību politiska un morāla apņemšanās; katra valsts pati izvēlas, kā to ieviest tiesību aktos un praksē. Organizācija seko izpildei ar tādiem rīkiem kā Globālā mākslīgā intelekta ētikas un pārvaldības observatorija, kas parāda, cik gatavas valstis ir ieviest to ētiski un atbildīgi. Pilns teksts ar definīcijām un politikas nodaļām ir pieejams organizācijas Digitālajā bibliotēkā.',
    caveats:
      'Ieteikums nerada līgumsaistības, un to neizpilda neviena tiesa vai sankcija. Plašie formulējumi atstāj vietu ļoti atšķirīgiem nacionāliem lēmumiem, tāpēc tā ietekme ir atkarīga no tā, ko ar to dara katra valdība. Tīmekļa lapas par ieteikumu teksta saturu atstāsta; atsauces punkts ir pats pieņemtais ieteikums.',
    sourcesNote: 'Ieteikuma lapa un pieņemtais teksts Digitālajā bibliotēkā.',
    sources: sources([
      [
        'Apvienoto Nāciju Izglītības, zinātnes un kultūras organizācija: Mākslīgā intelekta ētika, Ieteikums par mākslīgā intelekta ētiku (Ethics of Artificial Intelligence, Recommendation on the Ethics of Artificial Intelligence)',
        unescoUrl,
      ],
      [
        'Digitālā bibliotēka: Ieteikums par mākslīgā intelekta ētiku (Recommendation on the Ethics of Artificial Intelligence)',
        unescoText,
      ],
      [
        'Wikimedia Commons: arhitektūra, Parīze, foto (Architecture, Paris - UNESCO - PHOTO0000002781 0001)',
        unescoPhoto,
      ],
    ]),
  },
  'oecd-ai-principles': {
    title: 'Ekonomiskās sadarbības un attīstības organizācijas mākslīgā intelekta principi',
    hook: 'Pirmais starpvaldību standarts mākslīgā intelekta jomā, pieņemts 2019. gada maijā un atjaunināts 2024. gada maijā. 2026. gada 29. septembrī tam bija pievienojušās 50 valstis un Eiropas Savienība.',
    imageAlt: 'Mjuetas pils Parīzē, daļa no organizācijas galvenās mītnes, 2019. gada martā.',
    caption: 'Mjuetas pils Parīzē, daļa no organizācijas galvenās mītnes, 2019. gada martā.',
    figureCredit: 'Foto: mySociety, ar Wikimedia Commons starpniecību, licence',
    figureLicense: 'Creative Commons „Atsauce 2.0 Vispārējā”.',
    figureLicenseUrl: ccBy20,
    jurisdiction: 'Starptautiska (Ekonomiskās sadarbības un attīstības organizācijas dalībvalstis un citas pievienojušās valstis)',
    officialName: 'Padomes ieteikums par mākslīgo intelektu',
    citation: 'Pieņemts 2019. gada 22. maijā; pārskatīts 2023. gada 8. novembrī un 2024. gada 3. maijā',
    yearStatus: 'Spēkā esošs ieteikums; brīvprātīgs',
    what: 'Ekonomiskās sadarbības un attīstības organizācija, 38 dalībvalstu starpvaldību forums, pieņēma šo ieteikumu 2019. gada 22. maijā. Tās Padome tekstu pārskatīja 2023. gada 8. novembrī, atjauninot mākslīgā intelekta sistēmas definīciju, un vēlreiz 2024. gada 3. maijā, lai ņemtu vērā jaunas tehnoloģijas un politiku, tostarp ģeneratīvo mākslīgo intelektu. Ieteikums nosaka piecus uz vērtībām balstītus uzticama mākslīgā intelekta principus: iekļaujoša izaugsme, ilgtspējīga attīstība un labklājība; cilvēktiesības un demokrātiskās vērtības, tostarp taisnīgums un privātums; pārredzamība un izskaidrojamība; noturība, aizsargātība un drošība; pārskatatbildība.',
    effects:
      'Teksts dod valdībām arī piecus ieteikumus: ieguldīt mākslīgā intelekta pētniecībā un izstrādē; veicināt iekļaujošu vidi; veidot savietojamu pārvaldības un politikas vidi; attīstīt cilvēku prasmes un gatavoties pārmaiņām darba tirgū; sadarboties starptautiski uzticama mākslīgā intelekta labā. Pēc organizācijas datiem, Eiropas Savienība, Eiropas Padome, Amerikas Savienotās Valstis un Apvienoto Nāciju Organizācija izmanto tās mākslīgā intelekta sistēmas definīciju savos likumos, noteikumos un vadlīnijās. 2019. gada jūnijā Osakas samitā Divdesmit valstu grupas līderi atzinīgi novērtēja mākslīgā intelekta principus, kas balstīti šajā tekstā.',
    where: 'Juridisko instrumentu reģistrs uzskaita, kas ir pievienojušies ieteikumam: visas 38 organizācijas dalībvalstis, 12 citas valstis (Argentīna, Brazīlija, Kambodža, Horvātija, Ēģipte, Malta, Peru, Rumānija, Saūda Arābija, Singapūra, Ukraina un Urugvaja) un Eiropas Savienība. Pēdējās pievienojās Kambodža un Horvātija, 2026. gada 15. maijā. Pievienojoties valdība pieņem principus; katra pati lemj, kā tos piemērot savā politikā un tiesību aktos.',
    caveats:
      'Ieteikums ir politiska apņemšanās bez sodiem, tāpēc rezultāts ir atkarīgs no valstu rīcības. Principi ir vispārīgi un detalizētus noteikumus atstāj katras valdības ziņā. Organizācijas mākslīgā intelekta politikas vietnē norādīts vecāks, mazāks valstu skaits; oficiālais saraksts ir juridisko instrumentu reģistrs.',
    sourcesNote: 'Juridisko instrumentu reģistrs un principu pārskats.',
    sources: sources([
      [
        'Ekonomiskās sadarbības un attīstības organizācijas juridiskie instrumenti: Padomes ieteikums par mākslīgo intelektu (Recommendation of the Council on Artificial Intelligence, OECD/LEGAL/0449)',
        oecdLegal,
      ],
      [
        'Mākslīgā intelekta politikas observatorija: principu pārskats (OECD.AI Policy Observatory, AI Principles Overview)',
        oecdOverview,
      ],
      [
        'Wikimedia Commons: Mjuetas pils, Parīze, foto (Château de la Muette, Paris 19 March 2019 002)',
        oecdPhoto,
      ],
    ]),
  },
  'nist-ai-rmf': {
    title: 'Amerikas Savienoto Valstu mākslīgā intelekta risku pārvaldības ietvars',
    hook: 'Amerikas Savienoto Valstu Nacionālā standartu un tehnoloģiju institūta brīvprātīgas vadlīnijas, kas palīdz organizācijām apzināt, izmērīt un pārvaldīt mākslīgā intelekta sistēmu riskus. Izdotas 2023. gada janvārī, pašlaik tiek pārskatītas.',
    imageAlt: 'Ņūtona ābele institūta pilsētiņā Geitersbergā, Merilendas štatā, pavasara rītā.',
    caption: 'Ņūtona ābele institūta pilsētiņā Geitersbergā, Merilendas štatā, pavasara rītā.',
    figureCredit: 'Foto: Stoutons (Stoughton), Amerikas Savienoto Valstu Nacionālais standartu un tehnoloģiju institūts,',
    figureLicense:
      'publiskais domēns (Amerikas Savienoto Valstu federālās valdības darbs), ar Wikimedia Commons starpniecību.',
    figureLicenseUrl: nistCopyright,
    jurisdiction: 'Amerikas Savienotās Valstis',
    officialName: 'Mākslīgā intelekta risku pārvaldības ietvars, versija 1.0',
    citation: 'Versija 1.0, izdota 2023. gada 26. janvārī',
    yearStatus: 'Brīvprātīgs ietvars; tiek pārskatīts',
    what: 'Amerikas Savienoto Valstu Nacionālais standartu un tehnoloģiju institūts, federāla aģentūra Tirdzniecības departamenta sastāvā, izdeva šī ietvara versiju 1.0 2023. gada 26. janvārī pēc publiska informācijas pieprasījuma, vairākiem projektiem un atklātiem semināriem. Darbu uzdeva Kongress 2020. gada Nacionālās mākslīgā intelekta iniciatīvas likumā. Institūts ietvaru raksturo kā brīvprātīgu, tiesības ievērojošu, atvērtu jebkurai nozarei un piemērotu jebkuram mākslīgā intelekta lietojumam jebkura lieluma organizācijās.',
    effects:
      'Ietvars dod organizācijām, kas projektē, izstrādā, ievieš vai izmanto mākslīgā intelekta sistēmas, kopīgu valodu runai par riskiem. Uzticamu mākslīgo intelektu raksturo septiņas īpašības: derīgums un uzticamība; drošība; aizsargātība un noturība; pārskatatbildība un pārredzamība; izskaidrojamība un interpretējamība; privātuma aizsardzība; taisnīgums, pārvaldot kaitīgu aizspriedumainību. Institūts ietvaru papildina ar pavadmateriāliem, tostarp praktisku rokasgrāmatu, ceļvedi un salīdzinājumiem ar citiem standartiem, un 2023. gada 30. martā atvēra Uzticama un atbildīga mākslīgā intelekta resursu centru, lai palīdzētu organizācijām ietvaru izmantot praksē.',
    where: 'Ietvars veidots ap četrām funkcijām. „Pārvaldīt” veido risku pārvaldības kultūru un caurvij pārējās trīs. „Kartēt” apraksta kontekstu un apzina sistēmas riskus. „Mērīt” ar kvantitatīvām un kvalitatīvām metodēm analizē, novērtē un uzrauga šos riskus. „Rīkoties” novirza resursus kartētajiem un izmērītajiem riskiem un plāno reakciju uz incidentiem. 2024. gada 26. jūlijā institūts pievienoja profilu ģeneratīvajam mākslīgajam intelektam, bet 2026. gada 7. aprīlī publicēja koncepcijas piezīmi par uzticama mākslīgā intelekta profilu kritiskajai infrastruktūrai.',
    caveats:
      'Ietvara izmantošana ir brīvprātīga, un pats par sevi tas juridiskus pienākumus nerada. Institūts norāda, ka versija 1.0 tiek pārskatīta saskaņā ar Baltā nama mākslīgā intelekta rīcības plānu, tāpēc atsevišķas daļas var mainīties. Ietvars apraksta vēlamos rezultātus un metožu izvēli atstāj katrai organizācijai, tāpēc divas organizācijas to var piemērot ļoti atšķirīgi.',
    sourcesNote: 'Ietvara lapa, versija 1.0 un ģeneratīvā mākslīgā intelekta profils.',
    sources: sources([
      [
        'Amerikas Savienoto Valstu Nacionālais standartu un tehnoloģiju institūts: mākslīgā intelekta risku pārvaldības ietvars (AI Risk Management Framework)',
        nistHub,
      ],
      [
        'Amerikas Savienoto Valstu Nacionālais standartu un tehnoloģiju institūts: Mākslīgā intelekta risku pārvaldības ietvars, versija 1.0 (Artificial Intelligence Risk Management Framework, AI RMF 1.0, NIST AI 100-1)',
        nistPdf,
      ],
      [
        'Amerikas Savienoto Valstu Nacionālais standartu un tehnoloģiju institūts: ģeneratīvā mākslīgā intelekta profils (Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1)',
        nistGen,
      ],
      [
        'Wikimedia Commons: Ņūtona ābele Geitersbergā, foto (NIST Gaithersburg Newton Apple Tree)',
        nistPhoto,
      ],
    ]),
  },
  'uk-ai-regulation': {
    title: 'Apvienotās Karalistes pieeja mākslīgā intelekta regulējumam',
    hook: 'Apvienotās Karalistes valdība noteica piecus principus, ko esošās uzraudzības iestādes piemēro savās nozarēs, jauna vienota mākslīgā intelekta likuma pieņemšanas vietā. Valdības atbilde 2024. gada februārī saglabāja šo pieeju un piešķīra uzraudzības iestādēm finansējumu un termiņus.',
    imageAlt: 'Valdības ēkas Vaitholas apkaimē Londonā, skats no panorāmas rata „Londonas acs” 2014. gada augustā.',
    caption: 'Valdības ēkas Vaitholas apkaimē Londonā, skats no panorāmas rata „Londonas acs” 2014. gada augustā.',
    figureCredit: 'Foto: Dženina un Džims Ideni (Janine and Jim Eden), ar Wikimedia Commons starpniecību, licence',
    figureLicense: 'Creative Commons „Atsauce 2.0 Vispārējā”.',
    figureLicenseUrl: ccBy20,
    jurisdiction: 'Apvienotā Karaliste',
    officialName:
      '„Inovācijas atbalstoša pieeja mākslīgā intelekta regulējumam” (baltā grāmata, 2023. gada marts) un valdības atbilde (2024. gada februāris)',
    citation: 'Baltā grāmata, 2023. gada 29. marts; valdības atbilde, 2024. gada 6. februāris',
    yearStatus: 'Valdības politika, ko īsteno esošās uzraudzības iestādes',
    what: 'Baltajā grāmatā, kas publicēta 2023. gada 29. martā, Zinātnes, inovāciju un tehnoloģiju departaments un Mākslīgā intelekta birojs izklāstīja, kā Apvienotās Karalistes valdība ierosina regulēt mākslīgo intelektu. Pamatā ir pieci visām nozarēm kopīgi principi: drošība, aizsargātība un noturība; atbilstoša pārredzamība un izskaidrojamība; taisnīgums; pārskatatbildība un pārvaldība; iespēja apstrīdēt lēmumu un saņemt atlīdzību. Esošās uzraudzības iestādes, piemēram, Informācijas komisāra birojs un Konkurences un tirgu iestāde, šos principus interpretē un piemēro savu pilnvaru robežās. Sabiedriskā apspriešana par priekšlikumiem noslēdzās 2023. gada 21. jūnijā.',
    effects:
      'Baltā grāmata ieviesa principus bez likuma, pamatojot, ka jauni stingri un apgrūtinoši noteikumi varētu kavēt inovācijas, un norādīja, ka valdība vēlāk, kad parlamenta laiks to ļaus, plāno noteikt uzraudzības iestādēm likumisku pienākumu pienācīgi ņemt vērā principus. Valdības 2024. gada 6. februāra atbilde pagaidām saglabāja pieeju bez likuma, atstājot to pārskatīšanai. Tajā izziņoti 10 miljoni mārciņu uzraudzības iestāžu spēju stiprināšanai mākslīgā intelekta jomā, vairākām uzraudzības iestādēm lūgts līdz 2024. gada 30. aprīlim publicēt savu stratēģisko pieeju mākslīgajam intelektam, un valdībā izveidota centrālā struktūra risku uzraudzībai un uzraudzības iestāžu koordinācijai.',
    where: 'Noteikumi mākslīgā intelekta jomā rodas ar katras nozares uzraudzības iestādes vadlīnijām un izpildes kontroli, izmantojot jau esošās pilnvaras. Nelielam skaitam ļoti spējīgu vispārējas nozīmes modeļu izstrādātāju atbilde pamatoja mērķtiecīgas saistošas prasības nākotnē un norādīja, ka valdība pieņems likumu, kad būs pārliecināta, ka tas ir pareizais solis. Principi balstās uz Ekonomiskās sadarbības un attīstības organizācijas mākslīgā intelekta principiem, uz kuriem atsaucas baltā grāmata.',
    caveats:
      'Abi dokumenti ir valdības politikas dokumenti, un principiem pašiem par sevi nav juridiska spēka, un tie ir atkarīgi no katras uzraudzības iestādes pilnvarām, tāpēc tur, kur nevienai iestādei nav skaidru pilnvaru, var palikt nepilnības. Apvienotās Karalistes valdības portāls abus dokumentus atzīmē kā publicētus Riši Sunaka konservatīvās valdības laikā no 2022. līdz 2024. gadam; nākamās valdības var būt mainījušas kursu, tāpēc jāpārbauda aktuālās portāla lapas.',
    sourcesNote: 'Baltā grāmata, tās teksts lasīšanai tīmeklī un valdības 2024. gada februāra atbilde.',
    sources: sources([
      [
        'Apvienotās Karalistes valdības portāls, Zinātnes, inovāciju un tehnoloģiju departaments un Mākslīgā intelekta birojs: mākslīgā intelekta regulējums, inovācijas atbalstoša pieeja (AI regulation: a pro-innovation approach)',
        ukPaper,
      ],
      [
        'Apvienotās Karalistes valdības portāls: Inovācijas atbalstoša pieeja mākslīgā intelekta regulējumam (A pro-innovation approach to AI regulation)',
        ukPdf,
      ],
      [
        'Apvienotās Karalistes valdības portāls, Zinātnes, inovāciju un tehnoloģiju departaments: Inovācijas atbalstoša pieeja mākslīgā intelekta regulējumam, valdības atbilde (A pro-innovation approach to AI regulation: government response)',
        ukResponse,
      ],
      [
        'Wikimedia Commons: Vaitholla no „Londonas acs”, foto (Whitehall from London Eye 2014)',
        ukPhoto,
      ],
    ]),
  },
};
