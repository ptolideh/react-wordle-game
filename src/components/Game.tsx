import { sample } from "../utils";
import { WORDS } from "../data";
import Input from "./Input";
import GuessList from "./GuessList";
import { useEffect, useState } from "react";
import { checkGuess, ResultType, STATUSES } from "../game-helper";
import GameResultBanner from "./GameResultBanner";
import Keyboard from "./Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export type GameStatus = "win" | "lose" | "active";

export default function Game() {
  const [guesses, setGuess] = useState<string[]>([]);
  const [validatedGuesses, setValidatedGuesses] = useState<ResultType[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>("active");

  const handleGuessSubmit = (newGuess: string) => {
    setGuess([...guesses, newGuess]);
  };

  const handleReset = () => {
    setGuess([]);
    setValidatedGuesses([]);
  };

  /* validate each letter */
  useEffect(() => {
    if (guesses.length > 0) {
      setValidatedGuesses(guesses.map((guess) => checkGuess(guess, answer)));
    }
  }, [guesses]);

  /* validate overall answer */
  useEffect(() => {
    const lastGuess = validatedGuesses[validatedGuesses.length - 1];
    const allCharsCorrect =
      lastGuess?.filter((char) => char.status === STATUSES.correct).length ===
      5;

    if (validatedGuesses.length < 6 && allCharsCorrect) {
      setGameStatus("win");
    }

    /* end of game */
    if (validatedGuesses.length === 6) {
      setGameStatus(allCharsCorrect ? "win" : "lose");
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
      <Input handleGuessSubmit={handleGuessSubmit} handleReset={handleReset} />
      <Keyboard guesses={validatedGuesses} />
    </>
  );
}
