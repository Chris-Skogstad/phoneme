"use client";

import { useEffect, useState } from "react";
import {
  generateGrid,
  WordSearchGrid,
  DIFFICULTY_SETTINGS,
  Difficulty,
} from "../lib/generateGrid";
import { generateWordSearchHTML } from "../lib/generateWordSearchHTML";
import { wordSearchWords } from "../lib/wordSearchWords";
import { phonemeLegend } from "../lib/phonemeLegend";
import Button from "../components/Button";

export default function WordSearchPage() {
  const [gridData, setGridData] = useState<WordSearchGrid | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  useEffect(() => {
    setGridData(generateGrid(wordSearchWords, DIFFICULTY_SETTINGS[difficulty].size));
  }, [difficulty]);

  const handleRefresh = () => {
    setGridData(generateGrid(wordSearchWords, DIFFICULTY_SETTINGS[difficulty].size));
    setShowAnswers(false);
  };

  const handleGenerate = () => {
    if (!gridData) return;
    const html = generateWordSearchHTML(gridData, wordSearchWords);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "phoneme-word-search.html";
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!gridData) {
    return (
      <main className="flex flex-col items-center py-10 px-4">
        <p className="text-gray-500">Generating word search...</p>
      </main>
    );
  }

  const answerCellKeys = new Set(
    showAnswers
      ? gridData.placements.flatMap((p) => p.cells.map((c) => `${c.row}-${c.col}`))
      : []
  );

  return (
    <main className="flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-2">Word Search Builder</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Preview the phoneme word search below, adjust difficulty, then
        download it as a standalone activity for students.
      </p>

      {/* Difficulty settings */}
      <div className="flex gap-2 mb-6">
        {(Object.keys(DIFFICULTY_SETTINGS) as Difficulty[]).map((level) => (
          <button
            key={level}
            onClick={() => setDifficulty(level)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              difficulty === level
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {DIFFICULTY_SETTINGS[level].label}
          </button>
        ))}
      </div>

      {/* Word list — phoneme word is the clear primary display, hover reveals English */}
      <div className="flex gap-4 flex-wrap justify-center mb-6">
        {wordSearchWords.map((w) => (
          <div
            key={w.english}
            className="group relative px-3 py-1 bg-gray-100 rounded-md cursor-default font-medium"
          >
            {w.phonemes.join(" ")}
            <span className="absolute left-1/2 -translate-x-1/2 -top-8 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
              {w.english}
            </span>
          </div>
        ))}
      </div>

      {/* Grid — each cell hoverable with its letter-equivalence legend */}
      <div
        className="grid gap-1 mb-6"
        style={{
          gridTemplateColumns: `repeat(${gridData.grid.length}, 36px)`,
        }}
      >
        {gridData.grid.map((row, r) =>
          row.map((token, c) => {
            const isAnswer = answerCellKeys.has(`${r}-${c}`);
            return (
              <div
                key={`${r}-${c}`}
                className={`group relative w-9 h-9 flex items-center justify-center text-sm font-bold rounded transition-colors cursor-default ${
                  isAnswer ? "bg-indigo-500 text-white" : "bg-gray-800 text-white"
                }`}
              >
                {token}
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  {phonemeLegend[token] ?? token}
                </span>
              </div>
            );
          })
        )}
      </div>

     <div className="flex gap-3 flex-wrap justify-center">
  <Button variant="secondary" onClick={handleRefresh}>
    Refresh
  </Button>
  <Button variant="warning" onClick={() => setShowAnswers((prev) => !prev)}>
    {showAnswers ? "Hide Answers" : "Show Answers"}
  </Button>
  <Button variant="primary" onClick={handleGenerate}>
    Generate & Download
  </Button>
</div>
    </main>
  );
}