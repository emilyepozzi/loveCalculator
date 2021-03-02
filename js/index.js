// var n = Math.random();
// n = n * 8;
// n = Math.floor(n) + 1;
// console.log(n);

// 2 prompts that ask for the names of the people
// calculate random number that is a percentage bw 1 and 100 
// give back percentage in the form of an alert telling them what the Love Score is

var person1 = prompt("What is your name?");
var person2 = prompt("What is your crushes name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 75) {
    alert(person1 + " ❤️ " + person2 + " Love Score is : " + loveScore + "% !! " + "You love eachother like Kanye loves Kanye" );
}
if (loveScore > 30 && loveScore <= 75) {
    alert(person1 + " ❤️ " + person2 + " Love Score is : " + loveScore + "%");
}

if (loveScore < 30) {
    alert(person1 + " 💔 " + person2 +  " Love score is " + loveScore + "%." + " You go together like oil and water." );
}


