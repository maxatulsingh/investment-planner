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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
          {icon}
        </div>

        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className="mt-1 text-2xl font-bold text-slate-900">
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
}