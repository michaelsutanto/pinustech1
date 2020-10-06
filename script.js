let el = document.getElementById("hello")
el.innerText = "Hello from JavaScript!"

el.addEventListener("click", handleClick)

function handleClick(e) {
    console.log(e);
    e.target.innerText += "Clicked!"
}

let h2 = document.createElement("h2")
h2.innerText = "This is a new element!"
document.body.appendChild(h2)