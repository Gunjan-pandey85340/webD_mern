// let n = prompt("enter no.");
// n = parseInt(n);
// for(i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// for(let i = 1;i<=3;i++){
//     for(let j = 1;j<=3;j++){
//         console.log(j);
//     }
// }


// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

const favMovie = "avatar";
let guess = prompt("guess my fav movie");
while(guess != favMovie){
    if(guess == 'quit'){
        console.log('you quit');
        break;
    }
    guess = prompt("wrong guess. please try again");
}

if(guess ==  favMovie){
    console.log("congrats!!")
}
// let i = 1;
// while(i<=5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }