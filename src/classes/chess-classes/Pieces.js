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

    calculateLegalMoves() {
        throw new Error("You have to implement the method calculateLegalMoves!");
    }

    static validatePawnMoves(origin,
        legalMoves,
        color,
        enemyOccupiedAction,
        friendOcuppiedAction,
        notOccupiedAction,
        virtualBoard){


        const verticalIncrement = color === 'white' ? 1 : -1;
        if ((color === 'white' && origin.row === 1) || (color === 'black' && origin.row === 6)){
            Piece.validateMoves(origin,legalMoves,color,verticalIncrement,0,2,enemyOccupiedAction,friendOcuppiedAction,notOccupiedAction,virtualBoard);
        } Piece.validateMoves(origin,legalMoves,color,verticalIncrement,0,1,enemyOccupiedAction,friendOcuppiedAction,notOccupiedAction,virtualBoard);
        Piece.validateMoves(origin,legalMoves,color,verticalIncrement,-1,1,enemyOccupiedAction,friendOcuppiedAction,notOccupiedAction,virtualBoard);
        Piece.validateMoves(origin,legalMoves,color,verticalIncrement,1,1,enemyOccupiedAction,friendOcuppiedAction,notOccupiedAction,virtualBoard);


    }

    static validateKnightMoves(origin,
        legalMoves,
        color,
        enemyOccupiedAction,
        friendOcuppiedAction,
        notOccupiedAction,
        virtualBoard){

         // top left-bottom
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            -1,
            -2,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );

         // top left-top
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            -2,
            -1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
         // top right-top
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            -2,
            1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
         // top right-bottom
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            -1,
            2,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );

         // bottom right-top
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            1,
            2,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );

         // bottom right-bottom
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            2,
            1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
         // bottom left-bottom
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            2,
            -1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
         // bottom left-top
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            1,
            -2,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );


    }

    static validateBishopMoves(
        origin,
        legalMoves,
        color,
        enemyOccupiedAction,
        friendOcuppiedAction,
        notOccupiedAction,
        virtualBoard
    ) {
        // towards northeast
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            1,
            1,
            virtualBoard.rows,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards southeast
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            -1,
            1,
            virtualBoard.rows,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards southwest
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            -1,
            -1,
            virtualBoard.rows,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards northwest
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            1,
            -1,
            virtualBoard.rows,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
    }

    static validateRookMoves(
        origin2,
        legalMoves2,
        color,
        enemyOccupiedAction,
        friendOcuppiedAction,
        notOccupiedAction,
        virtualBoard
    ) {
        // towards north
        Piece.validateMoves(
            origin2,
            legalMoves2,
            color,
            1,
            0,
            virtualBoard.rows,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards east
        Piece.validateMoves(
            origin2,
            legalMoves2,
            color,
            0,
            1,
            virtualBoard.rows,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards south
        Piece.validateMoves(
            origin2,
            legalMoves2,
            color,
            -1,
            0,
            virtualBoard.rows,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards west
        Piece.validateMoves(
            origin2,
            legalMoves2,
            color,
            0,
            -1,
            virtualBoard.rows,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
    }

    static validateKingMoves(
        origin,
        legalMoves,
        color,
        enemyOccupiedAction,
        friendOcuppiedAction,
        notOccupiedAction,
        virtualBoard
    ) {
        // towards north
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            1,
            0,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards northeast
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            1,
            1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards east
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            0,
            1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards southeast
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            -1,
            1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards south
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            -1,
            0,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards southwest
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            -1,
            -1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards west
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            0,
            -1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
        // towards northwest
        Piece.validateMoves(
            origin,
            legalMoves,
            color,
            1,
            -1,
            1,
            enemyOccupiedAction,
            friendOcuppiedAction,
            notOccupiedAction,
            virtualBoard
        );
    }

    static validateMoves(
        originPosition,
        matrix,
        color,
        verticalIncrement,
        horizontalIncrement,
        maxDistance,
        enemyOccupiedAction,
        friendOcuppiedAction,
        notOccupiedAction,
        virtualBoard
    ) {
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

        const board = virtualBoard.board;

        for (
            let i = 0;
            i < maxDistance &&
            typeof board[nextSquare.row] !== "undefined" &&
            typeof board[nextSquare.row][nextSquare.col] !== "undefined";
            i++
        ) {
            const occupied = virtualBoard.getPiece(nextSquare.row, nextSquare.col);
            if (occupied && occupied.color.toLowerCase() !== color.toLowerCase()) {
                const toBreak = enemyOccupiedAction(nextSquare.row, nextSquare.col);

                if (toBreak) {
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
            } else if (occupied && occupied.color.toLowerCase() === color.toLowerCase()) {
                const toBreak = friendOcuppiedAction(nextSquare.row, nextSquare.col);
                if (toBreak) {
                    break;
                }
            } else {
                const toBreak = notOccupiedAction(nextSquare.row, nextSquare.col);
                if (toBreak) {
                    break;
                }

                // for common validateSquare -> makes legalMoves true
            }

            nextSquare = {
                row: nextSquare.row + verticalIncrement,
                col: nextSquare.col + horizontalIncrement
            };
        }
    }

    calculatePin(origin, legalMoves, virtualBoard) {
        let pinData = null;

        const validateAndCheckPin = (row, col) => {
            if (virtualBoard.getPiece(row, col).constructor.name === "King") {
                let verticalIncrement = null;
                let horizontalIncrement = null;
                if (row !== origin.row && col !== origin.col) {
                    // King is in a diagonal direction
                    //validateMoves(originPosition,matrix,color,verticalIncrement,horizontalIncrement,maxDistance,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction,  virtualBoard
                    verticalIncrement = row > origin.row ? -1 : 1;
                    horizontalIncrement = col > origin.col ? -1 : 1;
                } else if (row === origin.row || col === origin.col) {
                    // King is in a straight direction
                    //validateMoves(originPosition,matrix,color,verticalIncrement,horizontalIncrement,maxDistance,enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction,  virtualBoard
                    verticalIncrement = row === origin.row ? 0 : row > origin.row ? -1 : 1;
                    horizontalIncrement = col === origin.col ? 0 : col > origin.col ? -1 : 1;
                }
                // this funcion will check if there's an enemy piece atacking the piece towards the same direction of the king - making a pin. If it finds the pin, it will give an object to pinData
                Piece.validateMoves(
                    { row: origin.row, col: origin.col },
                    null,
                    this.color,
                    verticalIncrement,
                    horizontalIncrement,
                    virtualBoard.rows,
                    (enemyRow, enemyCol) => {
                        const enemy = virtualBoard.getPiece(enemyRow, enemyCol);
                        if (
                            enemy.constructor.name === "Queen" ||
                            enemy.constructor.name === "Bishop" ||
                            enemy.constructor.name === "Rook"
                        ) {
                            pinData = {
                                king: { row, col },
                                attacker: { row: enemyRow, col: enemyCol },
                                verticalIncrement,
                                horizontalIncrement
                            };
                        }

                        return true;
                    },
                    () => true,
                    () => false,
                    virtualBoard
                );
            }
            return true;
        };

        // this two function calls only verifies if there is a pin and gives an object with useful information about the pin to PinData

        Piece.validateRookMoves(
            origin,
            null,
            this.color,
            () => true,
            validateAndCheckPin,
            () => false,
            virtualBoard
        );
        Piece.validateBishopMoves(
            origin,
            legalMoves,
            this.color,
            () => true,
            validateAndCheckPin,
            () => false,
            virtualBoard
        );



        return pinData;
    }

    static checkEnemyAttacking(virtualBoard, origin, row, col){

         const friendsExceptForKing = (row, col) => {
            if (
                virtualBoard.getPiece(row, col) &&
                virtualBoard.getPiece(row, col) === virtualBoard.getPiece(origin.row, origin.col)
            ) {
                return false;
            } else {
                return true;
            }
        };

        let enemyIsNotChecking = true;

            // validateRookpMoves(origin, legalMoves, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction, virtualBoard)
            Piece.validateRookMoves(
                { row, col },
                null,
                this.color,
                (row, col) => {
                    // enemyOccupiedAction
                    if (
                        virtualBoard.board[row][col].constructor.name === "Queen" ||
                        virtualBoard.board[row][col].constructor.name === "Rook"
                    ) {
                        enemyIsNotChecking = false;
                        return false;
                    }
                },
                friendsExceptForKing,
                () => {
                    //lookingForRooks[row, col] = true;
                    return false;
                },
                virtualBoard
            );

            if (enemyIsNotChecking) {
                //(origin,legalMoves,color, enemyOccupiedAction,friendOcuppiedAction,notOccupiedAction,virtualBoard)
                Piece.validateBishopMoves(
                    { row, col },
                    null,
                    this.color,
                    (row, col) => {
                        if (
                            virtualBoard.board[row][col].constructor.name === "Queen" ||
                            virtualBoard.board[row][col].constructor.name === "Bishop"
                        ) {
                            enemyIsNotChecking = false;
                            return false;
                        }
                    },
                    friendsExceptForKing,
                    () => {
                        //lookingForRooks[row, col] = true;
                        return false;
                    },
                    virtualBoard
                );
            }

            if(enemyIsNotChecking){
                // analyze castle possibility
                // if gm.castling is available for each section:
                // if row, col is empty
                // then we need to analyze any checks on the second square of castling



            }
        return enemyIsNotChecking;
    }
}

class King extends Piece {
    static acronym = "K";

    constructor(color) {
        super(color);
    }

    calculateLegalMoves(origin, legalMoves, game) {
        const virtualBoard = game.virtualBoard;

        const actOnEnemy = (row, col) => {
            legalMoves[row][col] = true;
            return true;
        };

        const friendsExceptForKing = (row, col) => {

            if (
                virtualBoard.getPiece(row, col) &&
                virtualBoard.getPiece(row, col) === virtualBoard.getPiece(origin.row, origin.col)
            ) {
                return false;
            } else {
                return true;
            }
        };


        const avoidDirectCheck = (analyzingRow, analyzingCol) => {

            let enemyIsNotChecking = true;
            // validateRookpMoves(origin, legalMoves, enemyOccupiedAction, friendOcuppiedAction, notOccupiedAction, virtualBoard)



            // this sequence of validateMoves is to look if there's an enemy piece that can go to the analyzingSquare
            Piece.validateKingMoves(
                { row: analyzingRow, col: analyzingCol },
                null,
                this.color,
                (row, col) => {
                    // enemyOccupiedAction
                    if (
                        virtualBoard.board[row][col].constructor.name === "King"
                    ) {
                        enemyIsNotChecking = false;

                    } else if (virtualBoard.board[row][col].constructor.name === "Pawn" && (analyzingCol + 1 === col || analyzingCol - 1 === col)){

                        const enemyPawnDirection = (this.color === 'white') ? -1 : 1;

                            if(analyzingRow - enemyPawnDirection === row ){
                                enemyIsNotChecking = false;
                            }
                        }
                    return true;
                },
                friendsExceptForKing,
                () => {
                    //lookingForRooks[row, col] = true;
                    return false;
                },
                virtualBoard
            );


            if (enemyIsNotChecking) {
            Piece.validateRookMoves(
                { row: analyzingRow, col: analyzingCol },
                null,
                this.color,
                (row, col) => {
                    // enemyOccupiedAction



                    if (
                        virtualBoard.board[row][col].constructor.name === "Queen" ||
                        virtualBoard.board[row][col].constructor.name === "Rook"
                    ) {
                        enemyIsNotChecking = false;

                    }
                    return true;
                },
                friendsExceptForKing,
                () => {
                    //lookingForRooks[row, col] = true;
                    return false;
                },
                virtualBoard
            );
            }
            if (enemyIsNotChecking) {
                //(origin,legalMoves,color, enemyOccupiedAction,friendOcuppiedAction,notOccupiedAction,virtualBoard)
                Piece.validateBishopMoves(
                    { row: analyzingRow, col: analyzingCol },
                    null,
                    this.color,
                    (row, col) => {



                        if (
                            virtualBoard.board[row][col].constructor.name === "Queen" ||
                            virtualBoard.board[row][col].constructor.name === "Bishop"
                        ) {
                            enemyIsNotChecking = false;
                        }
                        return true;
                    },
                    friendsExceptForKing,
                    () => {
                        //lookingForRooks[row, col] = true;
                        return false;
                    },
                    virtualBoard
                );
            }

            if (enemyIsNotChecking) {
                Piece.validateKnightMoves(
                    { row: analyzingRow, col: analyzingCol },
                    null,
                    this.color,
                    (row, col) => {
                        if (virtualBoard.board[row][col].constructor.name === "Knight") {
                            enemyIsNotChecking = false;
                            return true;
                        }
                        return false;
                    },
                    friendsExceptForKing,
                    () => {
                        //lookingForRooks[row, col] = true;
                        return false;
                    },
                    virtualBoard
                );
            }

            if(enemyIsNotChecking){
                // analyze castle possibility
                // if gm.castling is available for each section:
                // if row, col is empty
                // then we need to analyze any checks on the second square of castling



            }

            let willBreak = false;

            if (enemyIsNotChecking) {
                legalMoves[analyzingRow][analyzingCol] = true;
                willBreak = true;
            }

            return willBreak;
        };


        Piece.validateKingMoves(
            origin,
            legalMoves,
            this.color,
            avoidDirectCheck,
            () => true,
            avoidDirectCheck,
            virtualBoard
        );


        // castling



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

    calculateLegalMoves(origin, legalMoves, game) {
        const virtualBoard = game.virtualBoard;

        const pinData = this.calculatePin(origin,legalMoves,virtualBoard);;

        const actOnEnemy = (row, col) => {
            legalMoves[row][col] = true;
            return true;
        };

        const actOnFriend = () => {
            return true;
        };

        const actOnEmpty = (row, col) => {
            legalMoves[row][col] = true;
            return false;
        };

        if (pinData) {
            // Question: does a pin always permit to capture the attacker pinner? If the answer, this code may be wrong
            // This code above obviously is created for the queen movements. For the rook and bishop we will have to refactor a little bit. For the knight and pawns the same, and a bit more complicated.

            const pieceRow = origin.row;
            const pieceCol = origin.col;

            let HI = pinData.horizontalIncrement;
            let VI = pinData.verticalIncrement;

            const attackerRow = pinData.attacker.row;
            const attackerCol = pinData.attacker.col;


            // let i = 6-1, j=0; 6+1!===1&&0-0!===0
            for (
                let i = pieceRow + VI, j = pieceCol + HI;
                i - VI !== attackerRow || j - HI !== attackerCol;
                i += VI, j += HI
            ) {
                legalMoves[i][j] = true;
            }

            HI *= -1;
            VI *= -1;

            const kingRow = pinData.king.row;
            const kingCol = pinData.king.col;

            for (let i = pieceRow + VI, j = pieceCol + HI; i !== kingRow || j !== kingCol; i += VI, j += HI) {
                legalMoves[i][j] = true;
            }

            // first loop is to go thourght all squares towards the attacker. After validating the attacker square, it will break the loop.
            // the second loop does the same towards the king. But it breaks before validating the king's square. HI and VI were changed to switch the direction
            return;
        }

        Piece.validateRookMoves(origin, legalMoves, this.color, actOnEnemy, actOnFriend, actOnEmpty, virtualBoard);
        Piece.validateBishopMoves(origin, legalMoves, this.color, actOnEnemy, actOnFriend, actOnEmpty, virtualBoard);
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
    calculateLegalMoves(origin, legalMoves, game) {
        const virtualBoard = game.virtualBoard;

        const pinData = this.calculatePin(origin,legalMoves,virtualBoard);

        const actOnEnemy = (row, col) => {
            legalMoves[row][col] = true;
            return true;
        };

        const actOnFriend = () => {
            return true;
        };

        const actOnEmpty = (row, col) => {
            legalMoves[row][col] = true;
            return false;
        };

        if (pinData) {
            const pieceRow = origin.row;
            const pieceCol = origin.col;

            let HI = pinData.horizontalIncrement;
            let VI = pinData.verticalIncrement;

            const attackerRow = pinData.attacker.row;
            const attackerCol = pinData.attacker.col;
            // this if is only for rook - for bishop we can have (HI !=== 0 && VI !== 0)
            if (HI === 0 || VI === 0) {
                for (
                    let i = pieceRow + VI, j = pieceCol + HI;
                    i - VI !== attackerRow || j - HI !== attackerCol;
                    i += VI, j += HI
                ) {

                    legalMoves[i][j] = true;
                }
            }

            HI *= -1;
            VI *= -1;

            const kingRow = pinData.king.row;
            const kingCol = pinData.king.col;

            for (let i = pieceRow + VI, j = pieceCol + HI; i !== kingRow || j !== kingCol; i += VI, j += HI) {

                legalMoves[i][j] = true;
            }

            // first loop is to go thourght all squares towards the attacker. After validating the attacker square, it will break the loop.
            // the second loop does the same towards the king. But it breaks before validating the king's square. HI and VI were changed to switch the direction
            return;
        }

        Piece.validateRookMoves(origin, legalMoves, this.color, actOnEnemy, actOnFriend, actOnEmpty, virtualBoard);
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

    calculateLegalMoves(origin, legalMoves, game) {
        const virtualBoard = game.virtualBoard;
        //validatePin(origin,legalMoves, virtualBoard)
        const pinData = this.calculatePin(origin, legalMoves, virtualBoard);

        const actOnEnemy = (row, col) => {
            legalMoves[row][col] = true;
            return true;
        };

        const actOnFriend = () => {
            return true;
        };

        const actOnEmpty = (row, col) => {
            legalMoves[row][col] = true;
            return false;
        };


        if (pinData) {
            const pieceRow = origin.row;
            const pieceCol = origin.col;

            let HI = pinData.horizontalIncrement;
            let VI = pinData.verticalIncrement;

            const attackerRow = pinData.attacker.row;
            const attackerCol = pinData.attacker.col;
            // this if is only for bishop - for rook we can have (HI === 0 || VI === 0)
            if (HI !== 0 && VI !== 0) {
                for (
                    let i = pieceRow + VI, j = pieceCol + HI;
                    i - VI !== attackerRow || j - HI !== attackerCol;
                    i += VI, j += HI
                ) {
                    legalMoves[i][j] = true;
                }
            }

            HI *= -1;
            VI *= -1;

            const kingRow = pinData.king.row;
            const kingCol = pinData.king.col;

            for (let i = pieceRow + VI, j = pieceCol + HI; i !== kingRow || j !== kingCol; i += VI, j += HI) {

                legalMoves[i][j] = true;
            }

            // first loop is to go thourght all squares towards the attacker. After validating the attacker square, it will break the loop.
            // the second loop does the same towards the king. But it breaks before validating the king's square. HI and VI were changed to switch the direction
            return;
        }

            Piece.validateBishopMoves(
                origin,
                legalMoves,
                this.color,
                actOnEnemy,
                actOnFriend,
                actOnEmpty,
                virtualBoard
            );

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

    calculateLegalMoves(origin, legalMoves, game) {
        const virtualBoard = game.virtualBoard;
        //validatePin(origin,legalMoves, virtualBoard)
        const pinData = this.calculatePin(origin, legalMoves, virtualBoard);

        const actOnEnemy = (row, col) => {
            legalMoves[row][col] = true;
            return true;
        };

        const actOnFriend = () => {
            return true;
        };

        const actOnEmpty = (row, col) => {
            legalMoves[row][col] = true;
            return false;
        };


        if (pinData) {
            return;
        }

            Piece.validateKnightMoves(
                origin,
                legalMoves,
                this.color,
                actOnEnemy,
                actOnFriend,
                actOnEmpty,
                virtualBoard
            );

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

    calculateLegalMoves(origin, legalMoves, game) {
        const virtualBoard = game.virtualBoard;
        //validatePin(origin,legalMoves, virtualBoard)
        const pinData = this.calculatePin(origin, legalMoves, virtualBoard);

        const actOnEnemy = (row, col) => {
            if(origin.row !== row && origin.col !== col){
                legalMoves[row][col] = true;
            }

            return true;
        };

        const actOnFriend = () => {
            return true;
        };

        const actOnEmpty = (row, col) => {

            if(origin.row === row || origin.col === col){
                legalMoves[row][col] = true;
            }
            else if(game.enPassantSquare && game.enPassantSquare.row === row && game.enPassantSquare.col === col){
                legalMoves[row][col] = true;
            }

            return false;
        };
        if (pinData) {
            const verticalIncrement = this.color === 'white' ? 1 : -1;


            if (pinData.attacker.row === origin.row + verticalIncrement && (pinData.attacker.col === origin.col + 1 || pinData.attacker.col === origin.col - 1)){

                legalMoves[pinData.attacker.row][pinData.attacker.col] = true;

            }

            return;
        }

            Piece.validatePawnMoves(
                origin,
                legalMoves,
                this.color,
                actOnEnemy,
                actOnFriend,
                actOnEmpty,
                virtualBoard
            );

    }
}

export { Piece, King, Queen, Rook, Bishop, Knight, Pawn };
