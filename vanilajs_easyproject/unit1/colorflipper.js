let modeValue = {
    key : 0
}
const btn = document.getElementById('btn');
const color = document.querySelector(".rand_color");
const btn_simple = document.getElementById('btn_simple');
const btn_hex = document.getElementById('btn_hex');
let randomColor;
let garbage = '0';

btn.addEventListener("click", function() {
    garbage = '0';
    if (modeValue.key === 0) {
        randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        document.body.style.backgroundColor = randomColor;
        color.textContent = randomColor;
    } else {
        randomColor = randomKey(colors);
        document.body.style.backgroundColor = colors[randomColor];
        color.textContent = randomColor;
    }
})

btn_simple.addEventListener("click", function() {
    if(document.body.style.backgroundColor) {
        if(getKeyByValue(colors, color.textContent)) {
            color.textContent = getKeyByValue(colors, color.textContent);
        } else {
            garbage = color.textContent;
            color.textContent = "no simple.";
        }
    }
    modeValue.key = 1;
    btn_simple.style.backgroundColor = 'black';
    btn_hex.style.backgroundColor = 'white';
})

btn_hex.addEventListener("click", function() {
    if(document.body.style.backgroundColor) {
        if(garbage !== '0') {
            color.textContent = garbage;
        } else {
            color.textContent = colors[randomColor];
        }
    }
    modeValue.key = 0;
    btn_hex.style.backgroundColor = 'black';
    btn_simple.style.backgroundColor = 'white';
})

function randomKey(obj) {
    var ret;
    var c = 0;
    for (var key in obj)
        if (Math.random() < 1/++c)
           ret = key;
    return ret;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
