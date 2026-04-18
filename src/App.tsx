import SummaryItem from "./components/SummaryItem";
import data from "../src/data/data.json";

function App() {
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
                icon={item.icon}
                category={item.category}
                score={item.score}
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
