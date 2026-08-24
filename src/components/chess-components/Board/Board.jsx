import styles from "./Board.module.css";
import VirtualBoard from "../../../classes/chess-classes/VirtualBoard.js";
import { Piece, King } from "../../../classes/chess-classes/Pieces.js";
import Square from "../Square/Square.jsx";
import { useState } from "react";

import { VisualUtility } from "../../../classes/Utilities.jsx";

const virtualBoard = new VirtualBoard();

export default function Board({ className }) {
          console.log("board component", virtualBoard.toString());
          const [board, setBoard] = useState(virtualBoard.board);

          function createRow(rowIndex) {
                    return board[rowIndex].map((piece, index, row) => {
                              let rowIndex = board.indexOf(row);

                              return (
                                        <Square key={index} row={rowIndex} col={index}>
                                                  {VisualUtility.pieceToPNGImg(piece, styles)}
                                        </Square>
                              );
                    });
          }

          return (
                    <>
                              <div className={className}>
                                        <div className={styles["row"]}>{createRow(0)}</div>
                                        <div className={styles["row"]}>{createRow(1)}</div>
                                        <div className={styles["row"]}>{createRow(2)}</div>
                                        <div className={styles["row"]}>{createRow(3)}</div>
                                        <div className={styles["row"]}>{createRow(4)}</div>
                                        <div className={styles["row"]}>{createRow(5)}</div>
                                        <div className={styles["row"]}>{createRow(6)}</div>
                                        <div className={styles["row"]}>{createRow(7)}</div>
                              </div>

                              <br></br>
                              <button
                                        onClick={() => {
                                                  console.log("toMove", virtualBoard.toString());
                                                  virtualBoard.insertPiece(virtualBoard.removePiece(0, 0), 1, 0);

                                                  console.log("moved before updating state", virtualBoard.toString());
                                                  setBoard(virtualBoard.board);

                                                  console.log("moved", virtualBoard.toString());
                                        }}>
                                        Move White King
                              </button>
                              <button
                                        onClick={() => {
                                                  virtualBoard.insertPiece(virtualBoard.removePiece(0, 1), 0, 0);
                                        }}>
                                        Move B king
                              </button>
                              <button
                                        onClick={() => {
                                                  console.log(virtualBoard.toString());
                                        }}>
                                        Display virtual board
                              </button>
                              <button
                                        onClick={() => {
                                                  setBoard(virtualBoard.board);
                                        }}>
                                       setBoard (update)
                              </button>
                    </>
          );
}
