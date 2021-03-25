// hexadecimal colors are generated using 0-9 nums and A-F alphabets hence we are using the hex array
const hex = [0,1,2,3,4,5,,6,7,8,9,"A","B","C","D","E","F"]
const button = document.getElementById("btn")
const color = document.querySelector('.color')

// Adding eventlistener to perform work when button is clicked
document.addEventListener('click',()=>{
    let hexcolor ="#";
    for(let i = 0;i<6;i++){
         hexcolor += hex[getRandomNumber()]; 
    }
    color.textContent = hexcolor;
    document.body.style.background = hexcolor;
});

// a function to generate random 6 digit nums & alphabets from hex array
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}