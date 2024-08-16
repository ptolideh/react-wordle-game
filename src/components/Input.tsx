import { ChangeEvent, CSSProperties, FormEvent, useState } from "react";

const styles: { [k: string]: CSSProperties } = {
  inputWrapper: {
    display: "flex",
    alignItems: "middle",
    gap: 2,
  },
  reset: {
    padding: "8px 12px",
    backgroundColor: "lightgray",
    borderRadius: 4,
  },
};

export default function Input({
  handleGuessSubmit,
  handleReset,
}: {
  handleGuessSubmit: (newGuess: string) => void;
  handleReset: () => void;
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
        <div style={styles.inputWrapper}>
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
          <button type="button" style={styles.reset} onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
