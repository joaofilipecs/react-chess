class Piece{
    #color;
    constructor(color){
        this.#color = color;
    }

    get color(){
        return this.#color;
    }
}

class King extends Piece{

    static acronym = "K";

    constructor(color){
        super(color);
    }

    toString(){
        return King.acronym;
    }
}





export {Piece, King};
