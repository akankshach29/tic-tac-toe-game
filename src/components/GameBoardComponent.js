import React from 'react'
import './Game.css'
import BoxComponent from './BoxComponent'

class GameBoardComponent extends React.Component{
    constructor(props){
        super(props)
            this.state={
                boxes: Array(9),
                nextMove: true,
                timeLeft: 10
            }
    }
    // timer
    timer = setInterval(() => {
        let time = this.state.timeLeft - 1;
        this.setState({timeLeft: time})
    }, 1000)
    // handling click on each box
    handleClick(i){
        const boxes = this.state.boxes;
        boxes[i] = this.state.nextMove ? 'X' : 'O'
        this.setState({
            boxes: boxes,
            nextMove : !this.state.nextMove,
            timeLeft: 10
        })
    }
    showBox(i){
        return (
            <BoxComponent 
                value={this.state.boxes[i]} 
                onBoxClick={()=> this.handleClick(i)}
            />
        )
    }
    // function to calculate the winner
    showWinner(boxes){
        const rowsAndColumns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for(let i = 0; i < rowsAndColumns.length; i++){
            let [a, b, c] = rowsAndColumns[i];
            if(boxes[a] && boxes[a] === boxes[b] && boxes[b] === boxes[c]){
                 return boxes[a]
            }
        }
    }
    render(){
        const {boxes, nextMove, timeLeft} = this.state
        const {player1, player2} = this.props
        const winner = this.showWinner(boxes)
        let timeout = this.timer
        let status = '';
        // showing status of the player
        if(timeLeft !== 0 && winner){
            if(winner === 'X'){
                console.log(player1)
                status = 'Winner:' + player1
            } else{
                status = 'Winner:' + player2
            }       
            clearInterval(this.timer);
        } else {
            status = 'Next Player:'  + (nextMove ? player1 : player2)            
        }
        // showing the status of a player if player does not move within time
        if(timeout){
            if(timeLeft === 0){
                status = "Winner:" + (nextMove ? player2 : player1)
                clearInterval(this.timer);
            }
        }
        return(
            <div className="Game-header">
                <div><h1>Timer: {this.state.timeLeft}</h1></div>
                <div>
                    <h1>{status}</h1>
                </div>
                <div><h3>{player1}: X</h3><h3>{player2}: O</h3></div>
                <div className="Rows">
                    {this.showBox(0)}
                    {this.showBox(1)}
                    {this.showBox(2)}
                </div>
                <div className="Rows">
                    {this.showBox(3)}
                    {this.showBox(4)}
                    {this.showBox(5)}
                </div>
                <div className="Rows">
                    {this.showBox(6)}
                    {this.showBox(7)}
                    {this.showBox(8)}
                </div>
            </div>
        )
    }
}
export default GameBoardComponent;