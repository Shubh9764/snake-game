import { getInputDirection } from "./input.js";
export const SNAKE_SPEED = 5;
let newSegments = 0

const snakeBody = [{ x: 15, y: 15 }];

export function update() {
    addSegment()
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segement) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segement.y;
    snakeElement.style.gridColumnStart = segement.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segement,index) => {
        if(ignoreHead && index === 0){
            console.log("ignorehead")
            return false
        }

        return equalPostion(segement,position)
    })
}

function equalPostion(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegment(){
    for(let i = 0 ;i < newSegments;i++){
        snakeBody[snakeBody.length] = {...snakeBody[snakeBody.length - 1]}
    }
    newSegments = 0
}

export function getSnakeHead(){
    return snakeBody[0];
}
export function snakeIntersection(){
    // if(snakeBody.length < 3) return false;
    // for(let i = 3 ;i < snakeBody.length ; i++){
    //     if(snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y){
    //         return true
    //     }
    // }
    // return false;
    return onSnake(snakeBody[0],{ignoreHead:true})
}