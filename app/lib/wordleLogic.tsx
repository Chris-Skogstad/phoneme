export type TileState = "correct" | "wrong-position" | "absent";

export type GuessResult = {
  token: string;
  state: TileState;
};

export function evaluateGuess(guess: string[], target: string[]): GuessResult[] {
  const result: GuessResult[] = guess.map((token) => ({
    token,
    state: "absent" as TileState,
  }));
  const remaining = [...target];

  guess.forEach((token, i) => {
    if (token === target[i]) {
      result[i].state = "correct";
      remaining[i] = "__used__";
    }
  });

  guess.forEach((token, i) => {
    if (result[i].state === "correct") return;
    const idx = remaining.indexOf(token);
    if (idx !== -1) {
      result[i].state = "wrong-position";
      remaining[idx] = "__used__";
    }
  });

  return result;
}