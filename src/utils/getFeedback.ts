import type { Feedback, FeedbackResult } from "../types/types";

export const FEEDBACK_DATA: Feedback[] = [
  {
    min: 0,
    max: 24,
    level: "Bad",
    message:
      "You need a lot more practice. Keep studying and try again to improve your score.",
  },
  {
    min: 25,
    max: 49,
    level: "Poor",
    message:
      "You're performing below average level. A bit more practice will help you improve.",
  },
  {
    min: 50,
    max: 74,
    level: "Fair",
    message:
      "Fair performance! You have a decent understanding of the material.",
  },
  {
    min: 75,
    max: 100,
    level: "Great",
    message:
      "You scored higher than 65% of the people who have taken these tests.",
  },
];

export default function getFeedback(score: number): FeedbackResult {
  const feedbackItem = FEEDBACK_DATA.find(
    (item) => score >= item.min && score <= item.max,
  );

  if (!feedbackItem) {
    throw new Error("Score is out Range");
  }

  return {
    level: feedbackItem.level,
    message: feedbackItem.message,
  };
}
