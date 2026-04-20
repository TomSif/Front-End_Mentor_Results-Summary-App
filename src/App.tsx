import { useState } from "react";
import ResultCard from "./components/ResultCard";
import SummaryItem from "./components/SummaryItem";
import data from "../src/data/data.json";

//function reduce transform data table in object
const scoresByCategories = data.reduce<Record<string, number>>((acc, item) => {
  return { ...acc, [item.category]: item.score };
}, {});
function App() {
  //useState to stock scores by categories
  const [scores, setScores] = useState(scoresByCategories);
  // store the score result
  const [scoreResult, setScoreResult] = useState(() => {
    // calcul the result by default
    const startValues = Object.values(scoresByCategories);
    const startResult =
      startValues.reduce((acc, val) => acc + val, 0) / startValues.length;
    return startResult;
  });

  return (
    <main className="flex flex-col justify-start min-h-screen bg-white w-full gap-6 md:max-w-171 xl:max-w-184 md:flex-row md:rounded-4xl md:gap-0 md:min-h-128 shadow-[0_1.875rem_3.75rem_rgba(61,108,236,0.15)]">
      <ResultCard score={scoreResult} />
      <form
        className="w-full  px-8 md:px-10 md:flex flex-col md:py-11"
        onSubmit={(e) => {
          e.preventDefault();
          // calcul the Result
          const values = Object.values(scores);
          const result =
            values.reduce((acc, val) => acc + val, 0) / values.length;
          // set Result Score
          setScoreResult(result);
        }}
      >
        <fieldset className="flex flex-col ">
          <legend className="text-preset-5 md:text-preset-4 font-bold text-blue-950 mb-6 md:mb-8">
            Summary
          </legend>
          <ul className="w-full gap-4 flex flex-col">
            {data.map((item, index) => (
              <li key={index} className="w-full">
                <SummaryItem
                  onScoreChange={(category, value) =>
                    setScores((prev) => ({ ...prev, [category]: value }))
                  }
                  icon={item.icon}
                  category={item.category}
                  score={scores[item.category]}
                />
              </li>
            ))}
          </ul>
        </fieldset>

        <button
          className="w-full text-preset-5 font-bold text-white text-center rounded-full bg-navy-950 py-4 mt-6 md:mt-8  "
          type="submit"
        >
          <span className="z-50">Continue</span>
        </button>
      </form>
    </main>
  );
}

export default App;
