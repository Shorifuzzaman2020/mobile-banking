document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount=document.getElementById('amount').value;
    const convertedAmount=parseFloat(amount);
    const pinNumber=document.getElementById('pin').value;
    const mainBalance=document.getElementById('balance').innerText;
    const convertedMainBalance=parseFloat(mainBalance);

    if(pinNumber==="12345"){
        const sum=convertedMainBalance+convertedAmount;
        document.getElementById('balance').innerText=sum;
    }
    else{
        alert("Wrong pin");
    }
})