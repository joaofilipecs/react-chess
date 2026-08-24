import {Piece} from "./chess-classes/Pieces.js"

import blackKing from "../assets/pieces-images/b-king.png";
import whiteKing from "../assets/pieces-images/w-king.png";
import whiteQueen from "../assets/pieces-images/w-queen.png";
import blackQueen from "../assets/pieces-images/b-queen.png";
import whiteRook from "../assets/pieces-images/w-rook.png";
import blackRook from "../assets/pieces-images/b-rook.png";
import whiteBishop from "../assets/pieces-images/w-bishop.png";
import blackBishop from "../assets/pieces-images/b-bishop.png";
import whiteKnight from "../assets/pieces-images/w-knight.png";
import blackKnight from "../assets/pieces-images/b-knight.png";
import whitePawn from "../assets/pieces-images/w-pawn.png";
import blackPawn from "../assets/pieces-images/b-pawn.png";

class VisualUtility{

    static pieceToPNGImg(piece, styles){

        if(!(piece instanceof Piece)){
            return null;
        }

         switch (piece?.constructor.name) {
                              case "King":
                                        console.log("color", piece.color.toLowerCase());
                                        return (<img className={styles.pieceImage} src={(piece.color === "White") ? whiteKing : blackKing}></img>);
                              case "Queen":

                                        console.log("color", piece.color.toLowerCase());
                                        return (<img className={styles.pieceImage} src={(piece.color === "White") ? whiteQueen : blackQueen}></img>);
                              case "Rook":

                                        console.log("color", piece.color.toLowerCase());
                                        return (<img className={styles.pieceImage} src={(piece.color === "White") ? whiteRook : blackRook}></img>);
                              case "Bishop":

                                        console.log("color", piece.color.toLowerCase());
                                        return (<img className={styles.pieceImage} src={(piece.color === "White") ? whiteBishop : blackBishop}></img>);
                              case "Knight":

                                        console.log("color", piece.color.toLowerCase());
                                        return (<img className={styles.pieceImage} src={(piece.color === "White") ? whiteKnight : blackKnight}></img>);
                              case "Pawn":

                                        console.log("color", piece.color.toLowerCase());
                                        return (<img className={styles.pieceImage} src={(piece.color === "White") ? whitePawn : blackPawn}></img>);
                              default:
                                        return null;
                    }
    }
}

export {VisualUtility};
