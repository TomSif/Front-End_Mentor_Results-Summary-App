export interface Result {
  category: string;
  score: number;
  icon: string;
}

export type ResultLevel =
  | "Bad" // 00-24
  | "Poor" // 25-49
  | "Fair" // 50-74
  | "Great"; // 75-100

export interface Feedback {
  min: number;
  max: number;
  level: ResultLevel;
  message: string;
}
export interface FeedbackResult {
  level: ResultLevel;
  message: string;
}
