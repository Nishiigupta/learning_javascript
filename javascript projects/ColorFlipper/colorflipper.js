const colors=["green","red","rgba(133,122,200)","#f15025"]
// we select the elements/parts which we want to have any operation or want to work with
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click',()=>{
    // generate randome numbers by calling getRandom method
    const randomNumbers = getRandom(); 
    document.body.style.backgroundColor = colors[randomNumbers];
    color.textContent = colors[randomNumbers]
});
function getRandom(){
    return Math.floor(Math.random()*colors.length)
}
