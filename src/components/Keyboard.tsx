import { CSSProperties } from "react";
import { CharDetail, guessHashMap, ResultType } from "../game-helper";

const KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const getKeyStyles = (status: CharDetail["status"]): CSSProperties => {
  let backgroundColor = "#a8a5a5";
  switch (status) {
    case "correct":
      backgroundColor = "#17824d";
      break;

    case "incorrect":
      backgroundColor = "#404040";
      break;

    case "misplaced":
      backgroundColor = "#998000";
      break;
    default:
      break;
  }
  return {
    padding: "4px 8px",
    backgroundColor,
    borderRadius: 4,
    fontWeight: "bold",
    color: "white",
  };
};

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    margin: 24,
  },
  row: {
    display: "flex",
    gap: 8,
  },
};

export default function Keyboard({ guesses }: { guesses: ResultType[] }) {
  const keyStatusHash = guessHashMap(guesses);
  return (
    <div style={styles.wrapper}>
      {KEYS.map((keyRow, idx) => (
        <div key={idx} style={styles.row}>
          {keyRow.map((key, idx) => {
            const keyStyle = getKeyStyles(keyStatusHash[key]);
            return (
              <span key={`${key}-${idx}`} style={keyStyle}>
                {key}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
