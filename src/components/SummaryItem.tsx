import { cn } from "../lib/utils";

export const COLORS: Record<string, { bg: string; text: string }> = {
  Reaction: { bg: "bg-red-50", text: "text-red-400" },
  Memory: { bg: "bg-yellow-50", text: "text-yellow-400" },
  Verbal: { bg: "bg-green-50", text: "text-green-300" },
  Visual: { bg: "bg-blue-50", text: "text-blue-800" },
};

interface SummaryItemProps {
  onScoreChange: (category: string, value: number) => void;
  icon: string;
  category: string;
  score: number;
}

const SummaryItem = ({
  icon,
  category,
  score,
  onScoreChange,
}: SummaryItemProps) => {
  return (
    <dl
      className={`flex justify-between px-4 py-5 rounded-2xl ${COLORS[category].bg}`}
    >
      <dt
        className={cn(
          `flex gap-4 text-preset-6 font-medium items-center ${COLORS[category].text} `,
        )}
      >
        <span className="w-8">
          <img src={icon} />
        </span>
        {category}
      </dt>
      <dd className="text-preset-6 font-bold text-navy-950/50 flex gap-2 items-center">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Number(e.target.value);
            return onScoreChange(category, value);
          }}
          name={category}
          id={category}
          min={0}
          max={100}
          value={score}
          type="number"
          className=" text-navy-950"
        />
        <span>/ 100</span>
      </dd>
    </dl>
  );
};

export default SummaryItem;
