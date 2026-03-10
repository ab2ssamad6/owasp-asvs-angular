export interface AsvsItem {
  id: string;
  desc: string;
  level: 1 | 2 | 3;
}

export interface AsvsCategory {
  id: string;
  title: string;
  items: AsvsItem[];
}

export interface CategoryStats {
  total: number;
  done: number;
  pct: number;
}

export interface MissingItem extends AsvsItem {
  catId: string;
  catTitle: string;
}

export interface LevelConfig {
  label: string;
  color: string;
  bg: string;
  desc: string;
}

export const LEVEL_CONFIG: Record<number, LevelConfig> = {
  1: { label: 'L1', color: '#4ade80', bg: 'rgba(74,222,128,0.12)', desc: 'Opportunistic' },
  2: { label: 'L2', color: '#fb923c', bg: 'rgba(251,146,60,0.12)', desc: 'Standard' },
  3: { label: 'L3', color: '#f87171', bg: 'rgba(248,113,113,0.12)', desc: 'Advanced' },
};
