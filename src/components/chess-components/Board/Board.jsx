import styles from "./Board.module.css";
import VirtualBoard from "../../../classes/chess-classes/VirtualBoard.js";
import { Piece, King } from "../../../classes/chess-classes/Pieces.js";
import Square from "../Square/Square.jsx";
import blackKing from "../../../assets/pieces-images/black-king.png";
import whiteKing from "../../../assets/pieces-images/white-king.png";

export default function Board() {
          //const [board, setBoard] = useState(new VirtualBoard());
          const virtualBoard = new VirtualBoard();

          console.log("from board", virtualBoard.toString());

          let count = 0;

          function pieceToImageSrc(piece) {
                    console.log(piece?.constructor.name);
                    console.log(count++);
                    switch (piece?.constructor.name) {
                              case "King":
                                        console.log("color", piece.color.toLowerCase());
                                        return piece.color === "Black" ? blackKing : whiteKing;
                              default:
                                        return null;
                    }
          }

          //function createTesteRows(){
          //
          //          return [
          //                    <Square key={0} row={0} col={0}>
          //                        <img src={pieceToImageSrc(new King('White'))}></img>
          //                    </Square>,
          //                    <Square key={1} row={0} col={1}>
          //                        <img src={pieceToImageSrc(new King('Black'))}></img>
          //                    </Square>
          //          ]
          //
          //}
//


          function createRow(rowIndex){
                    return virtualBoard.board[rowIndex].map((piece, index, row) => {

                    let rowIndex = virtualBoard.board.indexOf(row);



                    return <Square  key={index} row={rowIndex} col={index}>
                              {(piece) ? <img className={styles.pieceImage} src={pieceToImageSrc(piece)}></img> : null}



                    </Square>}
          );
          }



          return (
                    <div>
                              <div className={styles['row']}>{createRow(0)}</div>
                              <div className={styles['row']}>{createRow(1)}</div>
                              <div className={styles['row']}>{createRow(2)}</div>
                              <div className={styles['row']}>{createRow(3)}</div>
                              <div className={styles['row']}>{createRow(4)}</div>
                              <div className={styles['row']}>{createRow(5)}</div>
                              <div className={styles['row']}>{createRow(6)}</div>
                              <div className={styles['row']}>{createRow(7)}</div>
                    </div>
          );
}
