export type PhonemeWord = {
  english: string;
  phonemes: string[]; // one phoneme symbol per grid cell
};

export const wordSearchWords: PhonemeWord[] = [
  { english: "THIN", phonemes: ["θ", "ɪ", "n"] },
  { english: "SHIP", phonemes: ["ʃ", "ɪ", "p"] },
  { english: "CHIN", phonemes: ["tʃ", "ɪ", "n"] },
  { english: "RING", phonemes: ["r", "ɪ", "ŋ"] },
  { english: "FISH", phonemes: ["f", "ɪ", "ʃ"] },
];