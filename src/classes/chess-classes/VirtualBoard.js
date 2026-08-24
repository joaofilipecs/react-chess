import { King, Queen } from "./Pieces.js";
import BoardError from "../../errors/BoardError.js";

class VirtualBoard {
    #board;
    #rows;
    #cols;

    constructor(rows = 8, cols = 8) {
        this.#board = [];
        this.#rows = rows;
        this.#cols = cols;

        // this loop inserts into the board element the places where the pieces will go - and the length of both rows and cols
        for (let i = 0; i < rows; i++) {
            const array = [];

            for (let j = 0; j < cols; j++) {
                array[j] = null;
            }

            this.#board[i] = array;
        }

        this.#board[0][0] = new King("White");
        this.#board[0][1] = new King("Black");
        this.#board[0][2] = new Queen("Black");
    }

    get board() {
        // this way you can't access the original array
        // one important thing is to prevent any creation of new roles
        const copy = [];

        for (let i = 0; i < this.#rows; i++) {
            const rowArray = [...this.#board[i]];
            copy[i] = rowArray;
        }

        return copy;
    }

    getPiece(row, col) {
        return this.#board[row][col];
    }

    removePiece(row, col) {
        if (row < 0 || row > this.#rows || col < 0 || col > this.#cols) {
            throw new BoardError(
                "There isn't such place on the board! There is only " +
                    this.#rows +
                    " ranks (rows) and " +
                    this.#cols +
                    " files (columns)"
            );
        }
        const removed = this.#board[row][col];
        this.#board[row][col] = null;

        return removed;
    }

    insertPiece(piece, row, col) {
        if (row < 0 || row > this.#rows || col < 0 || col > this.#cols) {
            throw new BoardError(
                "There isn't such place on the board! It meaasures only " +
                    this.#rows +
                    " ranks (rows) and " +
                    this.#cols +
                    " files (columns)"
            );
        }

        if (this.#board[row][col]) {
            throw new BoardError("There is already a piece at the square " + row + ", " + col);
            // vai ser necessario uma verificação na hora de fazer o insertPiece(removePiece, col, row) porque primeiro é feita
            //a remoção, mesmo antes de saber se há uma peça na casa alvo <- isso em ChessGame class. O boardGame não vai ser acessado de fora do ChessGame
        }

        this.#board[row][col] = piece;
    }

    cleanBoard() {
        for (let i = 0; i < this.#rows; i++) {
            for (let j = 0; j < this.#cols; j++) {
                this.#board[i][j] = null;
            }
        }
    }
    toString() {
        let boardStr = "";

        for (let i = 0; i < this.#rows; i++) {
            boardStr += "\n";
            for (let j = 0; j < this.#cols; j++) {
                boardStr += ` ${this.#board[i][j] || "-"} `;
            }
        }

        return boardStr;
    }
}

export default VirtualBoard;
