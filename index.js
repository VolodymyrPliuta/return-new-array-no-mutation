const array = [1, 2, 3, 4, 5]

const action = () => {
  return {
    index: 2
  }
}
const func = (number = 3) => {
  return {
    number
}
}

const newArray =  [
  ...array.slice(0, func()),
  ...array.slice(func() + 1)
        ]

console.log('old array' + array)
console.log('new array' + newArray)
