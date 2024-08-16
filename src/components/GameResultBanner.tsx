import { GameStatus } from "./Game";

export default function GameResultBanner({
  gameStatus,
  tryCount,
  answer,
}: {
  gameStatus: GameStatus;
  tryCount: number;
  answer: string;
}) {
  if (gameStatus === "active") {
    return null;
  } else if (gameStatus === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{tryCount} guesses</strong>.
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
        </p>
      </div>
    );
  }
}
