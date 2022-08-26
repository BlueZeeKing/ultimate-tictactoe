import { TicTacToeBoardState, TicTacToeBoard, Player, Status } from "./TicTacToeTypes";
import { useState } from "react";
import { hasWon, isFull } from "./TicTacToeLogic";

export function useTicTacToeLogic(
  startBoard: TicTacToeBoard,
) {
  const [state, setState] = useState<TicTacToeBoardState>({
    board: startBoard,
    player: "X",
    msg: "X's Turn"
  });

  function handleChange(index: number) {
    if (
      state.board[index] == "" &&
      hasWon(state.board) == "" &&
      isFull(state.board) == false
    ) {
      let stateCopy = { ...state };

      stateCopy.board[index] = state.player;

      if (state.player == "X") {
        stateCopy.player = "O";
        stateCopy.msg = "O's Turn";
      } else {
        stateCopy.player = "X";
        stateCopy.msg = "X's Turn";
      }

      let winner: Status;

      if ((winner = hasWon(stateCopy.board)) !== "") {
        stateCopy.msg = `${winner} has won`;
      } else if (isFull(stateCopy.board)) {
        stateCopy.msg = "Tie game!";
      }

      setState(stateCopy);
    }
  }

  return { ...state, handleChange: handleChange };
}
