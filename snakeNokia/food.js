import {onSnake, expandSnake} from './snake.js'

let food = { x: 0, y: 0}
const expasionRate = 1 

export function update(){
    if (onSnake(food)){
        expandSnake(expasionRate)
        food = { x:20, y:10}
    }
 }
 
 export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
 
 }