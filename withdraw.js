// addEvent handler withdraw btn
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withDrawField=document.getElementById('withdraw-field');
    const newWithdrawAmoutString=withDrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmoutString);

    const WithdrawTotallElement=document.getElementById('withdraw-totall');

    const previousWithdrawTotallString=WithdrawTotallElement.innerText;
    const previousWithdrawTotall=parseFloat(previousWithdrawTotallString);


    const currentWithdrawTotall=previousWithdrawTotall+newWithdrawAmount;

     WithdrawTotallElement.innerText=currentWithdrawTotall;

    withDrawField.value='';

})