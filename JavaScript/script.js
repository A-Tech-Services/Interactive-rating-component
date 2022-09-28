let button = document.getElementsByClassName("btn");
let rateResult = document.querySelector(".rating");

button.addEventListener("click", () => {
    button.classList.add("active"), button = button.innerText;
})



// function rate(){
//     button.addEventListener("click", () => {
//         switch(button.innerText){
//             case 1:
//                 rateResult.innerText = `You selected ${button.innerText} out of 5`;
//             case 2:
//                 rateResult.innerText = `You selected ${button.innerText} out of 5`;
//             case 3:
//                 rateResult.innerText = `You selected ${button.innerText} out of 5`;
//             case 4:
//                 rateResult.innerText = `You selected ${button.innerText} out of 5`;
//             case 5:
//                 rateResult.innerText = `You selected ${button.innerText} out of 5`;
//             default:
//                 rateResult.innerText = "Error with our program";

//         }
//     });
// }