// Spread Operators
const globalPlayer = {
    id: 0,
    name: "Bot",
    powerLevel: 100,
}

const player = {...globalPlayer}; // This three dots is spread operator
player.powerLevel = 50

console.log(player)
console.log(globalPlayer)

// Concat (rand variable kootti cherkkuka)
const globalarray = ["Asus","Mac","Lenovo"]
const globalarray2 = ["Mi","Samsung", "Realme"]

const array = globalarray.concat(globalarray2)
console.log(array)