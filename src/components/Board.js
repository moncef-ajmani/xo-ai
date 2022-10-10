import React from 'react'

export default function Board({board,move,won}) {
    return (
        <table className="board">
            <tbody>
                {board.map((row,x)=>{
                    return(
                        <tr key={x}>
                            {row.map((col,y)=><td key={y} onClick={()=>move(x,y)}><div className={col}></div></td>)}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
