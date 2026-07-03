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
  const isNegative = value.startsWith("-");

  return (
    <div
      className={`rounded-xl border p-5 shadow transition ${
        isNegative
          ? "border-red-200 bg-red-50"
          : "border-green-200 bg-green-50"
      }`}
    >
      <div className="flex items-center gap-4">

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${
            isNegative
              ? "bg-red-100"
              : "bg-green-100"
          }`}
        >
          {icon}
        </div>

        <div className="flex-1">

          <p className="text-sm font-medium text-slate-600">
            {title}
          </p>

          <p
            className={`mt-1 text-3xl font-bold ${
              isNegative
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