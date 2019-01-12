const array = [1, 2, 3, 4, 5]

const action = () => {
  return {
    index: 2
  }
}
const func = (number) => {
  return number
}

const newArray =  [
  ...array.slice(0, func(3)),
  ...array.slice(func(3) + 1)
        ]

console.log('old array' + array)
console.log('new array' + newArray)
