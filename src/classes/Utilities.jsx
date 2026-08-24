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
                                        return (<img className={styles.pieceImage} src={(piece.color.toLowerCase() === "white") ? whiteKing : blackKing}></img>);
                              case "Queen":
                                        return (<img className={styles.pieceImage} src={(piece.color.toLowerCase() === "white") ? whiteQueen : blackQueen}></img>);
                              case "Rook":
                                        return (<img className={styles.pieceImage} src={(piece.color.toLowerCase() === "white") ? whiteRook : blackRook}></img>);
                              case "Bishop":
                                        return (<img className={styles.pieceImage} src={(piece.color.toLowerCase() === "white") ? whiteBishop : blackBishop}></img>);
                              case "Knight":
                                        return (<img className={styles.pieceImage} src={(piece.color.toLowerCase() === "white") ? whiteKnight : blackKnight}></img>);
                              case "Pawn":
                                        return (<img className={styles.pieceImage} src={(piece.color.toLowerCase() === "white") ? whitePawn : blackPawn}></img>);
                              default:
                                        return null;
                    }
    }
}

export {VisualUtility};
