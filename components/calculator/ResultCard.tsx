import { ReactNode } from "react";

type ResultCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
};

export default function ResultCard({
  title,
  value,
  icon,
}: ResultCardProps) {
  return (
    <div
  className={`rounded-xl p-5 shadow transition ${
    value.startsWith("-")
      ? "bg-red-50 border border-red-200"
      : "bg-green-50 border border-green-200"
  }`}
>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
          {icon}
        </div>

        <div>
          <p
  className={`mt-2 text-3xl font-bold ${
    value.startsWith("-")
      ? "text-red-600"
      : "text-green-600"
  }`}
>
  {value}
</p>
        </div>
      </div>
    </div>
  );
}