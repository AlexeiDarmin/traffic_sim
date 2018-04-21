const BOARD_SIZE = 112
const CAR_WIDTH = 4
const CAR_HEIGHT = 6
const NUMBER_OF_ROADS = 20

const VERTICAL = 1
const HORIZONTAL = 2
export class Map {
  board

  // Initializes an empty board
  constructor() {
    this.board = []
    for (let x = 0; x < BOARD_SIZE; ++x) {
      this.board.push([])
      for (let y = 0; y < BOARD_SIZE; ++y) {
        this.board[x].push(0)
      }
    }
  }

  // Generates a random board
  generateMap = () => {
    for (let x = 0; x < BOARD_SIZE; ++x) {
      for (let y = 0; y < BOARD_SIZE; ++y) {
        if (x === 0 || y === 0 || x === BOARD_SIZE - 1 || y === BOARD_SIZE - 1) {
          this.board[x][y] = 1
        }
      }
    }

    for (let i = 0; i < NUMBER_OF_ROADS; ++i) {
      this.generateLine()
    }
  }

  generateLine = () => {
    const startingEdge = getRandomInt(4, BOARD_SIZE - 4)
    const startingDepth = getRandomInt(4, BOARD_SIZE - 4)
    const directionality = getRandomInt(1, 2) // determines whether the road is horizontal or vertical

    debugger
    if (directionality === VERTICAL) {
      let count = startingDepth
      while (this.board[startingEdge][count] === 0) {
        this.board[startingEdge][count] = 1
        count -= 1
      }
      count = startingDepth + 1
      while (this.board[startingEdge][count] === 0) {
        this.board[startingEdge][count] = 1
        count += 1
      }
    } else if (directionality === HORIZONTAL) {
      let count = startingDepth
      while (this.board[count][startingEdge] === 0) {
        this.board[count][startingEdge] = 1
        count -= 1
      }
      count = startingDepth + 1
      while (this.board[count][startingEdge] === 0) {
        this.board[count][startingEdge] = 1
        count += 1
      }
    }
  }
  stringify = () => {
    for (let x = 0; x < BOARD_SIZE; ++x) {
      let output = ''
      for (let y = 0; y < BOARD_SIZE; ++y) {
        output += this.board[x][y]
      }
      console.log(output)
    }
  }
}

//Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
