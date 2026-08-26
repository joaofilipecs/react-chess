import { King, Queen } from "../Pieces.js";
import ChessError from "../../../errors/ChessError.js";

class ChessCalculator {
    #virtualBoard;
    constructor(virtualBoard) {
        this.#virtualBoard = virtualBoard;
    }

    legalMoves(origin) {
        function createFalseMatrix() {
            const legalMoves = [];
            for (let i = 0; i < 8; i++) {
                legalMoves[i] = [false, false, false, false, false, false, false, false];
            }

            return legalMoves;
        }

        if (!origin) {
            return createFalseMatrix();
        }

        const virtualBoard = this.#virtualBoard;
        const piece = virtualBoard.getPiece(origin.row, origin.col);
        const legalMoves = createFalseMatrix();
        if (piece?.constructor.name === "Queen") {
            // 4 sides

            // towards north
            this.validateSquares(origin, legalMoves, piece.color, 1, 0, virtualBoard.rows);
            // towards northeast
            this.validateSquares(origin, legalMoves, piece.color, 1, 1, virtualBoard.rows);
            // towards east
            this.validateSquares(origin, legalMoves, piece.color, 0, 1, virtualBoard.rows);
            // towards southeast
            this.validateSquares(origin, legalMoves, piece.color, -1, 1, virtualBoard.rows);
            // towards south
            this.validateSquares(origin, legalMoves, piece.color, -1, 0, virtualBoard.rows);
            // towards southwest
            this.validateSquares(origin, legalMoves, piece.color, -1, -1, virtualBoard.rows);
            // towards west
            this.validateSquares(origin, legalMoves, piece.color, 0, -1, virtualBoard.rows);
            // towards northwest
            this.validateSquares(origin, legalMoves, piece.color, 1, -1, virtualBoard.rows);
            return legalMoves;
        } else{
            return createFalseMatrix();
        }
    }

    validateSquares(originPosition, matrix, color, verticalIncrement, horizontalIncrement, maxDistance) {
        // this function can calculate the possible moves in diagonal or straight directions. It validates the moves orientated to only one direction. You can call it to validate an specific array of moves the number of times as the number of directions you need
        // it doesn't consider moves that put the king in check. We'll have another function for this.
        // startPosition - from where you want start going towards a direction
        // matrix - the matrix of legalMoves (arrays (the 'squares') within false or true value as their element inside other arrays (the rows)) this function will alter those values
        //color - color of origin piece
        // rowDirection adn columnDirections -> if rowDir = 1 e colDir = 0 it changes only the row to a positive direction (it means it goes south on the board) if it is rowDir = -1, then it goes on a negative direction (it goes north on the board)
        // if you have rowDir = 1 and colDir = 1 you go in positive direction vertically and horizontally - it means you go diagonally towards southwest
        // oh, maybe this function wont make sense if you can't calculate things like... piece of sameColor
        // maxDistance for queen bishops and rooks maybe be the size of the board. MaxDistance for kings and knights may be 1
        // maxDistance for pawns on the second or seventh ranks, in accordance to each color, may be 2
        let nextSquare = {
            row: originPosition.row + verticalIncrement,
            col: originPosition.col + horizontalIncrement
        };
        const board = this.#virtualBoard.board;

        for (
            let i = 0;
            i < maxDistance &&
            typeof board[nextSquare.row] !== "undefined" &&
            typeof board[nextSquare.row][nextSquare.col] !== "undefined";
            i++
        ) {
            const occupied = this.#virtualBoard.getPiece(nextSquare.row, nextSquare.col);
            if (occupied) {
                if (occupied.color.toLowerCase() !== color.toLowerCase()) {
                    matrix[nextSquare.row][nextSquare.col] = true;
                }
                break;
            } else {
                console.log("validating " + nextSquare.row + "-" + nextSquare.col);
                matrix[nextSquare.row][nextSquare.col] = true;
            }

            nextSquare = {
                row: nextSquare.row + verticalIncrement,
                col: nextSquare.col + horizontalIncrement
            };
        }

        //while (
        //    typeof board[nextSquare.row] !== "undefined" &&
        //    typeof board[nextSquare.row][nextSquare.col] !== "undefined"
        //) {
        //    const occupied = this.#virtualBoard.getPiece(nextSquare.row, nextSquare.col);
        //    if (occupied) {
        //        if (occupied.color.toLowerCase() !== color.toLowerCase()) {
        //            matrix[nextSquare.row][nextSquare.col] = true;
        //        }
        //        break;
        //    } else {
        //        matrix[nextSquare.row][nextSquare.col] = true;
        //    }
        //
        //    nextSquare = {
        //        row: nextSquare.row + verticalIncrement,
        //        col: nextSquare.col + horizontalIncrement
        //    };
        //}
    }
}

export default ChessCalculator;
