const btn = document.getElementById('btn');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');
const circle = document.getElementById('circle');
const rangeSpan = document.getElementById('range-span');

// №1
btn.onclick = function () {
    let text = document.getElementById('text').value;
    document.getElementById('square').style.backgroundColor = text;
};

// №2
e_btn.style.display = "none";

// №3
let rangeChange = function () {
    rangeSpan.textContent = range.value + "%";
    circle.style.height = range.value + "%";
    circle.style.width = range.value + "%";
};

range.addEventListener('input', rangeChange);








