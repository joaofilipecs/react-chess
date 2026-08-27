import { King, Queen } from "../Pieces.js";
import ChessError from "../../../errors/ChessError.js";

class ChessCalculator {
    #virtualBoard;
    #chessGame;
    constructor(chessGame) {
        this.#chessGame = chessGame;
        this.#virtualBoard = chessGame.virtualBoard;
    }

    legalMoves(origin) {
        if (!origin) {
            return createFalseMatrix();
        }

        const virtualBoard = this.#virtualBoard;
        const piece = virtualBoard.getPiece(origin.row, origin.col);
        const legalMoves = createFalseMatrix();

        const simpleEnemy = (row, col)=>{
                legalMoves[row][col] = true;
                return true;
            };

        const simpleFriend = ()=>{

                return true;
            };

        const simpleEmpty = (row, col)=>{

                legalMoves[row][col] = true;
                return false;
            };


        function createFalseMatrix() {
            const legalMoves = [];
            for (let i = 0; i < 8; i++) {
                legalMoves[i] = [false, false, false, false, false, false, false, false];
            }

            return legalMoves;
        }




        const validateBishopMoves = (origin, legalMoves, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction) => {
              // towards northeast
            this.validateMoves(origin, legalMoves, piece.color, 1, 1, virtualBoard.rows, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards southeast
            this.validateMoves(origin, legalMoves, piece.color, -1, 1, virtualBoard.rows, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards southwest
            this.validateMoves(origin, legalMoves, piece.color, -1, -1, virtualBoard.rows, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
                // towards northwest
            this.validateMoves(origin, legalMoves, piece.color, 1, -1, virtualBoard.rows, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
        }
        const validateRookMoves = (origin2, legalMoves2,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction)=>{
            // towards north
            this.validateMoves(origin2, legalMoves2, piece.color, 1, 0, virtualBoard.rows, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards east
            this.validateMoves(origin2, legalMoves2, piece.color, 0, 1, virtualBoard.rows, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards south
            this.validateMoves(origin2, legalMoves2, piece.color, -1, 0, virtualBoard.rows, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
             // towards west
            this.validateMoves(origin2, legalMoves2, piece.color, 0, -1, virtualBoard.rows, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
        }

        const validateKnightMoves = (origin, legalMoves, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction) => {

        }


        if (piece?.constructor.name === "Queen") {
            // 4 sides
            // validateMoves(originPosition, matrix, color, verticalIncrement, horizontalIncrement, maxDistance, enemyOccupiedAction, notOccupiedAction)



            validateBishopMoves(origin, legalMoves, simpleEnemy, simpleFriend, simpleEmpty);
            validateRookMoves(origin, legalMoves,simpleEnemy, simpleFriend, simpleEmpty);

            return legalMoves;
        }
        if (piece?.constructor.name === "Rook") {
            // 4 sides
            // validateMoves(originPosition, matrix, color, verticalIncrement, horizontalIncrement, maxDistance, enemyOccupiedAction, notOccupiedAction)



            validateRookMoves(origin, legalMoves,simpleEnemy, simpleFriend, simpleEmpty);

            return legalMoves;
        }

        const validateKingMoves = (origin, legalMoves,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction) => {

            // towards north
            this.validateMoves(origin, legalMoves, piece.color, 1, 0, 1, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards northeast
            this.validateMoves(origin, legalMoves, piece.color, 1, 1, 1,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards east
            this.validateMoves(origin, legalMoves, piece.color, 0, 1, 1,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards southeast
            this.validateMoves(origin, legalMoves, piece.color, -1, 1, 1,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards south
            this.validateMoves(origin, legalMoves, piece.color, -1, 0, 1,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards southwest
            this.validateMoves(origin, legalMoves, piece.color, -1, -1, 1,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards west
            this.validateMoves(origin, legalMoves, piece.color, 0, -1, 1,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
            // towards northwest
            this.validateMoves(origin, legalMoves, piece.color, 1, -1, 1,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction);
        }

        if (piece?.constructor.name === "King") {

             const checkEnemy = (row, col)=>{
                legalMoves[row][col] = true;
                return true;

            };

            const friendAsKing = (row, col)=>{

                //console.log('what is happening', virtualBoard.getPiece(row, col) && virtualBoard.board.getPiece(row, col) === virtualBoard.board.getPiece(origin.row, origin.col))
                if (virtualBoard.getPiece(row, col) && virtualBoard.getPiece(row, col) === virtualBoard.getPiece(origin.row, origin.col)){
                    return false;
                } else {

                return true;
                    }
            }
            const checkEmpty = (row, col)=>{

                let rookIsNotChecking = true;
                let bishopIsNotChecking = true;

                validateRookMoves({row,col}, null, (row, col)=>{

                    if(virtualBoard.board[row][col].constructor.name === 'Queen' || virtualBoard.board[row][col].constructor.name === 'Rook'){

                        console.log('looking for queens', rookIsNotChecking)
                        rookIsNotChecking = false;

                    }

                }, friendAsKing, ()=>{
                    //lookingForRooks[row, col] = true;
                    return false;
                });

                validateBishopMoves({row,col}, null, (row, col)=>{

                    if(virtualBoard.board[row][col].constructor.name === 'Queen' || virtualBoard.board[row][col].constructor.name === 'Bishop'){

                        console.log('looking for queens', rookIsNotChecking)
                        rookIsNotChecking = false;

                    }

                }, friendAsKing, ()=>{
                    //lookingForRooks[row, col] = true;
                    return false;
                });

                console.log(rookIsNotChecking);

                if(rookIsNotChecking && bishopIsNotChecking){
                    simpleEmpty(row, col);
                }

                return !rookIsNotChecking;
            };



            validateKingMoves(origin, legalMoves, simpleEnemy, simpleFriend, checkEmpty)


            return legalMoves;
        } else{
            return createFalseMatrix();
        }
    }


    validateMoves(originPosition, matrix, color, verticalIncrement, horizontalIncrement, maxDistance, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction) {
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
            if (occupied && occupied.color.toLowerCase() !== color.toLowerCase()) {
                    const toBreak = enemyOccupiedAction(nextSquare.row, nextSquare.col)

                        console.log(enemyOccupiedAction);
                    if(toBreak){
                        break;
                    }
                    // possible actions in the legalMoves function
                    // * simple legal moves (no check consideration) -> make matrix[row][col] = true;
                    // * check considerations for king (this validateSquare will have for example a bishop/rook (this will cover all pieces but the knight) movement, therefore (maxDistance = 8)) -> getPiece(row, col) <- call validateMoves for this piece with the function for this piece with the argument enemyOccupiedAction be a simple legal moves. We'll have then a matrix for the piece that was reached of its legalmoves regardless of checks. If the king's position on this matrix is true, then that square (nextSquare.col and nextSquare.col) is an illegal move that leads to check

                    // opponent's knight movement prediction will be outside of occupied. another function will be passed to validateMoves

                    // it will be more complicated to unvalidate moves for pieces that are pinned
                    // probably I will have to do the same thing -> make a bishop's validateSquare until it finds a king... if it finds it
                    //

                    // below after implementing enemyOccupiedAction
                    //matrix[nextSquare.row][nextSquare.col] = true;


                // we will have then an action for enemyOccupiedAction, friendOccupiedAction and notOccupiedAction

                // the friendOccupiedAction won't break the loop but rather it will goes even further to see if there's an enemy piece so it can calculate the enemies piece and if it is towards the king then this function will invalidate the respective square.

            } else if (occupied && occupied.color.toLowerCase() === color.toLowerCase()){
                const toBreak = friendOcuppiedAction(nextSquare.row, nextSquare.col);
                if(toBreak){
                    break;
                }
            }
            else {
                //console.log('empty: ', originPosition, matrix, color, verticalIncrement, horizontalIncrement, maxDistance, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction)

                if (this.#virtualBoard.board[originPosition.row][originPosition.col]){
                    //console.log(this.#virtualBoard.board[originPosition.row][originPosition.col].constructor.name, notOccupiedAction)
                }


                notOccupiedAction(nextSquare.row, nextSquare.col)
                // for common validateSquare -> makes legalMoves true
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
