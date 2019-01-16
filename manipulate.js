
function create() {
    let textBox = document.getElementById("textBox").value;
    let text = document.createTextNode(textBox);
    let p = document.createElement("p");
    p.setAttribute("id", "p");
    p.appendChild(text);
    document.getElementById("contain").appendChild(p);
}

function remove() {
    let removeP = document.getElementById("p").remove("p");
}