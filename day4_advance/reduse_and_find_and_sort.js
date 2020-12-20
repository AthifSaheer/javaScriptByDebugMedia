console.log("------------ Reduse Method ----------------")

// Reduse
const numberArray = [10, 11, 12, 13]

const numberArray2 = numberArray.reduce((total, value) => total + value)
console.log(numberArray2)

console.log("------------ find Method ----------------")
// Find
const globalPlayer = [
    {
        id:0,
        name:"Athif",
        age:18,
    },
    {
        id:0,
        name:"Arshad",
        age:19,
    },
    {
        id:0,
        name:"Ashfaque",
        age:18,
    },
]

const sampleFind = globalPlayer.find(value => value.name === "Arshad")
console.log(sampleFind)

console.log("------------ Sort ----------------")
//Sort
const numberArray = [20, 9, 54, 10, 11, 12, 13]
const newnumberArray = numberArray.sort((x,y) => x - y)
console.log(numberArray)