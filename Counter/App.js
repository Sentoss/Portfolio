const Counter = document.getElementById("Number");
const increase = document.getElementById("Increase");
const reset = document.getElementById("Reset");
const decrease = document.getElementById("Decrease");
let no = 0;

let Set = x => Counter.innerHTML = x;
function Increase()
{
    no += 1;
    Set(no);
}

function Reset()
{
    no = 0;
    Set(no);
}

function Decrease()
{
    no -= 1;
    Set(no);
}

increase.addEventListener("click", () => Increase());
reset.addEventListener("click", () => Reset());
decrease.addEventListener("click", () => Decrease());
