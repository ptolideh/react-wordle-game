import { ChangeEvent, FormEvent, useState } from "react";

export default function Input({
  handleGuessSubmit,
}: {
  handleGuessSubmit: (newGuess: string) => void;
}) {
  const [word, setWord] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value.toUpperCase());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (word.length !== 5) {
      window.alert(`Please enter only ${5} words please!`);
      return;
    }
    console.log(word);
    handleGuessSubmit(word);
    setWord("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess: </label>
        <input
          required
          minLength={5}
          maxLength={5}
          type="text"
          id="guess-input"
          name="guess-input"
          value={word}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
