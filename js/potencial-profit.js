const calcBtn = document.querySelector(".btn");

const rate = document.querySelector('[name=rate]');
const amount = document.querySelector('[name=amount]');
const usdt = document.querySelector('.usdt');

const futureRate = document.querySelector('[name=future-rate]');

const totalUsdt = document.querySelector(".total-usdt");
const usdtProfit = document.querySelector(".usdt-profit");
const profitX = document.querySelector(".profit-x");
const profitPercent = document.querySelector(".profit-percent");

let rateValue = 0;
let amountValue = 0;
let usdtValue = 0;

let futureRateValue = 0;

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

futureRate.addEventListener("change", () => {
    
    if (rate.value.includes(",")) {
        alert("Please use DOT instead of COMMA");
    }

    futureRateValue = Number(futureRate.value);
    
})

function onCalcBtnClick() {
    
  //  newRateValue = Number()
    const totalUsdtValue = futureRateValue * amountValue;
    totalUsdt.textContent = ` ${Number(totalUsdtValue).toFixed(2)} $$$`;
    
    const usdtProfitValue = totalUsdtValue - usdtValue;
    usdtProfit.textContent = ` ${Number(usdtProfitValue).toFixed(2)} $$$`;

    const profitXValue = futureRateValue / rateValue;
    profitX.textContent = ` ${Number(profitXValue).toFixed(1)} X`;

    const profitPercentValue = (totalUsdtValue / usdtValue * 100) - 100;
        profitPercent.textContent = ` ${Number(profitPercentValue).toFixed(0)} %`;
    
    


}

calcBtn.addEventListener("click", onCalcBtnClick);