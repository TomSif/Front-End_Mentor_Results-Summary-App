import getFeedback from "../utils/getFeedback";

interface ResultCardProps {
  score: number;
}

const ResultCard = ({ score }: ResultCardProps) => {
  const feedback = getFeedback(score);
  return (
    <section className="bg-linear-to-b from-gradient-2-from to-gradient-2-to  w-full md:max-w-84.5 py-8 mx-auto rounded-b-4xl">
      <div className="flex flex-col items-center mx-auto max-w-65 gap-6 ">
        <h1 className="text-preset-5 font-bold text-navy-200 text-center">
          Your result
        </h1>
        <div className="flex flex-col font-bold items-center justify-center gap-2 rounded-full w-35 h-35 bg-linear-to-b from-gradient-1-from to-gradient-1-to text-preset-2 text-white">
          {Math.floor(score)}
          <span className="text-preset-6 font-bold text-navy-200">of 100</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-preset-4 font-bold text-white ">
            {feedback.level}
          </h2>
          <p className="text-preset-6 font-medium text-navy-200">
            {feedback.message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;
