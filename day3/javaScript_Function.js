
console.log("----------- Function ------------")
// Function
function approved(){
    console.log("Approved")
}
function checking(){
    console.log("checking")
}
function myFunc(z){
    let a = 10;
    let b = z;
    let c = a + b
    checking()
    approved()
    return c
}
function last(){
    console.log(myFunc(36) + " ✓")
    return
}
console.log("Result is " + myFunc(18))
console.log(last())

console.log("----------- For loop ------------")
