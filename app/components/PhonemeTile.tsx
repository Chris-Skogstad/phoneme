"use client";

import Tooltip from "./Tooltip";

type TileState = "default" | "answer" | "correct" | "wrong-position" | "absent";

type PhonemeTileProps = {
  token: string;
  state?: TileState;
  hint?: string;
  size?: "sm" | "md" | "lg";
};

const stateStyles: Record<TileState, string> = {
  default: "bg-gray-800 text-white",
  answer: "bg-indigo-500 text-white",
  correct: "bg-green-600 text-white",
  "wrong-position": "bg-amber-500 text-white",
  absent: "bg-gray-600 text-white",
};

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-9 h-9 text-sm",
  lg: "w-12 h-12 text-lg",
};

export default function PhonemeTile({
  token,
  state = "default",
  hint,
  size = "md",
}: PhonemeTileProps) {
  const tile = (
    <div
      className={`flex items-center justify-center font-bold rounded transition-colors ${stateStyles[state]} ${sizeStyles[size]}`}
    >
      {token}
    </div>
  );

  if (!hint) return tile;

  return <Tooltip label={hint}>{tile}</Tooltip>;
}