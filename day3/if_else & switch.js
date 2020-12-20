// If Else
let age = 55
if(age <= 10){
    console.log("Under 10")
}else if(age >= 11 && age <= 50){
    console.log("Between 10 & 50")
}else{
    console.log("Above 50")
}

// Switch

let gadgets = "Ipad"

switch(gadgets){                 // If
    case "mac":
        console.log("it is mac")
        break
    case "Ipad":                 // else if or elife(python)
        console.log("it is Ipad")
        break
    default:                    // else
        console.log("Non of above")
}