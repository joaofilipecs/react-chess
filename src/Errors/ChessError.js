export default class ChessError extends Error{
    constructor(message){
        super(message);
        this.name = "ChessError";
    }
}
