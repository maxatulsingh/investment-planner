type ResultCardProps = {
  title: string;
  value: string;
};

export default function ResultCard({
  title,
  value,
}: ResultCardProps) {
  return (
    <div className="rounded-xl bg-slate-100 p-5 shadow-sm">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </h3>
    </div>
  );
}