document.getElementById('cash-out-button').addEventListener('click',function(event){
    event.preventDefault();
    const amount=document.getElementById('cash-out-amount').value;
    const convertedAmount=parseFloat(amount);
    const pinNumber=document.getElementById('pin').value;
    const mainBalance=document.getElementById('balance').innerText;
    const convertedMainBalance=parseFloat(mainBalance);

    if(amount && pinNumber){
        if(pinNumber==="12345"){
            const sub=convertedMainBalance-convertedAmount;
            document.getElementById('balance').innerText=sub;
        }
        else{
            alert("Wrong pin");
        }
    }
    else{
        alert("Please fill up with valid input")
    }
})