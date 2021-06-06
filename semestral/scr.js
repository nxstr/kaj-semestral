let res = false;
let stop = false;
let animals_v = false;
let fruit_v = false;
let flowers_v = false;
let colors_v = false;
let rand_v = false;
let animals = ['cat', 'dog', 'ferret'];
let fruit = ['apple', 'orange', 'peach'];
let flowers = ['rose', 'bellflower', 'lily'];
let colors = ['yellow', 'blue', 'purple'];
let rand = ['window', 'telephone', 'javascript'];
const canvas = document.getElementById('canv');
var ctx = canvas.getContext("2d");
const WIDTH = 200;
const HEIGHT = 200;
var counter = 0;

function draw() {
    if (counter === 1) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(10, 190);
        ctx.lineTo(100, 190);
        ctx.moveTo(50, 190);
        ctx.lineTo(50, 20);
        ctx.stroke();
    }
    if (counter === 2) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(30, 20);
        ctx.lineTo(155, 20);
        ctx.stroke();
    }
    if (counter === 3) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(140, 20);
        ctx.lineTo(140, 60);
        ctx.stroke();
    }
    if (counter === 4) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(140, 75, 15, 0, Math.PI * 2, false);
        ctx.stroke();
    }
    if (counter === 5) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(140, 90);
        ctx.lineTo(140, 125);
        ctx.stroke();
    }
    if (counter === 6) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(140, 90);
        ctx.lineTo(120, 120);
        ctx.moveTo(140, 90);
        ctx.lineTo(160, 120);
        ctx.stroke();
    }
    if (counter === 7) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(140, 125);
        ctx.lineTo(120, 150);
        ctx.moveTo(140, 125);
        ctx.lineTo(160, 150);
        ctx.stroke();
    }
}



document.forms.game.stop.onsubmit = function() {
    stop = true;
    console.log(res);
    return true;
};
var count = 0;




$(document).ready(function() {
    $("#animals").click(function() {
        animals_v = true;
        return true;
    })
})
$(document).ready(function() {
    $("#fruit").click(function() {
        fruit_v = true;
        return true;
    })
})
$(document).ready(function() {
    $("#flowers").click(function() {
        flowers_v = true;
        return true;
    })
})
$(document).ready(function() {
    $("#colors").click(function() {
        colors_v = true;
        return true;
    })
})
$(document).ready(function() {
    $("#random").click(function() {
        rand_v = true;
        return true;
    })
})
document.forms.category.onclick = function() {
    if (animals_v === true || fruit_v === true || flowers_v === true || colors_v === true || rand_v === true) {
        var list = document.querySelectorAll(".but");
        var index;
        for (index = 0; index < list.length; ++index) {
            list[index].disabled = true;
        }
    } else if (stop === true) {
        res = true;

    }
    let word = null;
    if (animals_v === true) {
        word = animals[Math.floor(Math.random() * animals.length)];
    } else if (fruit_v === true) {
        word = fruit[Math.floor(Math.random() * fruit.length)];
    } else if (flowers_v === true) {
        word = flowers[Math.floor(Math.random() * flowers.length)];
    } else if (colors_v === true) {
        word = colors[Math.floor(Math.random() * colors.length)];
    } else if (rand_v === true) {
        word = rand[Math.floor(Math.random() * rand.length)];
    }
    console.log(word);
    let words = [];
    let secret = [];
    for (let i = 0; i < word.length; i++) {
        words[i] = word[i];
    }
    for (let i = 0; i < word.length; i++) {
        secret[i] = "-";
    }
    let attempt = 6;
    document.getElementById("array").textContent = secret.join("");
    document.getElementById("attempt").textContent = 'attempts left: ' + (attempt + 1);
    console.log(words);
    console.log(secret);

    let letter = '';
    let flag = words.length;
    let usedLetters = [];
    let letter_v = false;
    console.log(attempt);
    document.forms.first.onsubmit = function() {

        var letter = this.message.value;
        attempt--;
        console.log(letter);
        console.log(attempt);

        letter = letter.toLocaleLowerCase();
        document.getElementById("array").textContent = secret.join("");
        document.getElementById("attempt").textContent = 'attempts left: ' + (attempt + 1);
        document.getElementById("tex").value = "";
        let flag2 = false;

        for (let i = 0; i < usedLetters.length; i++) {
            if (usedLetters[i] == letter) {
                flag2 = true;
            }
        }
        if (letter.length !== null) {
            if (flag2) {
                attempt++;
                alert("You have used this letter!");
            } else if (letter.length !== 1) {
                attempt++;
                alert("One letter, please!");
            }
        }
        for (let i = 0; i < word.length; i++) {

            if (letter === word[i]) {
                secret[i] = letter;
                document.getElementById("array").textContent = secret.join("");
                letter_v = true;
                words[i] = null;
                console.log(secret);
                console.log(words);
                flag--;
                attempt++;
            } else if (letter !== word[i]) {
                count++;
            }
            if (words.every(element => element === null) === true && attempt >= 0) {
                document.getElementById("name").textContent = 'You win. The word was: ' + word;
            }

        }
        if (letter_v === false) {
            counter++;
        }
        draw();
        letter = letter.toLocaleLowerCase();
        usedLetters.push(letter);
        letter_v = false;
        if (attempt < 0) {
            document.getElementById("name").textContent = 'You lose. Want to try once again?';
        }

        return res;

    };
};