export type Party = 'Democrat' | 'Republican' | 'Independent';
export type AdvisorCategory = 'Economic' | 'Security' | 'Domestic' | 'VP';
export type Difficulty = 'Easy' | 'Normal' | 'Hard' | 'Impossible';

export type FormerCareer =
  | 'Governor'
  | 'Senator'
  | 'Military General'
  | 'Business Executive'
  | 'Academic'
  | 'Attorney General'
  | 'Mayor'
  | 'None';

export const POLITICAL_IDEALS = [
  'Fiscal Conservative', 'Keynesian', 'Progressive', 'Hawkish', 'Dove',
  'Environmentalist', 'Libertarian', 'Populist', 'Bipartisan', 'Law & Order',
  'Technocrat', 'Social Democrat',
] as const;
export type PoliticalIdeal = typeof POLITICAL_IDEALS[number];

export interface PresidentBackground {
  birthplace: string;
  formerCareer: FormerCareer;
  politicalIdeals: PoliticalIdeal[];
}

export interface GameStats {
  approval: number;
  economy: number;
  military: number;
  health: number;
  environment: number;
  debt: number;
}

export interface Choice {
  id: string;
  text: string;
  effects: Partial<GameStats>;
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  category: 'Economic' | 'International' | 'Domestic' | 'Political' | 'Environmental';
  choices: Choice[];
  partyOnly?: Party;
}

export interface Advisor {
  id: string;
  name: string;
  title: string;
  category: AdvisorCategory;
  description: string;
  philosophy: string;
  passiveEffect: Partial<GameStats>;
  capitalBonus?: number;
}

export interface ExecutiveOrder {
  id: string;
  title: string;
  description: string;
  cost: number;
  effect: Partial<GameStats>;
}

export interface CustomExecutiveOrder extends ExecutiveOrder {
  isCustom: true;
}

export interface Policy {
  id: string;
  title: string;
  description: string;
  effects: Partial<GameStats>;
  partyApprovalModifier?: Partial<Record<Party, number>>;
}

export interface CustomPolicy {
  name: string;
  tagline: string;
  allocations: {
    economy: number;
    military: number;
    health: number;
    environment: number;
    approval: number;
  };
  usesRemaining: number;
}

export interface StatDelta {
  approval: number;
  economy: number;
  military: number;
  health: number;
  environment: number;
  debt: number;
}

export interface HistoricalPresident {
  id: string;
  name: string;
  party: Party;
  years: string;
  era: string;
  bio: string;
  vpName: string;
  challenge: string;
  startingStats: GameStats;
  advisors: Advisor[];
}

export interface GameState {
  playerName: string;
  party: Party | null;
  difficulty: Difficulty;
  background: PresidentBackground | null;
  isHistorical: boolean;
  historicalEra: string;
  advisors: Advisor[];
  customPolicy: CustomPolicy | null;
  customOrders: CustomExecutiveOrder[];
  politicalCapital: number;
  stats: GameStats;
  lastDelta: StatDelta | null;
  turn: number;
  maxTurns: number;
  currentEvent: GameEvent | null;
  history: string[];
}