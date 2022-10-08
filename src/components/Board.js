import React from 'react'

export default function Board({board,move}) {
    const handleClick = () =>{
        move()
    }
    return (
        <table className="board">
            {board.map((row,id)=>{
                return(
                    <tr key={id}>
                        {row.map((col,id)=><td key={id} onClick={handleClick}>{col}</td>)}
                    </tr>
                )
                
            })}
        </table>
    )
}
