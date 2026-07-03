import { getLifeEventIcon } from "@/lib/utils/lifeEventIcon";

type Props = {
  cx?: number;
  cy?: number;
  payload?: any;
};

export default function EventMarker({
  cx,
  cy,
  payload,
}: Props) {
  if (cx == null || cy == null || !payload) {
    return null;
  }

  return (
    <text
      x={cx}
      y={cy - 12}
      textAnchor="middle"
      fontSize={20}
    >
      {getLifeEventIcon(payload.title)}
    </text>
  );
}