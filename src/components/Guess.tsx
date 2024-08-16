import { ResultType } from "../game-helper";
import { range } from "../utils";

export default function Guess({ value }: { value: ResultType | undefined }) {
  return (
    <p className="guess">
      {range(5).map((num, idx) => {
        const isNotEmptyCell = value !== undefined;
        return (
          <span
            className={`cell ${isNotEmptyCell ? value[num].status : ""}`}
            key={idx}
          >
            {isNotEmptyCell ? value[num].letter : ""}
          </span>
        );
      })}
    </p>
  );
}
