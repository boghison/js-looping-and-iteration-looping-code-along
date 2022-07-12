// Code your solutions in this file
function writeCards(names) {
    let greetingArray = [];
    for (let i = 0; i < names.length; i++) {
        greetingArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return greetingArray;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}