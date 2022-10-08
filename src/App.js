// import { useEffect } from 'react'
import Board from './components/Board'
import Score from './components/Score'
function App() {
  const board = [
    ["X","X","O"],
    ["O","",""],
    ["","",""]
  ]
  const score = [
    {
      title:"player (X)",
      score:0
    },
    {
      title:"tie",
      score:0
    },
    {
      title:"computer (O)",
      score:0
    }
  ]
  const move = (mark,x,y) =>{
    if(board[x][y]===""){
      board[x][y]=mark
    }else{
      console.log("Can't insert there!\n Enter new position")
    }
  }
  return (
    <div className="game">
      <Board board={board} move={()=>move()}/>
      <Score score={score}/>
    </div>
  );
}

export default App;
