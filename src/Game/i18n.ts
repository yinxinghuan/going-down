// Going Down i18n — zh / en. Voice + decorative titles English per series rule.
type Locale = 'zh' | 'en';
const STORAGE_KEY = 'gd_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    'hint.firstTap': 'the doors have closed —',
    'btn.onceMore': 'descend again',
    'hotspot.panel': 'the button panel',
    'hotspot.mirror': 'the mirrored wall',
    'hotspot.stranger': 'the passenger',
    'hotspot.doors': 'the doors',
    'hotspot.phone': 'the emergency phone',
    'hotspot.showtime': 'the car settles',
    'sub.panel': 'The numbers keep falling. There was never a floor this low.',
    'sub.mirror': 'In the mirror there are more of us than got on. All of them facing me.',
    'sub.stranger': 'He was always behind me. I only just turned around.',
    'sub.doors': 'Every floor opens on the same dim hall, breathing, waiting.',
    'sub.phone': 'I lift the receiver. The voice is mine — calling up from further down.',
    'sub.climax': 'The doors open on the lowest floor. You were always coming here.',
  },
  zh: {
    'hint.firstTap': '门已经合上了 —',
    'btn.onceMore': '再下一程',
    'hotspot.panel': '按钮面板',
    'hotspot.mirror': '镜面墙',
    'hotspot.stranger': '同乘的人',
    'hotspot.doors': '电梯门',
    'hotspot.phone': '紧急电话',
    'hotspot.showtime': '电梯停稳',
    'sub.panel': '数字一直往下跳。从没有过这么低的楼层。',
    'sub.mirror': '镜子里的我们, 比走进来的还多。每一个都朝着我。',
    'sub.stranger': '他一直站在我身后。我才刚刚回过头。',
    'sub.doors': '每一层打开, 都是同一条昏暗的走廊, 呼吸着, 等着。',
    'sub.phone': '我拿起听筒。那声音是我自己的 — 从更下面打上来。',
    'sub.climax': '门, 在最底层打开。你一直都在往这里来。',
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE]?.[key] ?? STRINGS.en[key] ?? key;
}
export function getLocale(): Locale { return LOCALE; }
