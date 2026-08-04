export type WordleWord = {
  english: string;
  phonemes: string[];
};

export const wordleDifficultySettings = {
  easy: { label: "Easy", maxGuesses: 6 },
  medium: { label: "Medium", maxGuesses: 6 },
  hard: { label: "Hard", maxGuesses: 6 },
} as const;

export type WordleDifficulty = keyof typeof wordleDifficultySettings;

export const wordleWords: Record<WordleDifficulty, WordleWord> = {
  easy: { english: "SHIP", phonemes: ["ʃ", "ɪ", "p"] },
  medium: { english: "THIN", phonemes: ["θ", "ɪ", "n"] },
  hard: { english: "STRING", phonemes: ["s", "t", "r", "ɪ", "ŋ"] },
};