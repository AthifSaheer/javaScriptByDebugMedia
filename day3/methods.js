// Sting Method
let q = "Athif Saheer"
console.log(q.length)
console.log(q.indexOf("t"))
console.log(q.lastIndexOf("e"))
console.log(q.includes("Athif"))
console.log(q.slice(0, 10))

console.log("----------- Number Method ------------")
// Number Method
let a = "10"
let b = 15
console.log(typeof parseInt(a))
console.log(b.toString())

console.log("----------- Array Method ------------")
// Array Method
let array = [10, "loop", "bee", "git"]
array[1] = "Adobe" //POsition mattaaan
array.unshift("Apple") // Arry yudeFist il add avaan
array.push("Asus") // Array yude avasanam add avaaan 
array.pop() // Array yude avasanam Remove avaaan
array.shift() // Arry yudeFist il REmove avaan
array.splice(0, 1) // Remove cheyyaaan
array.splice(0,1, 2, 3) // Add cheyyaaan
let newarray = array.slice(2)
console.log(array)
console.log(newarray)

                // Sorting & Reversing in array
let sorting_array = ["c", "b", "a"]
sorting_array.sort()
console.log(sorting_array)

let reverse_array = ["a", "b", "c"]
reverse_array.reverse()
console.log(reverse_array)

// Object method

let myobj = {
    name : "athif",
    age : 18
}
myobj.name = "Athif saheer"
delete myobj.age
console.log(myobj)