const calcBtn = document.querySelector(".js-btn");

const usdt = document.querySelector('[name=usdt]');
const apy = document.querySelector('[name=apy]');

const profitPerYear = document.querySelector(".js-profit-per-year");
const profitPerMonth = document.querySelector(".js-profit-per-month");
const profitPerDay = document.querySelector(".js-profit-per-day");

let usdtValue = 0;
let apyValue = 0;

apy.addEventListener("change", () => {
    if (apy.value.includes(",")) {
        alert("Please use DOT instead of COMMA");
    }
})

function onCalcBtnClick() {
    
    usdtValue = Number(usdt.value);
    apyValue = Number(apy.value);


    const profitPerYearValue = (usdtValue * apyValue / 100);
    profitPerYear.textContent = ` ${Number(profitPerYearValue).toFixed(2)} $$$`;

    const profitPerMonthValue = (usdtValue * apyValue / 100) / 12;
    profitPerMonth.textContent = ` ${Number(profitPerMonthValue).toFixed(2)} $$$`;

    const profitPerDayValue = profitPerMonthValue / 31;
    profitPerDay.textContent = ` ${Number(profitPerDayValue).toFixed(2)} $$$`;

}

calcBtn.addEventListener("click", onCalcBtnClick);





