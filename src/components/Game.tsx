import { sample } from "../utils";
import { WORDS } from "../data";
import Input from "./Input";
import GuessList from "./GuessList";
import { useEffect, useState } from "react";
import { checkGuess, ResultType, STATUSES } from "../game-helper";
import GameResultBanner from "./GameResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export type GameStatus = "win" | "loose" | "active";

export default function Game() {
  const [guesses, addGuess] = useState<string[]>([]);
  const [validatedGuesses, setValidatedGuesses] = useState<ResultType[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>("active");

  const handleGuessSubmit = (newGuess: string) => {
    addGuess([...guesses, newGuess]);
  };

  useEffect(() => {
    if (guesses.length > 0) {
      setValidatedGuesses(guesses.map((guess) => checkGuess(guess, answer)));
    }
  }, [guesses]);

  useEffect(() => {
    if (validatedGuesses.length === 6) {
      const lastGuess = validatedGuesses[validatedGuesses.length - 1];
      const allCharsCorrect =
        lastGuess.filter((char) => char.status === STATUSES.correct).length ===
        5;
      setGameStatus(allCharsCorrect ? "win" : "loose");
    }
  }, [validatedGuesses]);

  return (
    <>
      <GameResultBanner
        gameStatus={gameStatus}
        tryCount={guesses.length}
        answer={answer}
      />
      <GuessList guesses={validatedGuesses} />
      <Input handleGuessSubmit={handleGuessSubmit} />
    </>
  );
}
