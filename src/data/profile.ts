import type { Lang } from '../i18n';

export interface BilingualText {
  ja: string;
  en: string;
}

export interface TimelineEntry {
  period: string;
  text: BilingualText;
}

export interface Paper {
  authors: string;
  title: string;
  venue?: string;
  year: number;
  firstAuthor?: boolean;
}

export interface Presentation {
  date: string; // YYYY-MM
  authors: string;
  title: string;
  venue: string;
  location?: string;
}

export interface BilingualEntry {
  date?: string; // YYYY-MM (optional)
  text: BilingualText;
}

export interface NewsItem {
  date: string;
  text: BilingualText;
  url?: string;
}

export const position: BilingualText = {
  ja: '特任助教',
  en: 'Specially Appointed Assistant Professor',
};

export const education: TimelineEntry[] = [
  {
    period: '2021–2024',
    text: {
      ja: '奈良先端科学技術大学院大学 先端科学技術研究科 先端科学技術専攻 博士後期課程',
      en: 'Ph.D., Graduate School of Science and Technology, Nara Institute of Science and Technology (NAIST)',
    },
  },
  {
    period: '2019–2021',
    text: {
      ja: '奈良先端科学技術大学院大学 先端科学技術研究科 先端科学技術専攻 博士前期課程',
      en: 'M.S., Graduate School of Science and Technology, Nara Institute of Science and Technology (NAIST)',
    },
  },
  {
    period: '2014–2019',
    text: {
      ja: '九州工業大学 工学部 応用化学科',
      en: 'B.Eng., Department of Applied Chemistry, Kyushu Institute of Technology',
    },
  },
];

export const career: TimelineEntry[] = [
  {
    period: '2024.05–',
    text: {
      ja: '奈良先端科学技術大学院大学 ARWIT推進センター 特任助教（データ駆動型サイエンス創造センター マテリアルズ・インフォマティクス部門 兼務）',
      en: 'Specially Appointed Assistant Professor, ARWIT Promotion Center, NAIST (cross-appointed with Materials Informatics Division, Data-driven Science Creative Center)',
    },
  },
];

export const researchFields: BilingualText[] = [
  { ja: 'ケモインフォマティクス', en: 'Cheminformatics' },
];

export const researchKeywords: BilingualText[] = [
  { ja: '深層学習', en: 'Deep Learning' },
  { ja: '機械学習', en: 'Machine Learning' },
  { ja: 'ケモインフォマティクス', en: 'Cheminformatics' },
];

export const peerReviewedPapers: Paper[] = [
  {
    authors: 'Ue, T., Sato, A., Miyao, T.',
    title: 'Analog Accessibility Score (AAscore) for Rational Compound Selection',
    venue: 'J. Chem. Inf. Model., 64(24), 9350–9360',
    year: 2024,
  },
  {
    authors: 'Sato, A., Asahara, R., Miyao, T.',
    title: 'Chemical Graph-Based Transformer Models for Yield Prediction of High-Throughput Cross-Coupling Reaction Datasets',
    venue: 'ACS Omega, 9(39), 40907–40919',
    year: 2024,
    firstAuthor: true,
  },
  {
    authors: 'Matsunaga, K., Harada, T., Harada, S., Sato, A., et al.',
    title: 'Interface State Density Prediction between an Insulator and a Semiconductor by Gaussian Process Regression Models for a Modified Process',
    venue: 'ACS Omega, 8(30), 27458–27466',
    year: 2023,
  },
  {
    authors: 'Maeda, I., Sato, A., Tamura, S., Miyao, T.',
    title: 'Ligand-based Approaches to Activity Prediction for the Early Stage of Structure-Activity-Relationship Progression',
    venue: 'J. Comput. Aided Mol. Des., 36, 237–252',
    year: 2022,
  },
  {
    authors: 'Sato, A., Miyao, T., Funatsu, K.',
    title: 'Prediction of Reaction Yield for Buchwald-Hartwig Cross-coupling Reactions Using Deep Learning',
    venue: 'Mol. Inf., 41(2)',
    year: 2022,
    firstAuthor: true,
  },
  {
    authors: 'Sato, A., Miyao, T., Jasial, S., et al.',
    title: 'Comparing Predictive Ability of QSAR/QSPR Models using 2D and 3D Molecular Representations',
    venue: 'J. Comput. Aided Mol. Des., 35, 179–193',
    year: 2021,
    firstAuthor: true,
  },
];

export const internationalPresentations: Presentation[] = [
  {
    date: '2023-12',
    authors: 'Akinori Sato, Tomoyuki Miyao',
    title: 'Prediction of Reaction Yield for High Throughput Experimental Data Sets by Deep Learning',
    venue: 'The 2nd International Symposium on Digitalization-driven Transformative Organic Synthesis (poster)',
    location: 'Hyogo, Japan',
  },
  {
    date: '2023-11',
    authors: 'Akinori Sato, Tomoyuki Miyao',
    title: 'Prediction of Reaction Yield for High Throughput Experimental Data Sets by Deep Learning',
    venue: '8th Autumn School of Chemoinformatics (poster)',
    location: 'Nara, Japan',
  },
];

export const domesticPresentations: Presentation[] = [
  {
    date: '2023-09',
    authors: '松永幹太, 上沼睦典, 佐藤彰准, 浦岡行治, 宮尾知幸',
    title: 'プロセス最適化のためのガウス過程回帰手法：絶縁体と半導体間の界面準位密度予測の事例',
    venue: '化学工学会第54回秋季大会（口頭）',
    location: '福岡',
  },
  {
    date: '2022-11',
    authors: '佐藤彰准, 宮尾知幸',
    title: '深層学習を用いた化学反応の収率予測モデルの構築',
    venue: '第45回ケモインフォマティクス討論会（口頭）',
    location: '福岡',
  },
  {
    date: '2022-03',
    authors: '前田樹, 佐藤彰准, 田村俊介, 宮尾知幸',
    title: 'インシリコスクリーニングのための不均衡データにより構築した機械学習手法の比較',
    venue: '日本薬学会第142年会（口頭）',
  },
  {
    date: '2021-12',
    authors: '佐藤彰准, 宮尾知幸',
    title: '深層学習を用いた化学反応の収率予測モデルの構築',
    venue: 'ケモインフォマティクス討論会（口頭）',
    location: 'オンライン',
  },
  {
    date: '2021-06',
    authors: '前田樹, 田村峻佑, 佐藤彰准, 宮尾知幸',
    title: '仮想スクリーニングにおける多数の不活性化合物の効率的利用',
    venue: '日本コンピュータ化学会（口頭）',
    location: 'オンライン',
  },
  {
    date: '2020-12',
    authors: '佐藤彰准, 宮尾知幸, 船津公人',
    title: '二次元分子表現と三次元分子表現を用いたQSAR/QSPRモデルの予測能力の比較',
    venue: 'ケモインフォマティクス討論会（口頭）',
    location: 'オンライン',
  },
  {
    date: '2020-11',
    authors: '佐藤彰准, 宮尾知幸, 船津公人',
    title: '深層学習を用いたBuchwald-Hartwigクロスカップリング反応の収率予測',
    venue: '日本コンピュータ化学会（口頭）',
    location: 'オンライン',
  },
];

export const patents: BilingualEntry[] = [];

export const grants: BilingualEntry[] = [
  {
    date: '2023',
    text: {
      ja: '日本学術振興会 特別研究員奨励費「深層学習による化学反応の収率予測モデルの構築とその応用」（代表、180万円）',
      en: 'JSPS Research Fellowship for Young Scientists (DC) — "Development and application of deep learning-based reaction yield prediction models" (PI, JPY 1.8M)',
    },
  },
];

export const outreach: BilingualEntry[] = [
  {
    date: '2025-08',
    text: {
      ja: '佐藤彰准「化学反応の収率予測と特許からのデータ抽出」, DSC サマーセミナー',
      en: 'Akinori Sato, "Reaction yield prediction and data extraction from patents", DSC Summer Seminar',
    },
  },
  {
    date: '2024-08',
    text: {
      ja: '佐藤彰准「有機合成における AI 技術の活用」, DSC サマーセミナー',
      en: 'Akinori Sato, "Applications of AI in organic synthesis", DSC Summer Seminar',
    },
  },
];

export const researchmapUrl = 'https://researchmap.jp/sato_akinori';
export const labUrl = 'https://sites.google.com/view/naist-chemoinformatics/';

export const news: NewsItem[] = [
  {
    date: '2026-05-01',
    text: {
      ja: 'ARWIT推進センターに特任助教として着任しました。',
      en: 'Joined ARWIT Promotion Center as Specially Appointed Assistant Professor.',
    },
  },
];

export function pickLang<T extends BilingualText>(item: T, lang: Lang): string {
  return item[lang];
}
