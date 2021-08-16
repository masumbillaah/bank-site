function getInputValue(inputId) {
    /* const depositInput = document.getElementById(inputId);
 const depositAmountText = depositInput.value;
 const depositAmount = parseFloat(depositAmountText); */
    const inputField = document.getElementById(inputId);
 const inputAmountText = inputField.value;
 const amountValue = parseFloat(inputAmountText);
 // clear
 inputField.value ="";
 
 return amountValue;

}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount,isAdd) {
    const totalBalance = document.getElementById('total-balance')
const totalBalanceText = totalBalance.innerText;
if (isAdd == true) {
    const previousBalanceTotal = parseFloat(totalBalanceText);
totalBalance.innerText = previousBalanceTotal + amount;
}
else {
    const previousBalanceTotal = parseFloat(totalBalanceText);
    totalBalance.innerText = previousBalanceTotal - amount;
}
}




document.getElementById('deposit-btn').addEventListener('click', function(){
//     const depositInput = document.getElementById('deposit-amount');
//  const depositAmountText = depositInput.value;
//  const depositAmount = parseFloat(depositAmountText)
//  console.log(depositAmount);
const depositAmount = getInputValue('deposit-amount')

updateTotalField('total-deposit', depositAmount);
/* get current deposit */
//  const depositTotal = document.getElementById('total-deposit');
//  const depositTotalText = depositTotal.innerText;
//  const previousDepositTotal = parseFloat(depositTotalText)
//  depositTotal.innerText = previousDepositTotal + depositAmount;
//  console.log(depositTotalText)
/* update balance */
/* const totalBalance = document.getElementById('total-balance')
const totalBalanceText = totalBalance.innerText
const previousBalanceTotal = parseFloat(totalBalanceText)
totalBalance.innerText = previousBalanceTotal + depositAmount */

updateBalance(depositAmount, true);
    // // clear
    // depositInput.value ="";
})



document.getElementById('withdraw-btn').addEventListener('click', function(){
//     const withdrawInput = document.getElementById('withdraw-amount');
//  const withdrawAmountText = withdrawInput.value;
//  const withdrawAmount = parseFloat(withdrawAmountText)
// //  console.log(depositAmount);
const withdrawAmount =  getInputValue("withdraw-amount");
// withdraw Total
/*  const withdrawTotal = document.getElementById('total-withdraw');
 const withdrawTotalText = withdrawTotal.innerText;
 const previousWithdrawTotal = parseFloat(withdrawTotalText)
 withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount */
 updateTotalField('total-withdraw', withdrawAmount);
 
//  console.log(depositTotalText)
/* update balance */
/* const totalBalance = document.getElementById('total-balance')
const totalBalanceText = totalBalance.innerText
const previousBalanceTotal = parseFloat(totalBalanceText)

totalBalance.innerText = previousBalanceTotal - withdrawAmount */
updateBalance(withdrawAmount, false);
    // // clear
    // withdrawInput.value ="";
});