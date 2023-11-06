// code your solution here
function superbowlWin(games){
   const win = games.find ((game)=> game.result == "W")
    if(win){
        return win.year
    } else {
        return win
    }
}