for (var count =1; count <= 10; count++) {
    console.log(count);
}
for (var count =1; count <= 10; count++){
    console.log(count);
}

// 1 >> 2
// 2 >> 3
// 3 >> 4
// 4 >> 5
// will go like this until this condition is false 5 >> 6 etc



//count++ 

//count = count +1
//3 = 3 + 1

for (var i = 0; i <= 25; i++) { // will go from 1 - 25 
    console.log(i);
}

for (var i = 5; i < 26; i++) {
    console.log(i);
}

var colors = [ // array
    "red",
    "blue",
    "green",
    "yellow"
    
];

var numberOfColors = colors.length; // length of the array

for (var i =0; i <= numberOfColors; i++){
    // i want to show a message when the green color comes in the array
    if(colors[i] === "green"){ // colors[2]
        console.log(' i have chosen green')
    }
}

var counter = 100;
while (counter >= 10){
    console.log ("adding:", counter);
    counter++
}
var isSubsribed = true;
do {
    emailUserWeeklySpecials(userID);
} while (isSubscribed);