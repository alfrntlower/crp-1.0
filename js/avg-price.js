

const calcBtn = document.querySelector(".btn");

const rate = document.querySelector('[name=rate]');
const amount = document.querySelector('[name=amount]');
const usdt = document.querySelector('.usdt');

const newRate = document.querySelector('[name=new-rate]');
const newAmount = document.querySelector('[name=new-amount]');
const newUsdt = document.querySelector('.new-usdt');

const avgRate = document.querySelector(".avg-rate");
const totalAmount = document.querySelector(".total-amount");
const totalUsdt = document.querySelector(".total-usdt");


function onCalcBtnClick() {

    const rateValue = + rate.value;
    const amountValue = + amount.value;
    const usdtValue = rateValue * amountValue
    usdt.textContent = usdtValue;

    const newRateValue = + newRate.value;
    const newAmountValue = + newAmount.value;
    const newUsdtValue = newRateValue * newAmountValue
    newUsdt.textContent = newUsdtValue;

    console.log(rateValue);

    const totalAmountValue = amountValue + newAmountValue;
    totalAmount.textContent = totalAmountValue;

    const totalUsdtValue = usdtValue + newUsdtValue;
    totalUsdt.textContent = totalUsdtValue;

    const avgRateValue = totalUsdtValue / totalAmountValue;
    avgRate.textContent = avgRateValue;


    
}

calcBtn.addEventListener('click',onCalcBtnClick);

