import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { ResultType } from "../game-helper";
import { range } from "../utils";
import Guess from "./Guess";

export default function GuessList({ guesses }: { guesses: ResultType[] }) {
  return (
    <div className="guess-result">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, idx) => (
        <Guess key={`${idx}`} value={guesses[num]} />
      ))}
    </div>
  );
}

// export default function GuessList({ guesses }: { guesses: string[] }) {
//   const emptyRows = new Array(NUM_OF_GUESSES_ALLOWED - guesses.length).fill(
//     null
//   );
//   const emptyLetters = new Array(5).fill("");

//   return (
//     <div className="guess-result">
//       {guesses.map((guess, idx) => (
//         <GuessRow key={`${idx}-${guess}`} letters={Array.from(guess)} />
//       ))}
//       {emptyRows.map((_, idx) => (
//         <GuessRow key={idx} letters={Array.from(emptyLetters)} />
//       ))}
//     </div>
//   );
// }
