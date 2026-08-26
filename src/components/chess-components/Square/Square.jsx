import styles from "./Square.module.css";

export default function Square({legalMove, row, col, children, onClick}){






 //return <div onClick={onClick} className={styles[`${(row%2 === col%2) ? 'white' : 'dark'}Square`] + " " + styles.square}>

 return <div onClick={onClick} className={`${(row%2 === col%2) ? styles.whiteSquare : styles.darkSquare} ${styles.square} ${(legalMove) ? styles.legalMove : ''}`} >
     {children}
 </div>
}







