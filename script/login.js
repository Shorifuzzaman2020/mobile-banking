document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber=document.getElementById('account-number').value;
    const pinNumber=document.getElementById('pin').value;
    if(accountNumber.length===11){
        if(pinNumber==12345){
            window.location.href="./main.html";
        }
        else{
            alert("invalid pin")
        }
    }
    else{
        alert('need valid input')
    }
})
