import styles from "./Square.module.css";

export default function Square({className, row, col, color, children}){




 console.log('square', children)


 return <div className={styles[`${(row%2 === col%2) ? 'white' : 'dark'}Square`] + " " + styles.square} >
     {children}
 </div>
}







