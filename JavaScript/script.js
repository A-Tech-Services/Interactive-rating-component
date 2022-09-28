let button = Array.from(document.getElementsByClassName("btn"));
let rateResult = document.querySelector(".rating");

let btnClicked = false;


button.map(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            btnClicked = true;
    });
});







function rate(){
    if(btnClicked){
        window.location.href = "http://127.0.0.1:5500/result.html";
    }
}

rateResult.innerText = `You selected 4 out of 5`;

