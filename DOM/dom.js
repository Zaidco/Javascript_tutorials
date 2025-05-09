const btn = document.getElementById("button");
console.log(btn);


const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";

    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
        // Math.random koi bhi random value de deta hai ranging from 0 to 0.99
        // But if we multiply it with 16, then we get values upto 15 (which is our need)
        // Math.floor helps in rounding off thr values. Eg- 10.34 to 10
    }
    return cons;
};

console.log(randomColor());

function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);
