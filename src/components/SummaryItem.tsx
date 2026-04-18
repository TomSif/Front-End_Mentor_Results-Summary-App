import { cn } from "../lib/utils";

export const COLORS: Record<string, { bg: string; text: string }> = {
  Reaction: { bg: "bg-red-50", text: "text-red-400" },
  Memory: { bg: "bg-yellow-50", text: "text-yellow-400" },
  Verbal: { bg: "bg-green-50", text: "text-green-300" },
  Visual: { bg: "bg-blue-50", text: "text-blue-800" },
};

interface SummaryItemProps {
  icon: string;
  category: string;
  score: number;
}

const SummaryItem = ({ icon, category, score }: SummaryItemProps) => {
  return (
    <div
      className={`flex justify-between w-full px-4 py-5 ${COLORS[category].bg}`}
    >
      <div
        className={cn(
          `flex gap-4 text-preset-6 font-medium items-center ${COLORS[category].text} `,
        )}
      >
        <span className="w-8">
          <img src={icon} />
        </span>
        {category}
      </div>
      <div className="text-preset-6 font-bold text-navy-950/50 w-16 flex">
        <input
          name={category}
          id={category}
          min={0}
          max={100}
          defaultValue={score}
          type="number"
          className=" text-navy-950 pr-2"
        />
        <span>/100</span>
      </div>
    </div>
  );
};

export default SummaryItem;
