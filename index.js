// Code your solutions in this file

const writeCards = (array) => {
    let i = 0
    while ( i < array.length) {
        console.log(`Thank you ${array[i]} for the wonderful gift!`)
        i++
    }
}



const countDown = (num) => {
    while (num >= 0) {
        console.log(num--)
    }
}
console.log(countDown(10))