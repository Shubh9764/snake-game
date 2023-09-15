import {update as updateSnake, draw as drawSnake ,SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'

import { draw as drawFood,outSideGrid,update as updateFood } from './food.js'

let lastRenderTime = 0

const gameBoard = document.getElementById("game-board")
let gameOver = false

function main(currentTime){
    if(gameOver){
       if(confirm("You lost. Press ok to Restart"))
       window.location = '/'
       return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastrender = ( currentTime - lastRenderTime)/1000
    if(secondsSinceLastrender < 1 / SNAKE_SPEED){
        return
    }
    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()

}

function draw()
{
    gameBoard.innerHTML = ''
    
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}
