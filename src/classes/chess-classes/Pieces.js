class Piece {
    #color;
    constructor(color) {
        this.#color = color;
    }

    get color() {
        return this.#color;
    }

    static createPiece(piece, color) {
        switch (piece.toLowerCase()) {
            case "k":
            case "king": {
                return new King(color);
            }
            case "q":
            case "queen": {
                return new Queen(color);
            }
            case "r":
            case "Rook": {
                return new Rook(color);
            }
            case "b":
            case "bishop": {
                return new Bishop(color);
            }
            case "n":
            case "knight": {
                return new Knight(color);
            }
            case "p":
            case "pawn": {
                return new Pawn(color);
            }
            default:
                return null;
        }
    }
}

class King extends Piece {
    static acronym = "K";

    constructor(color) {
        super(color);
    }

    toString() {
        return King.acronym;
    }
}

class Queen extends Piece {
    static acronym = "Q";

    constructor(color) {
        super(color);
    }

    toString() {
        return Queen.acronym;
    }
}

class Rook extends Piece {
    static acronym = "R";

    constructor(color) {
        super(color);
    }

    toString() {
        return Rook.acronym;
    }
}

class Bishop extends Piece {
    static acronym = "B";

    constructor(color) {
        super(color);
    }

    toString() {
        return Bishop.acronym;
    }
}

class Knight extends Piece {
    static acronym = "N";

    constructor(color) {
        super(color);
    }

    toString() {
        return Knight.acronym;
    }
}

class Pawn extends Piece {
    static acronym = "P";

    constructor(color) {
        super(color);
    }

    toString() {
        return Pawn.acronym;
    }
}

export { Piece, King, Queen, Rook, Bishop, Knight, Pawn };
