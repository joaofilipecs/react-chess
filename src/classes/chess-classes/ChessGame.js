import ChessError from "../../errors/ChessError.js";
import VirtualBoard from "./VirtualBoard.js";
import ChessCalculator from "./traditional-chess/ChessCalculator.js";
import { Piece } from "./Pieces.js";

class ChessGame {
    /* a classe estará sendo direcionada para o xadrez tradicional mass
     será um pouco mais genérica e poderá ser usada para outra variantes:

        - 960chess;
        - crazyhouse;
        - king on the hill;
        - antichess;
        - threecheck;
        - original indian chess;
        - checkers?

        essas outras variantes poderão utilizar uma subclasse que herde a ChessGame
    */

    #virtualBoard;
    #history;
    #result;
    #timeControl;
    #startDate;
    #endDate;
    #players;
    #captured;
    #calculator;
    #turn;
    #capturedPieces;

    constructor(isOcurring, timeControl, start, players, calculator = ChessCalculator, row = 8, col = 8) {
        this.#virtualBoard = new VirtualBoard(row, col);
        this.#history = ["test"]; // pode ser uma lista de FENs
        this.#result = { type: null, reason: isOcurring ? "ocurring" : "analysis" }; // ou null/ocurring ou null/analysis
        this.#timeControl = { time: timeControl.time, increment: timeControl.increment, delay: timeControl.delay };
        this.#startDate = start;
        this.#endDate = null; // when the game finishes.
        this.#players = [...players];
        this.calculator = new calculator(this);
        this.#turn = "black";
        this.#capturedPieces = [];
    }

    get capturedPieces(){
        return [...this.#capturedPieces];
    }

    get turn(){
        return this.#turn;
    }

    get virtualBoard() {
        return this.#virtualBoard;
    }

    getPiece(row, col) {
        return this.#virtualBoard.getPiece(row, col);
    }

    get result() {
        return { ...this.#result };
    }

    get history() {
        return [...this.#history];
    }

    removeLastFromHistory() {
        return this.#history.pop();
    }

    makeMove(origin, target) {
        // {row: 0, col: 0}, {row: 7, col: 7}
        console.log('console makemove', target, this.calculator.legalMoves(origin));
        const board = this.#virtualBoard;
        if (!(board.getPiece(origin.row, origin.col).color.toLowerCase() === this.#turn.toLowerCase())) {
            throw new ChessError(
                `Now it's ${this.#turn}'s turn. The piece on rank ${origin.row + 1} and file ${origin.col + 1} is not ${this.#turn}`
            );
        }
        if (!this.calculator.legalMoves(origin)[target.row][target.col]) {
            throw new ChessError(
                `The square on rank ${target.row + 1} and file ${target.col + 1} is illegal for the piece on rank ${origin.row + 1} and file ${origin.col + 1}`
            );
        }

        const captured = board.getPiece(target.row, target.col);
        if (captured) {
            this.#capturedPieces.push(captured);
            board.removePiece(target.row, target.col);
        }

        const originPiece = board.removePiece(origin.row, origin.col);
        board.insertPiece(originPiece, target.row, target.col);

        this.#turn = (this.#turn.toLowerCase() === 'black') ? 'white' : 'black';


        this.consoleBoard();
    }

    setStandardPosition() {
        const board = this.#virtualBoard;
        board.cleanBoard();

        board.insertPiece(Piece.createPiece("r", "white"), 0, 0);
        board.insertPiece(Piece.createPiece("n", "white"), 0, 1);
        board.insertPiece(Piece.createPiece("b", "white"), 0, 2);
        board.insertPiece(Piece.createPiece("q", "white"), 0, 3);
        board.insertPiece(Piece.createPiece("k", "white"), 0, 4);
        board.insertPiece(Piece.createPiece("b", "white"), 0, 5);
        board.insertPiece(Piece.createPiece("n", "white"), 0, 6);
        board.insertPiece(Piece.createPiece("r", "white"), 0, 7);

        board.insertPiece(Piece.createPiece("p", "white"), 1, 0);
        board.insertPiece(Piece.createPiece("p", "white"), 1, 1);
        board.insertPiece(Piece.createPiece("p", "white"), 1, 2);
        //board.insertPiece(Piece.createPiece("p", "white"), 1, 3);
        board.insertPiece(Piece.createPiece("p", "white"), 1, 4);
        board.insertPiece(Piece.createPiece("p", "white"), 1, 5);
        board.insertPiece(Piece.createPiece("p", "white"), 1, 6);
        board.insertPiece(Piece.createPiece("p", "white"), 1, 7);

        board.insertPiece(Piece.createPiece("r", "black"), 7, 0);
        board.insertPiece(Piece.createPiece("n", "black"), 7, 1);
        board.insertPiece(Piece.createPiece("b", "black"), 7, 2);
        board.insertPiece(Piece.createPiece("q", "black"), 7, 3);
        board.insertPiece(Piece.createPiece("k", "black"), 7, 4);
        board.insertPiece(Piece.createPiece("b", "black"), 7, 5);
        board.insertPiece(Piece.createPiece("n", "black"), 7, 6);
        board.insertPiece(Piece.createPiece("r", "black"), 7, 7);

        board.insertPiece(Piece.createPiece("p", "black"), 6, 0);
        board.insertPiece(Piece.createPiece("p", "black"), 6, 1);
        board.insertPiece(Piece.createPiece("p", "black"), 6, 2);
        //board.insertPiece(Piece.createPiece("p", "black"), 6, 3);
        board.insertPiece(Piece.createPiece("p", "black"), 6, 4);
        board.insertPiece(Piece.createPiece("p", "black"), 6, 5);
        board.insertPiece(Piece.createPiece("p", "black"), 6, 6);
        board.insertPiece(Piece.createPiece("p", "black"), 6, 7);
    }

    setTestPosition() {
        const board = this.#virtualBoard;
        board.cleanBoard();

        board.insertPiece(Piece.createPiece("k", "white"), 0, 0);
        board.insertPiece(Piece.createPiece("q", "white"), 0, 2);
        board.insertPiece(Piece.createPiece("r", "white"), 0, 1);
        board.insertPiece(Piece.createPiece("q", "black"), 7, 1);
        board.insertPiece(Piece.createPiece("k", "black"), 7, 0);



    }

    setBoardFromFEN(FEN) {
        //standardGame FEN 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
        // in this case, the game has no history
        // I will work on this function later.
    }

    setGameFromPGN(PGN) {
        // set history and final position. I'll work on this function later.
    }

    consoleBoard() {
        console.log(this.#virtualBoard.toString());
    }
}

export default ChessGame;
