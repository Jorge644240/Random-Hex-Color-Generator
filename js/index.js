document.querySelector("button").addEventListener("click", () => {
    const values = "123456789ABCDEF";
    let newColor="";
    for (let i = 0; i < 6; i++) {
        newColor += values[Math.floor(Math.random()*15)];
    }
    document.querySelector("body").style.backgroundColor = `#${newColor}`;
    document.querySelector(".center p:last-of-type span").innerHTML = document.querySelector("body").style.backgroundColor;
});