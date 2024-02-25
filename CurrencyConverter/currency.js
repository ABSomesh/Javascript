let countryDropdowns = document.querySelectorAll(".dropdown select");
let convertBtn = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");
let msgRound = document.querySelector(".msgRound");
for(let countryDropdown of countryDropdowns) {
    for(let country in countryList) {
        let countryOption = document.createElement("option");
        countryOption.innerText = country;
        countryOption.value = country;
        if(countryDropdown.name === "from" && countryOption.value === "GBP"){
            countryOption.selected = "selected";
        } else if (countryDropdown.name === "to" && countryOption.value === "INR") {
            countryOption.selected = "selected";
        }
        countryDropdown.append(countryOption);
    }
    countryDropdown.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}
const updateFlag = (evt) => {
    let flagCountry = countryList[evt.value];
    let newFlag = `https://flagsapi.com/${flagCountry}/flat/64.png`;
    let img = evt.parentElement.querySelector("img");
    img.src = newFlag;
}
const currencyConvertor = async () => {
    let exchangeAmount = document.querySelector(".amount input");
    let exchangeAmountVal = exchangeAmount.value;
    if(exchangeAmountVal === "" || exchangeAmountVal < 1 ) {
        exchangeAmountVal = 1;
        exchangeAmount.value = "1";
    }
    let fromCurrVal = fromCurr.value.toLowerCase();
    let toCurrVal = toCurr.value.toLowerCase();
    let URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrVal}/${toCurrVal}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let convertedCurr = data[toCurrVal];
    let finalVal = exchangeAmountVal * convertedCurr;
    let finalRoundVal = Math.floor(finalVal);
    msg.innerText = `${exchangeAmountVal} ${fromCurrVal.toUpperCase()} = ${finalVal} ${toCurrVal.toUpperCase()}`;
    msgRound.innerText = `${exchangeAmountVal} ${fromCurrVal.toUpperCase()} = ${finalRoundVal} ${toCurrVal.toUpperCase()}`;
}
convertBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    currencyConvertor();
})
window.addEventListener("load", () => {
    currencyConvertor();
})