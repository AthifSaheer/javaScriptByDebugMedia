// ES10
const numberArray = [20, 9, [54, 10],[ 11,[1, 5], 12,], 13]

const globalCompany = [
    {
        id : 0,
        name : "Athif",
        age : 18,
        company:{
            companyId : 0,
            companyName : "Google",
        }
    }
]
if(globalCompany?.company?.companyName) {
    console.log(globalCompany.company.companyName)
}