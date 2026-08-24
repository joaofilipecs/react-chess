import { King, Queen } from "../Pieces.js";
import ChessError from "../../../errors/ChessError.js";

class ChessCalculator {
    #board;
    constructor(board){
        this.#board = board;
    }

    possibleLegalMoves(origin){
        let array = [];
        // stil there isn't a calculus here

        for (let i=0;i<8;i++){
            array[i] = [true, true, true, true, true, true, true, false];
        }

        return array;
    }
}

export default ChessCalculator;
