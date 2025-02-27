
document.getElementById('cash-out-button').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber=document.getElementById('account-number').value;
    const amount=getInputValueById('cash-out-amount');
    const pinNumber=getInputValueById('pin');
    const mainBalance=getInnerTextById('balance');
    if(amount>mainBalance){
        alert('Insufficient Balance');
        return;
    }
    if(accountNumber.length===11){
        if(amount && pinNumber){
            if(pinNumber===12345){
                const sub=mainBalance-amount;
                setInnerTextByIdandValue('balance',sub);
                const container=document.getElementById('transaction-container');
                const p=document.createElement('p');
                p.innerText = `
                cashout ${amount} from ${accountNumber}
                `
                container.appendChild(p);
            }
            else{
                alert("Wrong pin");
            }
        }
        else{
            alert("Please fill up with valid input")
        }
    }
    else{
        alert('Invalid Account Number');
    }
})

    
