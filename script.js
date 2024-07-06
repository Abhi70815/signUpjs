form=document.querySelector('form');
button = document.querySelector('button');
// button.innerText="hi"
button.addEventListener('click', (e)=>{
    e.preventDefault();
    let email=document.getElementById('email').value;
    let pass=document.getElementById('password').value;
    

    let msg1=document.getElementById('msg1');
    let msg2=document.getElementById('msg2');
    if(email.includes('@') && email.includes('.') && email.length>2){
        msg1.style.display="none";
    }
    else{
        msg1.style.display="block";
    }
    if(pass.length<=8){
msg2.style.display="block";
    }
    else{
        msg2.style.display="none";
    }
    if(email.includes('@') && email.includes('.') && email.length>2 && pass.length>=8){
        msg1.style.display="none";
        msg2.style.display="block";
        msg2.innerHTML="All good to go!";
        msg2.style.color="green";
        msg2.style.fontSize="18px"
    }
})