import React from 'react';
import './App.css';
import GameBoardComponent from './components/GameBoardComponent'

class App extends React.Component { 
  constructor(props){
    super(props)
    this.state={
      player1: '',
      player2: '',
      show: false
    }
  }
  handleChange = (e) =>{
    this.setState({ player1: e.target.value });
  }
  handleChangePlayer2 = (e) =>{
    this.setState({ player2: e.target.value });
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({show: true})
  }
  render(){
    if(this.state.show){
      return(
        <GameBoardComponent player1={this.state.player1} player2={this.state.player2} />
      )
     
    }
    return (
      <div className="App">
        <div className="App-header">
          <div><h1>Welcome to Tic-Tac-Toe</h1></div>
          <div>
              <form onSubmit={this.mySubmitHandler}>
              <input type="text" placeholder="Player 1 name" value={this.state.player1} required onChange={this.handleChange}/>
              <input type="text" placeholder="Player 2 name" value={this.state.player2} required onChange={this.handleChangePlayer2}/>
              <input type="submit" value="Start Game" id="button" />
              </form>
          </div>       
        </div>
      </div>
    );
  }  
}

export default App;
