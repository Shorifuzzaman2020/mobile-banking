document.getElementById('cash-out-section').style.display='none';
document.getElementById('add-money-section').style.display='none';
document.getElementById('adding-money-page').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('feature-box').style.display='none';
    document.getElementById('cash-out-section').style.display='none';
    document.getElementById('add-money-section').style.display='block';
})
document.getElementById('cash-out-page').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('feature-box').style.display='none';
    document.getElementById('add-money-section').style.display='none';    
    document.getElementById('cash-out-section').style.display='block';    

})