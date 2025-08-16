const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let btn = document.querySelector("button");
let first = document.getElementById("first");
let second= document.getElementById("second");

let passLength = 16

btn.addEventListener("click", function(){

    first.textContent = " "
    second.textContent = " "

    for (i=0; i<passLength; i++) {

        
        let x = Math.floor(Math.random()*characters.length)
        first.textContent += characters[x] /*first.textContent = first.textContent + characters[x]*/
        second.textContent += characters[x]
        
    }
});


