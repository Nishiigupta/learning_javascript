let count =0;
// selecting al lthe buttons using querryselectorall
const btns = document.querySelectorAll('.btn')
const countervalue = document.getElementById('value');

btns.forEach(function(btn){
   btn.addEventListener('click',function (e){
        // getting the currently clicked button by currentTarget and its class by ClasslIST
        const styles = e.currentTarget.classList; 
        if (styles.contains("decrease")) {
            count--;
          } else if (styles.contains("increase")) {
            count++;
          } else {
            count = 0;
          }
        if(count>0){
            value.style.color = "green";
        }
        if(count<0){
            value.style.color="red";
        }
        if(count===0){
            value.style.color="black"
        }
        value.textContent = count;
       
    })
});