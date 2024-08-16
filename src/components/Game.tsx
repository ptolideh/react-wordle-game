import { sample } from "../utils";
import { WORDS } from "../data";
import Input from "./Input";
import GuessList from "./GuessList";
import { useEffect, useState } from "react";
import { checkGuess, ResultType } from "../game-helper";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export default function Game() {
  const [guesses, addGuess] = useState<string[]>([]);
  const [validatedGuesses, setValidatedGuesses] = useState<ResultType[]>([]);

  const handleGuessSubmit = (newGuess: string) => {
    addGuess([...guesses, newGuess]);
  };

  useEffect(() => {
    if (guesses.length > 0) {
      setValidatedGuesses(guesses.map((guess) => checkGuess(guess, answer)));
    }
  }, [guesses]);

  return (
    <>
      <GuessList guesses={validatedGuesses} />
      <Input handleGuessSubmit={handleGuessSubmit} />
    </>
  );
}
