export type TicTacToeBoard = string[];
export type Player = "X" | "O";
export type Status = Player | "F" | "";

export interface BoardState {
  board: TicTacToeBoard;
  status: Status;
}

export interface UltimateTicTacToeBoardState {
  board: TicTacToeBoard[];
  boardStatus: Status[];
  open: number;
  player: Player;
  msg: string;
}

export interface TicTacToeBoardState {
  board: TicTacToeBoard;
  player: Player;
  msg: string;
}