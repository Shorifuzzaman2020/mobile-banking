
document.getElementById('cash-out-section').style.display='none';
document.getElementById('transaction').style.display='none';
document.getElementById('adding-money-page').addEventListener('click',function(event){
    event.preventDefault();
    handleToggle('add-money-section','block');
    handleToggle('cash-out-section','none');
    handleToggle('transaction','none');
    
})
document.getElementById('cash-out-page').addEventListener('click',function(event){
    event.preventDefault();
    handleToggle('add-money-section','none');
    handleToggle('cash-out-section','block');
    handleToggle('transaction','none');
    
})
document.getElementById('transaction-box').addEventListener('click',function(event){
    event.preventDefault();
    handleToggle('add-money-section','none');
    handleToggle('cash-out-section','none');
    handleToggle('transaction','block');
    
})

function handleToggle(id,status){
    document.getElementById(id).style.display=status;
}