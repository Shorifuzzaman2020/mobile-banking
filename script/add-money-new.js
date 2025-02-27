document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount=getInputValueById('amount');
    const pinNumber=getInputValueById('pin');
    const accountNumber=document.getElementById('account-number').value;
    const mainBalance=getInnerTextById('balance');
    const selectedBank=document.getElementById('all-banks').value;
    if(amount<0){
        alert('Please Enter the positive amount');
        return;
    }
    if(amount && pinNumber){
        if(accountNumber.length===11){
            if(pinNumber===12345){
                const sum=mainBalance+amount;
                setInnerTextByIdandValue('balance',sum);
                const container=document.getElementById('transaction-container');

                const div=document.createElement('div');
                div.classList.add('bg-red-400');
                div.innerHTML=`
                <h1 class="text-yellow-300">Added Money from ${selectedBank}</h1>
                <p>${amount}</p>
                <p>Account Number: ${accountNumber}</p>
                `
                container.appendChild(div);

            }
            else{
                alert("Wrong pin");
            }
        }
        else{
            alert("Invalid Account Number");
        }
    }
    else{
        alert("Please fill up with valid input")
    }
});