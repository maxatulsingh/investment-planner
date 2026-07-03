export function getLifeEventIcon(title: string) {
  const text = title.toLowerCase();

  if (text.includes("education")) return "🎓";
  if (text.includes("house")) return "🏠";
  if (text.includes("home")) return "🏠";
  if (text.includes("wedding")) return "💍";
  if (text.includes("marriage")) return "💍";
  if (text.includes("car")) return "🚗";
  if (text.includes("vacation")) return "✈️";
  if (text.includes("travel")) return "✈️";
  if (text.includes("bonus")) return "💰";
  if (text.includes("retirement")) return "🌴";

  return "📝";
}