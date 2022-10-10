import React from 'react'

export default function Score({score,marks}) {
  const arr = [`player (${marks.player})`,`tie`,`computer (${marks.bot})`]
  return (
    <div className="score-board">
      {arr.map((el,id)=>{
        return(
          <div className='player' key={id}>
              <div className="name">{el}</div>
              <div className="score">{score[id]}</div>
          </div>
        )
      })}
        
    </div>
    
  )
}
