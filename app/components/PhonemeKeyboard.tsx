"use client";

import { phonemeKeyboard } from "../lib/phonemeKeyboard";
import { phonemeLegend } from "../lib/phonemeLegend";
import PhonemeTile from "./PhonemeTile";
import Button from "./Button";

type PhonemeKeyboardProps = {
  onKeyPress: (token: string) => void;
  onBackspace: () => void;
  onSubmit: () => void;
  disabled?: boolean;
};

export default function PhonemeKeyboard({
  onKeyPress,
  onBackspace,
  onSubmit,
  disabled,
}: PhonemeKeyboardProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap gap-2 justify-center max-w-lg">
        {phonemeKeyboard.map((token) => (
          <PhonemeTile
            key={token}
            token={token}
            size="sm"
            hint={phonemeLegend[token]}
            onClick={() => onKeyPress(token)}
            disabled={disabled}
          />
        ))}
      </div>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onBackspace} disabled={disabled}>
          Backspace
        </Button>
        <Button variant="primary" onClick={onSubmit} disabled={disabled}>
          Enter
        </Button>
      </div>
    </div>
  );
}