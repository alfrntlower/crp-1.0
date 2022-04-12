
const calcBtn = document.querySelector(".js-btn");

const bet = document.querySelector('[name=bet]');

const long = document.querySelector('[name=long]');
const short = document.querySelector('[name=short]');

const price = document.querySelector('[name=price]');
const tp = document.querySelector('[name=takeprofit]');

const profit = document.querySelector(".js-profit");

let betValue = 0;
let priceValue = 0;
let tpValue = 0;

bet.addEventListener("change", () => {
    if (bet.value.includes(",")) {
        alert("Please use DOT instead of COMMA");
    }
})

price.addEventListener("change", () => {
    if (price.value.includes(",")) {
        alert("Please use DOT instead of COMMA");
    }
})

tp.addEventListener("change", () => {
    if (tp.value.includes(",")) {
        alert("Please use DOT instead of COMMA");
    }
})

function onCalcBtnClick() {

    if (long.checked) {
        calculateLong();
    }

    if (short.checked) {
        calculateShort();
    }

    if (long.checked === true && short.checked === true) {
        alert("Please select LONG or SHORT");
        profit.textContent = `-`;
        
    }

    if (long.checked === false && short.checked === false) {
        alert("Please select LONG or SHORT");
        profit.textContent = `-`;
        
    }

}

calcBtn.addEventListener("click", onCalcBtnClick);

function calculateLong() {

    betValue = Number(bet.value);
    priceValue = Number(price.value);
    tpValue = Number(tp.value);

    const profitValue = ((1/priceValue-1/tpValue)*betValue)*tpValue;
    profit.textContent = ` ${Number(profitValue).toFixed(2)} $$$`;

}

function calculateShort() {

    betValue = Number(bet.value);
    priceValue = Number(price.value);
    tpValue = Number(tp.value);

    const profitValue = (1/priceValue-1/tpValue)*(-betValue)*tpValue;
    profit.textContent = ` ${Number(profitValue).toFixed(2)} $$$`;

}