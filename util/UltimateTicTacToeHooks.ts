import { useState } from "react"

import { TicTacToeBoard, BoardState, UltimateTicTacToeBoardState, Player } from "./TicTacToeTypes"
import { hasWon, isFull } from "./TicTacToeLogic";

export function useTicTacToeLogic(
  startBoard: TicTacToeBoard,
  changeFunction: (board: BoardState, boardId: any, index: number) => null,
  boardId?: any
) {
  const [state, setState] = useState<BoardState>({
    board: startBoard,
    status: "",
  });

  function handleChange(index: number, player?: Player) {
    if (
      state.board[index] == "" &&
      hasWon(state.board) == "" &&
      isFull(state.board) == false
    ) {
      let stateCopy = { ...state };

      stateCopy.board[index] = player;

      if (hasWon(stateCopy.board) !== "") {
        stateCopy.status = hasWon(stateCopy.board);
      } else if (isFull(stateCopy.board)) {
        stateCopy.status = "F";
      }

      setState(stateCopy);

      changeFunction(stateCopy, boardId, index);
    }
  }

  return { ...state, handleChange: handleChange };
}

export function useUltimateTicTacToeLogic(startBoard: TicTacToeBoard[], startPlayer: Player) {
  const [state, setState] = useState<UltimateTicTacToeBoardState>({
    board: startBoard,
    boardStatus: ["", "", "", "", "", "", "", "", ""],
    open: 9,
    player: startPlayer,
    msg: `It's ${startPlayer}'s Turn`,
  });

  function handleChange(board: BoardState, index: number, squareIndex: number) {
    let stateCopy: UltimateTicTacToeBoardState = { ...state };

    stateCopy.board[index] = board.board;
    stateCopy.boardStatus[index] = board.status;
    stateCopy.open = squareIndex;

    if (stateCopy.boardStatus[stateCopy.open] !== "") {
      stateCopy.open = 9;
    }

    if (hasWon(stateCopy.boardStatus) !== "") {
      stateCopy.msg = `${hasWon(stateCopy.boardStatus)} has won!`;
      stateCopy.open = -1;
    } else if (isFull(stateCopy.boardStatus)) {
      stateCopy.msg = "Tie game!";
      stateCopy.open = -1;
    } else {
      if (stateCopy.player == "X") {
        stateCopy.player = "O";
        stateCopy.msg = `It's O's Turn`;
      } else {
        stateCopy.player = "X";
        stateCopy.msg = `It's X's Turn`;
      }
    }

    setState(stateCopy);
  }

  return { ...state, handleChange: handleChange };
}