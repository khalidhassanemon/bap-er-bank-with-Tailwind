// addEvent handler withdraw btn
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withDrawField=document.getElementById('withdraw-field');
    const newWithdrawAmoutString=withDrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmoutString);

    const WithdrawTotallElement=document.getElementById('withdraw-totall');

    const previousWithdrawTotallString=WithdrawTotallElement.innerText;
    const previousWithdrawTotall=parseFloat(previousWithdrawTotallString);

    //calculate total Previous amount
    const currentWithdrawTotall=previousWithdrawTotall+newWithdrawAmount;

     WithdrawTotallElement.innerText=currentWithdrawTotall;

    withDrawField.value='';

  //get the balance total
  const balanceTotallElement=document.getElementById('balance-totall');
  const previousBalanceTotallString=balanceTotallElement.innerText;
  const previousBalanceTotal=parseFloat(previousBalanceTotallString);

  //calculate New balance Totall
const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
balanceTotallElement.innerText=newBalanceTotal;
})