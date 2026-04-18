export interface Result {
  category: string;
  score: number;
  icon: string;
}

export type ResultLevel =
  | "bad" // 00-24
  | "poor" // 25-49
  | "fair" // 50-74
  | "great"; // 75-100

export interface Feedback {
  min: number;
  max: number;
  level: ResultLevel;
  message: string;
}
