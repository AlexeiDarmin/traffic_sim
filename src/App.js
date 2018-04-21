import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as helpers from './helpers/map_generator'
import RoadBlock from './components/road_block'
import EmptySpace from './components/empty_space'

let map = new helpers.Map()

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      board: [[]]
    }
  }

  componentDidMount(){
    map.generateMap()
    this.setState({
      board: map.board
    })
    this.forceUpdate()
  }

  renderBoard = () => {
    const { board } = this.state
    debugger
    return board.map((row, rIndex) => {
      return row.map((col, cIndex) => {
        if (board[rIndex][cIndex] !== 0) {
          const style = {
            marginLeft: `${cIndex * 4}px`,
            marginTop: `${rIndex * 4}px`,
          }
          return <RoadBlock key={`${rIndex}-${cIndex}`} style={style}/>
        }
          // return <EmptySpace  key={`${rIndex}-${cIndex}`} />
      })
    })
  }
  render() {
    const { board } = this.state
    map.stringify()
    return (
      <div className="App">
        {this.renderBoard()}
        <RoadBlock />
      </div>
    )
  }
}

export default App;
