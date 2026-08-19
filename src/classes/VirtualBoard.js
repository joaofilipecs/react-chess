class VirtualBoard {
    
    #board; 
    #rows; 
    #cols;
    
    constructor(rows = 8, cols = 8) {
        
        this.#board = [];
        this.#rows = rows;
        this.#cols = cols;
        
        // this loop inserts into the board element the places where the pieces will go - and the length of both rows and cols
        for (let i = 0; i<rows;i++){
            this.#board.push(new Array(cols));
        }
        
        this.#board[0][0] = 'r';
        this.#board[0][1] = 'n';
        this.#board[0][2] = 'b';
        
        console.log(this.toString.bind(this)());
    }
    
    get board(){
        return this.#board;
    }
    
    toString(){
        
        let boardStr = "";
        
        for (let i = 0;i < this.#rows;i++){
            boardStr += "\n";
            for(let j = 0; j< this.#cols;j++){
                boardStr += ` ${(this.#board[i][j] || "-")} `;
            }
        }
        
        
        return boardStr;
    }
    
    gagueira(){
        return 'gagueira';
    }

}

export default VirtualBoard;
