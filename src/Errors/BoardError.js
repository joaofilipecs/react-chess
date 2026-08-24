export default class BoardError extends Error{
    constructor(message){
        super(message);
        this.name = "BoardError";
    }
}
