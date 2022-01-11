const btn = document.getElementById('btn');
const circle = document.getElementById('circle');
const rangeSpan = document.getElementById('range-span');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');

btn.onclick = function () {
    let text = document.getElementById('text').value;
    document.getElementById('square').style.backgroundColor = text;
};

e_btn.style.display = "none";

rangeSpan.textContent = range.value + "%";
let rangeChange = function () {
    rangeSpan.textContent = range.value + "%";
    circle.style.height = range.value + "%";
    circle.style.width = range.value + "%";
};

range.addEventListener('input', rangeChange);








