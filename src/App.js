import { useState, useEffect } from 'react'
import Board from './components/Board'
import Score from './components/Score'
import { botMove, checkForWin, checkDraw } from './utils'

const initialBoard = () =>{
  return Array.from({length:3},v=>Array.from({length:3},v=>"")) 
}
const initialScore = () =>{
  // player 1, tie , player 2
  return [0,0,0]
}
function App() {
  const [board,setBoard] = useState(initialBoard)
  const [score,setScore] = useState(initialScore)
  const [won,setWon] = useState(false)
  const [first,setFirst] = useState(false) // player_1 (true) - player_2 (false)
  const [turn,setTurn] = useState(first) // player_1 (true) - player_2 (false) 


  const marks = {
    bot:"x",
    player:"o"
  }
  const bot_move = () =>{
    const [x,y] = botMove(board,marks)
    let copy = [...board]
    copy[x][y] = marks.bot
    setBoard(copy)
    setTurn(true)
  }
  const human_move = (x,y) =>{
    if(!won){
      if(board[x][y]===""){
        let copy = [...board]
        copy[x][y] = marks.player
        setBoard(copy)
        setTurn(false)
      }else{
        console.log("Can't insert there!\n Enter new position")
      }
    }
  }
  const resetGame = () =>{
    console.log("Loading...")
    setTimeout(()=>{
      setBoard(initialBoard) 
      setWon(false)
      console.log("start!!")
    },1000)
  }
  const switchMark = () =>{ 
    console.log("switch")
    setFirst(!first)
    resetGame()
  }
  useEffect(()=>{
    setTurn(first)
    console.log(first)
    // check for win
    if(checkForWin(board)){
      setWon(true)
      // update score
      if(!turn){
        setScore([score[0]+1,score[1],score[2]])
      }
      setScore([score[0],score[1],score[2]+1])
      // reset board
      resetGame()
    }
    // check for draw
    if(checkDraw(board)){
      // update score
      setScore([score[0],score[1]+1,score[2]])
      // reset board
      resetGame()
      return;
    }
    // bot turn
    if(!turn){  
      console.log("bot played")
      bot_move()
    }
  },[board,first])
  return (
    <div className="game">
      <Board board={board} move={human_move}/>
      <Score score={score} marks={marks} />
      <button onClick={switchMark}>Switch Mark</button>
    </div>
  );
}

export default App;
