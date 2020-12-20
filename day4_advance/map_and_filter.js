// Map Method
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
const newarray = globalPlayer.map((value) => value.name)
const newarray1 = globalPlayer.filter((value) => value.age === 18 && value.name === "Athif")
console.log(newarray)
console.log(newarray1)