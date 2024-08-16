export const STATUSES = {
  incorrect: "incorrect",
  correct: "correct",
  misplaced: "misplaced",
} as const;

export type ResultType = Array<{
  letter: string;
  status: keyof typeof STATUSES;
}>;

export function checkGuess(guess: string, answer: string): ResultType {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = "✓";

  if (!guess) {
    return [];
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  const result: ResultType = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: STATUSES.correct,
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    const letter = guessChars[i];
    const misplacedIndex = answerChars.findIndex((char) => char === letter);

    if (misplacedIndex >= 0) {
      answerChars[misplacedIndex] = SOLVED_CHAR;
      result[i] = {
        letter,
        status: STATUSES.misplaced,
      };
    } else {
      result[i] = {
        letter,
        status: STATUSES.incorrect,
      };
    }
  }

  return result;
}
