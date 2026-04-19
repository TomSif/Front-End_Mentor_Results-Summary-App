import { useState } from "react";

import SummaryItem from "./components/SummaryItem";
import data from "../src/data/data.json";

function App() {
  //function reduce transform data table in object
  const scoresByCategories = data.reduce<Record<string, number>>(
    (acc, item) => {
      return { ...acc, [item.category]: item.score };
    },
    {},
  );
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
    <main className="min-h-screen grid place-items-center bg-white w-full">
      <form
        className="w-full  "
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
        <ul className="w-full">
          {data.map((item, index) => (
            <li key={index} className="w-full">
              <SummaryItem
                onScoreChange={(category, value) =>
                  setScores({ ...scores, [category]: value })
                }
                icon={item.icon}
                category={item.category}
                score={scores[item.category]}
              />
            </li>
          ))}
        </ul>
        <button type="submit">Continue</button>
      </form>
    </main>
  );
}

export default App;
