const BASE_URL="https://latest.currency-api.pages.dev/v1/currencies"

const dropdowns = document.querySelectorAll(".dropdown select");

const btn=document.querySelector(".convert-btn");

const fromCurr=document.querySelector(".from select");

const toCurr=document.querySelector(".to select");

let liveRate=document.getElementById("liveRateDisplay");

let reverseLiveRate=document.getElementById("reverseLiveRate");

let resultMeta = document.getElementById("resultMeta");

let amountSymbol = document.querySelector(".amount-symbol");

const exchangeBtn = document.querySelector(".exchange-btn");

const fromFlag=document.querySelector(".from img");

const toFlag=document.querySelector(".to img");

const resultNumber=document.getElementById("resultNumber");

const toSymDisplay=document.getElementById("toSymDisplay");

const resultCode=document.getElementById("resultCode");

//

const fromAmtcalc=document.getElementById("fromAmtcalc");

const calcFromSym=document.getElementById("calcFromSym");

const calcLiveRate=document.getElementById("calcLiveRate");

const calcFinalAmount=document.getElementById("calcFinalAmount");

const calcToSym=document.getElementById("calcToSym");

let i=0;

for(let select of dropdowns){
  for(currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText=currCode;
    newOption.value=currCode;
    if(select.name==="from" && currCode==="USD"){
      newOption.selected="selected";
    }
    else if(select.name==="to" && currCode==="INR"){
      newOption.selected="selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change",function(evt){
    updateFlag(evt.target);
    
  })
}

fromCurr.addEventListener("change",function(evt){
  updateSym(evt.target);
})

function updateFlag(element) {
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}
function updateSym(element){
  let currCode=element.value;
  let currSym=currencySymbols[currCode];
  amountSymbol.innerText=currSym;

}


exchangeBtn.addEventListener("click",function(){
  let temp=fromCurr.value;
  fromCurr.value=toCurr.value;
  toCurr.value=temp;

  let temp1=fromFlag.src;
  fromFlag.src=toFlag.src;
  toFlag.src=temp1;

  let currCode=fromCurr.value;
  let currSym=currencySymbols[currCode];
  amountSymbol.innerText=currSym;

  exchangeBtn.style.transform = 'rotate(180deg)';
  setTimeout(() => { exchangeBtn.style.transform = 'rotate(0deg)'; }, 300);

})

btn.addEventListener("click",async function(){

  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Fetching...`;
  btn.disabled  = true;
  btn.style.animation = 'none';

  let amount=document.querySelector(".input-amount");
  if(amount.value ==="" || amount.value<1){
    amount.value=1;
  }

  const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  const reverseURL=`${BASE_URL}/${toCurr.value.toLowerCase()}.json`;

  let response=await fetch(URL);
  let reverseResponse=await fetch(reverseURL);

  let data=await response.json();
  let reverseData = await reverseResponse.json();

  let fromcurr=fromCurr.value.toLowerCase();

  let tocurr=toCurr.value.toLowerCase();

  let rate=data[fromcurr][tocurr];

  let reverseRate=reverseData[tocurr][fromcurr];

  let finalAmount=Number(amount.value)*rate;

  liveRate.innerText=`1 ${fromCurr.value} = ${rate.toFixed(2)} ${toCurr.value}`;

  reverseLiveRate.innerText=`1 ${toCurr.value} = ${reverseRate.toFixed(2)} ${fromCurr.value}`;

  resultMeta.innerHTML=`1 USD = ${rate.toFixed(2)} INR<br><span style="color:#6A6A6A;font-size:10px">Mid-market rate</span>`

  resultNumber.innerText=finalAmount.toFixed(2);

  toSymDisplay.innerText=currencySymbols[toCurr.value];

  resultCode.innerText=toCurr.value;

  fromAmtcalc.innerText=amount.value;

  calcFromSym.innerText=" "+fromCurr.value;

  calcLiveRate.innerText=" "+rate.toFixed(2);

  calcFinalAmount.innerText=" "+finalAmount.toFixed(2);

  calcToSym.innerText=" "+toCurr.value;

  resultCard.style.animation = 'none';
  resultCard.style.opacity   = '0';
  resultCard.style.transform = 'translateY(20px)';

  resultCard.offsetHeight;
  

  setTimeout(() => {
      resultCard.style.transition = 'none';
      resultCard.style.animation  = 'resultReveal 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    }, 100);

  document.getElementById('time').textContent = "Last Updated: "+
  new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'});

  btn.innerHTML = `<i class="fa-solid fa-bolt"></i> GET EXCHANGE RATE`;
  btn.disabled  = false;
  btn.style.animation = 'btnPulse 3s infinite';

})

document.getElementById('time').textContent = "Last Updated: "+
  new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'});


window.addEventListener('load', function () {
  btn.click();
});
  
  

  

