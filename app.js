// var array = ["Saad","Rafeh","Maaz","Usama","Areeb","Maaz"]
// var newarray = array.indexOf("Maaz",3)
// console.log(newarray)

// var nam = "Saad"
// var newnam = nam.indexOf("a",2)
// console.log(newnam)
// 0       1       2       3        4         5
// var array = ["Saad", "Rafeh", "Maaz", "Usama", "Areeb", "Maaz"]
// var newarray = array.lastIndexOf("Maaz",4)
// console.log(newarray)


// var text = "This is the world war 2"
// var text2 = text.indexOf("world war 2", )
// console.log(text2)

// var names = "Saad"
// var newnames = names.charAt(2)
// console.log(newnames)
// var text = "This is blue color blue"
// var newtext = text.replace(/blue/g,"red")
// console.log(newtext)


// var num = 3.5
// console.log(Math.round(num))

// var num = 3.0
// console.log(Math.ceil(num))

// var num = 3.9
// console.log(Math.floor(num))

// console.log(Math.random()* 6)

// var heads = prompt("Enter Name")
// var tails = prompt("Enter Name")
// var newone = Math.random()*2;
// var some = Math.floor(newone)
// if (some == 0) {
//     alert("Heads " + heads + "Wins")
// }
// else {
//     alert("Tails " + tails + "Wins")
// }

var heads = prompt("Enter name 1")
var tails = prompt("Enter name 1")

var random = Math.random()*2;
var ekor = Math.floor(random)
if(ekor == 0){
    alert("Heads "+heads+ " Wins")
}
else{
    alert("Tails "+tails+ " Wins")
}