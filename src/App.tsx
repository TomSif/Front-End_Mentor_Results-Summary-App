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
  return (
    <main className="min-h-screen grid place-items-center bg-white w-full">
      <form
        className="w-full  "
        onSubmit={(e) => {
          e.preventDefault();
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
