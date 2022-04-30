

const calcBtn = document.querySelector(".js-btn");

const rate = document.querySelector('[name=rate]');
const amount = document.querySelector('[name=amount]');
const usdt = document.querySelector('.usdt');

const newRate = document.querySelector('[name=new-rate]');
const newAmount = document.querySelector('[name=new-amount]');
const newUsdt = document.querySelector('.new-usdt');

const avgRate = document.querySelector(".js-avg-rate");
const totalAmount = document.querySelector(".js-total-amount");
const totalUsdt = document.querySelector(".js-total-usdt");

let rateValue = 0;
let amountValue = 0;
let usdtValue = 0;

let newRateValue = 0;
let newAmountValue = 0;
let newUsdtValue = 0;

rate.addEventListener("change", () => {

    if (rate.value.includes(",")) {
        alert("Please use DOT instead of COMMA");
    }

    rateValue = Number(rate.value);

    amount.addEventListener("change", () => {

        if (rate.value.includes(",")) {
        alert("Please use DOT instead of COMMA");
        }

        amountValue = Number(amount.value);
        usdtValue = rateValue * amountValue;
        usdt.textContent = ` ${Number(usdtValue).toFixed(2)} $$$`;
    })
       
})

newRate.addEventListener("change", () => {
    
    if (rate.value.includes(",")) {
        alert("Please use DOT instead of COMMA");
    }


    newRateValue = Number(newRate.value);
    newAmount.addEventListener("change", () => {

        if (rate.value.includes(",")) {
        alert("Please use DOT instead of COMMA");
        }

        newAmountValue = Number(newAmount.value);
        newUsdtValue = newRateValue * newAmountValue
        newUsdt.textContent = ` ${Number(newUsdtValue).toFixed(2)} $$$`;
    })

})


function onCalcBtnClick() {

    let totalAmountValue = amountValue + newAmountValue;
    console.log(totalAmountValue);
    totalAmount.textContent = ` ${Number(totalAmountValue).toFixed(2)} $$$`;

    let totalUsdtValue = usdtValue + newUsdtValue;
     console.log(totalUsdtValue);
    totalUsdt.textContent = ` ${Number(totalUsdtValue).toFixed(2)} $$$`;

    let avgRateValue = totalUsdtValue / totalAmountValue;
    console.log(avgRateValue);
    avgRate.textContent = ` ${Number(avgRateValue).toFixed(2)} $$$`;
   
}

calcBtn.addEventListener('click',onCalcBtnClick);

