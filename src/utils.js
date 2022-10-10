// Check Win Functions
function checkDraw(board){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j] ===""){
                return false
            } 
        }
    }
    return true
}
function checkForWin(board){
    // check rows & columns
    for(let i=0;i<3;i++){
        if(board[i][0]===board[i][1] && board[i][0]===board[i][2] && board[i][0] !== "")
            return true
        if(board[0][i]===board[1][i] && board[0][i]===board[2][i] && board[0][i] !== "")
            return true
    }
    // check diag
    if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0] !== "")
            return true
    if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[0][2] !== "")
            return true
    
    return false   
}
function checkWitchMarkWon(board,mark){
    // check rows & columns
    for(let i=0;i<3;i++){
        if(board[i][0]===board[i][1] && board[i][0]===board[i][2] && board[i][0] === mark)
            return true
        if(board[0][i]===board[1][i] && board[0][i]===board[2][i] && board[0][i] === mark)
            return true
    }
    // check diag
    if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0] === mark)
        return true
    if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[0][2] === mark)
        return true
    
    return false
}

function botMove(board,marks){
    let bestScore = -1000
    let bestMoveX = null
    let bestMoveY = null
    for(var i=0;i<3;i++){
        for (var j=0;j<3;j++){
            // Is the spot available?
            if(board[i][j]===""){
                board[i][j] = marks.bot
                let score = minimax(board,0,false,marks)
                board[i][j] = ""
                if(score > bestScore){
                    bestScore = score
                    bestMoveX = i
                    bestMoveY = j
                } 
            }
        }
    }
    return [bestMoveX,bestMoveY] 
}

function minimax(board,depth,isMaximizing,marks){
    let isXWon = checkWitchMarkWon(board,"x")
    let isOWon = checkWitchMarkWon(board,"o")
    let score = 0
    if(isXWon || isOWon || checkDraw(board)){
        if(isXWon){
            score = 1
        }else if(isOWon){
            score = -1
        }
        return score 
    }
    
    if(isMaximizing){
        let bestScore = -1000
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                // Is the spot available?
                if(board[i][j]===""){
                    board[i][j] = marks.bot
                    score = minimax(board,depth+1,false,marks)
                    board[i][j] = ""
                    bestScore = Math.max(score,bestScore)
                }
            }
        }
        return bestScore
    }else{
        let bestScore = 1000
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                // Is the spot available?
                if(board[i][j]===""){
                    board[i][j] = marks.player
                    score = minimax(board,depth+1,true,marks)
                    board[i][j] = ""
                    bestScore = Math.min(score,bestScore)
                }
            }
        }
        return bestScore
    }
}
export {checkForWin,botMove,checkDraw} 