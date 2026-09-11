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
          const [selected, setSelected] = useState(null); // objeto com row e col

          const selectedPiece = (selected) ? gm.getPiece(selected.row, selected.col) : null;
          const legalMoves = (selectedPiece && selectedPiece.color === gm.turn) ? gm.calculator.legalMoves(selected) : null;
          //console.log("in board, legal moves", legalMoves);
          useEffect(() => {
                    gm.setTestPosition();
                    setBoard(virtualBoard.board);
          }, []);

          function createRow(rowIndex) {
                    return board[rowIndex].map((piece, index, row) => {
                              const rowIndex = board.indexOf(row);
                              const colIndex = index;
                              const stylesArray = [];
                              const pieceSelected = selected && gm.getPiece(selected.row, selected.col);

                              if(selected && selected.row === rowIndex && selected.col === colIndex){
                                        stylesArray.push("selectedPiece");
                              } else if(legalMoves && legalMoves[rowIndex][colIndex]){

                                        if(piece && piece.color !== pieceSelected.color){
                                                  stylesArray.push("capturingLegalMove");
                                        } else{
                                                  stylesArray.push("legalMove");
                                        }
                              }

                              return (
                                        <Square
                                                 stylesArray={stylesArray}
                                                  onClick={() => {
                                                            console.log("selected", selected);

                                                            try {if (selected && legalMoves) {
                                                                      if (legalMoves[rowIndex][colIndex]) {
                                                                                console.log('moving...')
                                                                                gm.makeMove(selected, {
                                                                                          row: rowIndex,
                                                                                          col: colIndex
                                                                                });
                                                                                setBoard(virtualBoard.board);
                                                                                setSelected(null);
                                                                      } else if (gm.getPiece(rowIndex, colIndex)) {
                                                                                setSelected({
                                                                                          row: rowIndex,
                                                                                          col: colIndex
                                                                                });
                                                                      } else {
                                                                                setSelected(null);
                                                                      }
                                                            } else if (gm.getPiece(rowIndex, colIndex)){
                                                                      setSelected({ row: rowIndex, col: colIndex });
                                                            }
                                                                } catch(chessError){
                                                                          console.error(chessError);
                                                                          setSelected(null)
                                                                }
                                                  }}
                                                  key={colIndex}
                                                  row={rowIndex}
                                                  col={colIndex}>
                                                  {VisualUtility.pieceToPNGImg(piece, styles)}
                                        </Square>
                              );
                    });
          }

          return (
                    <>
                             Captured pieces: {gm.capturedPieces.map((piece) => `${piece.constructor.name}(${piece.color})`).join(", ")}

                              <div className={styles[className]}>
                                        <div className={styles["row"]}>{createRow(7)}</div>
                                        <div className={styles["row"]}>{createRow(6)}</div>
                                        <div className={styles["row"]}>{createRow(5)}</div>
                                        <div className={styles["row"]}>{createRow(4)}</div>
                                        <div className={styles["row"]}>{createRow(3)}</div>
                                        <div className={styles["row"]}>{createRow(2)}</div>
                                        <div className={styles["row"]}>{createRow(1)}</div>
                                        <div className={styles["row"]}>{createRow(0)}</div>
                              </div>

                              <br></br>

                              <button
                                        onClick={() => {
                                                  gm.setStandardPosition();

                                                  setBoard(virtualBoard.board);
                                        }}>
                                        Update to Standard Position
                              </button>
                    </>
          );
}
