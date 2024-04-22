num=[5,5,5,5,5,5,5,5,5,5,5]
const first_three=num.slice(0,3).join("")
const second_three=num.slice(4,7).join("")
const next=num.slice(7).join("")
console.log(`(${first_three}) `+second_three+"-"+next)