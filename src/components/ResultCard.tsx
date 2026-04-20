import { useState, useEffect } from "react";
import getFeedback from "../utils/getFeedback";

interface ResultCardProps {
  score: number;
}

const ResultCard = ({ score }: ResultCardProps) => {
  const [dispayScore, setDisplayScore] = useState(0);
  // Animation Display Score
  useEffect(() => {
    setDisplayScore(0);
    const id = setInterval(() => {
      setDisplayScore((prev) => {
        if (prev >= score) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 10);
    return () => clearInterval(id);
  }, [score]);
  // FeedBack for level and comment
  const feedback = getFeedback(score);
  return (
    <section className="bg-linear-to-b from-gradient-2-from to-gradient-2-to  w-full md:max-w-84.5 xl:max-w-92 py-8 md:py-11 mx-auto rounded-b-4xl md:rounded-4xl md:flex  ">
      <div className="flex flex-col items-center mx-auto max-w-65 md:max-w-50 gap-6 md:gap-8 ">
        <h1 className="text-preset-5 font-semibold text-navy-200 text-center md:text-preset-4">
          Your Result
        </h1>
        <div className="flex flex-col font-bold items-center justify-center gap-2 rounded-full w-35 h-35 md:w-50 md:h-50 bg-linear-to-b from-gradient-1-from to-gradient-1-to text-preset-2 md:text-preset-1 text-white">
          {dispayScore}
          <span className="text-preset-6 font-bold text-navy-200">of 100</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2 md:gap-4">
          <h2 className="text-preset-4 md:text-preset-3 font-bold text-white ">
            {feedback.level}
          </h2>
          <p className="text-preset-6 md:text-preset-5 font-normal text-navy-200">
            {feedback.message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;
