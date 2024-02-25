alert("Blance checking app")

console.log("Balance is wait wait")

var choose = prompt("First which app do you use write below one of them, Phone pe , Bharat pe , google pay or none of these.")

if(choose=='Phone pe'){
    alert("so pls use phone pe app , Don't belive at these type of faltu app made by any one.") 
} else if(choose=='Bharat pe'){
    alert("so pls use Bharat pe app , Don't belive at these type of faltu app made by any one.")    
} else if(choose=='google pay'){
    alert("so pls use google pay app , Don't belive at these type of faltu app made by any one.")    
}  else if(choose=='none of these'){
    var b = prompt("pls enter your birth year")    
} else {
    alert("pls write as it is as given  Phone pe , Bharat pe , google pay or none of these")
}

var c = 2024

var r =(c-b)
console.log(r)
if(r>18){
   alert("you are greater than 18 years pls create a  bank account")
} else if(r==18){
    alert("you are 18 year old , so you can able to create a bank account ")
} else if(r<18){
    alert("Bache jaldi website band karo")
    confirm("if you not closing this website in 10 min i call police 100 dialing")
}