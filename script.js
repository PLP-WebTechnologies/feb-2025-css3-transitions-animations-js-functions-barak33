document.addEventListener("DOMContentLoaded", () => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
        document.getElementById("greeting").textContent = `Welcome back, ${storedName}!`;
    }
});

function storeData() {
    const name = document.getElementById("username").value;
    if (name) {
        localStorage.setItem("username", name);
        document.getElementById("greeting").textContent = `Hello, ${name}!`;
    }
}

document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").classList.toggle("active");
});
