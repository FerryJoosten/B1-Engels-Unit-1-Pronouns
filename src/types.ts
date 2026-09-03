export type PracticeMode = 'personal' | 'possessive' | 'mixed';

export type InputMode = 'type' | 'choice';

export type SessionType = 'endless' | 'sprint10' | 'sprint25' | 'sprint50' | 'mistakes';

export type PronounSubtype = 
  | 'personal_subject' 
  | 'personal_object' 
  | 'possessive_adjective' 
  | 'possessive_pronoun';

export interface SentenceItem {
  id: string;
  category: 'personal' | 'possessive';
  subtype: PronounSubtype;
  beforeGap: string;
  afterGap: string;
  correctAnswer: string;
  dutchHint: string;
  explanation: string;
  options: string[];
}

export interface UserStats {
  totalAnswered: number;
  correctAnswered: number;
  streak: number;
  bestStreak: number;
  history: {
    sentenceId: string;
    userAnswer: string;
    isCorrect: boolean;
    timestamp: number;
  }[];
  mistakeIds: string[];
}
