import styles from "./Board.module.css";
import ChessGame from "../../../classes/chess-classes/ChessGame.js";
import Square from "../Square/Square.jsx";
import { useState, useEffect } from "react";

import { VisualUtility } from "../../../classes/Utilities.jsx";

const gm = new ChessGame(true, { time: 3600000 }, Date.now(), [
          { player: "joseph", color: "white" },
          { player: "john", color: "black" }
]);
const virtualBoard = gm.virtualBoard;

export default function Board({ className }) {
          const [board, setBoard] = useState(virtualBoard.board);

          useEffect(()=>{
                    gm.setTestPosition();
                    console.log('useEffect')
                    setBoard(virtualBoard.board);
          },[])

          function createRow(rowIndex) {
                    return board[rowIndex].map((piece, index, row) => {
                              let rowIndex = board.indexOf(row);

                              return (
                                        <Square
                                                  onClick={() => {
                                                            console.log("clicado no square");
                                                  }}
                                                  key={index}
                                                  row={rowIndex}
                                                  col={index}>
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
                                                  gm.setStandardPosition();

                                                  setBoard(virtualBoard.board);
                                        }}>
                                        Update to Standard Position
                              </button>

                              {/*

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
                              */}
                    </>
          );
}
