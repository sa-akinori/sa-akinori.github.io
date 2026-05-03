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
  { ja: '情報通信', en: 'Information & Communication' },
  { ja: '生命・健康・医療情報学', en: 'Life / Health / Medical Informatics' },
  { ja: 'ケモインフォマティクス', en: 'Cheminformatics' },
];

export const researchKeywords: BilingualText[] = [
  { ja: '深層学習', en: 'Deep Learning' },
  { ja: '機械学習', en: 'Machine Learning' },
  { ja: 'ケモインフォマティクス', en: 'Cheminformatics' },
];

export const peerReviewedPapers: Paper[] = [
  {
    authors: 'Ue, T., Sato, A., & Miyao, T.',
    title: 'Analog Accessibility Score (AAscore) for Rational Compound Selection',
    venue: 'Journal of Chemical Information and Modeling',
    year: 2024,
  },
  {
    authors: 'Sato, A., Asahara, R., & Miyao, T.',
    title: 'Chemical Graph-Based Transformer Models for Yield Prediction of High-Throughput Cross-Coupling Reaction Datasets',
    year: 2024,
    firstAuthor: true,
  },
  {
    authors: 'Matsunaga, K., et al.',
    title: 'Interface State Density Prediction between an Insulator and a Semiconductor by Gaussian Process Regression Models for a Modified Process',
    venue: 'ACS Omega 8(30): 27458–27466',
    year: 2023,
  },
  {
    authors: 'Maeda, I., Sato, A., Tamura, S., & Miyao, T.',
    title: 'Ligand-based approaches to activity prediction for the early stage of structure–activity–relationship progression',
    venue: 'Journal of Computer-Aided Molecular Design 36(3): 237–252',
    year: 2022,
  },
  {
    authors: 'Sato, A., Miyao, T., & Funatsu, K.',
    title: 'Prediction of Reaction Yield for Buchwald–Hartwig Cross-coupling Reactions Using Deep Learning',
    venue: 'Molecular Informatics 41(2)',
    year: 2021,
    firstAuthor: true,
  },
  {
    authors: 'Sato, A., Miyao, T., Jasial, S., & Funatsu, K.',
    title: 'Comparing predictive ability of QSAR/QSPR models using 2D and 3D molecular representations',
    venue: 'Journal of Computer-Aided Molecular Design 35(2): 179–193',
    year: 2021,
    firstAuthor: true,
  },
];

export const miscPapers: Paper[] = [
  {
    authors: '佐藤 彰准, 宮尾 知幸, 船津 公人',
    title: '二次元分子表現と三次元分子表現を用いたQSAR/QSPRモデルの予測能力の比較',
    venue: '第43回ケモインフォマティクス討論会予稿集',
    year: 2020,
    firstAuthor: true,
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
