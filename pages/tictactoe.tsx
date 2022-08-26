import { useTicTacToeLogic } from "../util/TicTacToeHooks"
import styles from "../styles/BoardContainer.module.css"

export default function TicTacToe() {
  const { board, msg, handleChange } = useTicTacToeLogic(["", "", "", "", "", "", "", "", ""]);
  return (
    <div className="text-center grid place-content-center">
      <div
        className={
          styles.border + " h-72 w-72 grid grid-rows-3 grid-cols-3 m-10"
        }
      >
        {board.map((item, index) => (
          <div
            className="grid place-content-center text-7xl border-zinc-400"
            key={index}
            onClick={() => handleChange(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <p className="text-3xl text-zinc-700">{msg}</p>
    </div>
  );
}