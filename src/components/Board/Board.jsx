import styles from "./Board.module.css";
import VirtualBoard from '../../classes/VirtualBoard.js'
import {useState} from 'react';

export default function Board(){
 
 
 const [board, setBoard] = useState(new VirtualBoard());
 
 console.log("from board", board.toString())
 
 
 
 return <div>
 
 <br></br>
 
  <div>{board.toString().split('\n').map((section)=> 
                                         <>
                                         <div style={{lineHeight: '1px'}}>{section}</div>
                                         <br></br>
                                         </>
                                        )}</div>
 
 </div>
}







