import styles from "./Square.module.css";

export default function Square({row, col, children, onClick}){






 return <div onClick={onClick} className={styles[`${(row%2 === col%2) ? 'white' : 'dark'}Square`] + " " + styles.square} >
     {children}
 </div>
}







