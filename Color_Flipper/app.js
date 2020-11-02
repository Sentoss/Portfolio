const changer = document.getElementById("changer");
const back = document.body;
const colors = ["aqua", "red", "blue", "green", "grey"];

function change_color(obj, btn)
{
    let index = Math.floor(Math.random() * colors.length)
    obj.style.backgroundColor = colors[index];
    btn.value = "Background-Color: " + colors[index];
}

changer.addEventListener("mousedown", () => change_color(back, changer));
