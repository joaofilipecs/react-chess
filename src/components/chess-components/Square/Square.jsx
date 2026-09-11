import styles from "./Square.module.css";

export default function Square({stylesArray, row, col, children, onClick}){

//console.log("#1", styles['selectedPiece'])
//console.log(stylesArray)
console.log(row, col)
stylesArray.push('square');
if(row%2 === col%2){
     stylesArray.push("whiteSquare");
} else{
     stylesArray.push("darkSquare");
}

stylesArray =  stylesArray.map((element)=>{
     return styles[element];
});


// className={stylesArray.map((classString)=>{styles[classString] + " "})}

 //return <div onClick={onClick} className={styles[`${(row%2 === col%2) ? 'white' : 'dark'}Square`] + " " + styles.square}>

 return <div onClick={onClick} className={stylesArray.join(" ")}>
     {children}
 </div>
}







