import React from 'react'

export default function Score({score}) {
  return (
    <div className="score-board">
      {score.map((el,id)=>{
        return(
          <div className='player' key={id}>
              <div className="name">{el.title}</div>
              <div className="score">{el.score}</div>
          </div>
        )
      })}
        
    </div>
    
  )
}
