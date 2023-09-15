import {onSnake,expandSnake} from './snake.js'

let food = {x:10,y:1}
const EXPANSION_RATE = 4
const GRID_SIZE = 31

export function update() {
    if(onSnake(food)){
        console.log("expand")
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
  }
  
  export function draw(gameBoard) {
    console.log("draw food")
      const foodElement = document.createElement("div");
      foodElement.style.gridRowStart = food.y;
      foodElement.style.gridColumnStart = food.x;
      foodElement.classList.add("food");
      gameBoard.appendChild(foodElement);
  }

  function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
  }
  const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y:Math.floor(Math.random() * GRID_SIZE) + 1
    }
  }

  export function outSideGrid(position){
    return (
        position.x < 1 || position.x > GRID_SIZE  ||
        position.y < 1 || position.y > GRID_SIZE 
    )
  }