import { TicTacToeBoard } from "./TicTacToeTypes";

export function hasWon(board: TicTacToeBoard) {
  if (
    (board[0] == "X" || board[0] == "O") &&
    board[0] == board[1] &&
    board[0] == board[2]
  ) {
    return board[0];
  } else if (
    (board[3] == "X" || board[3] == "O") &&
    board[3] == board[4] &&
    board[3] == board[5]
  ) {
    return board[3];
  } else if (
    (board[6] == "X" || board[6] == "O") &&
    board[6] == board[7] &&
    board[6] == board[8]
  ) {
    return board[6];
  } else if (
    (board[0] == "X" || board[0] == "O") &&
    board[0] == board[3] &&
    board[0] == board[6]
  ) {
    return board[0];
  } else if (
    (board[1] == "X" || board[1] == "O") &&
    board[1] == board[4] &&
    board[1] == board[7]
  ) {
    return board[1];
  } else if (
    (board[2] == "X" || board[2] == "O") &&
    board[2] == board[5] &&
    board[2] == board[8]
  ) {
    return board[2];
  } else if (
    (board[0] == "X" || board[0] == "O") &&
    board[0] == board[4] &&
    board[0] == board[8]
  ) {
    return board[0];
  } else if (
    (board[2] == "X" || board[2] == "O") &&
    board[2] == board[4] &&
    board[2] == board[6]
  ) {
    return board[2];
  }
  return "";
}

export function isFull(board: TicTacToeBoard) {
  return (
    board.filter(function (item) {
      return item !== "";
    }).length == 9
  );
}