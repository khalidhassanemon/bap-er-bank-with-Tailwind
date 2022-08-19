//add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the amount from the deposit input field
    //for input field use .value to the value inside the input field
    const depositField=document.getElementById('deposit-field');
const newDepositeAmountString=depositField.value;
const newDepositAmount=parseFloat(newDepositeAmountString);

    //get the current deposit totall
    //for non-input
    const depositTotalElement=document.getElementById('deposit-total');

    const previousDepositTotalString=depositTotalElement.innerText;

    const previousDepositTotall=parseFloat(previousDepositTotalString);
    

    const currentDepositTotall=previousDepositTotall+newDepositAmount;

    //set the deposittotall
    depositTotalElement.innerText=currentDepositTotall;

    //get balance current totall
    const balanceTotalElement=document.getElementById('balance-totall');
    const previousBalanceTotallString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotallString);

//calculate current totall balance
const currentBalanceTotall=previousBalanceTotal+newDepositAmount;

//set the balance totall
balanceTotalElement.innerText=currentBalanceTotall;
    depositField.value='';
})


