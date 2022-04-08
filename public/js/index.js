
const dealBotton = document.getElementsByClassName("deal")[0];
const buyBotton = document.getElementsByClassName("createBuyOrder")[0];
const sellBotton = document.getElementsByClassName("createSellOrder")[0];
const dealForm = document.getElementsByClassName("dealForm")[0];
const buyForm = document.getElementsByClassName("buyForm")[0];
const sellForm = document.getElementsByClassName("sellForm")[0];

const onclickBuyBotton = () => {
  buyForm.classList.add("bottonClicked");
  dealForm.classList.remove("bottonClicked");
  sellForm.classList.remove("bottonClicked");
  
  buyBotton.classList.add("selectedBgc");
  dealBotton.classList.remove("selectedBgc");
  sellBotton.classList.remove("selectedBgc");
}

const onclickSellBotton = () => {
  sellForm.classList.add("bottonClicked");
  dealForm.classList.remove("bottonClicked");
  buyForm.classList.remove("bottonClicked");

  buyBotton.classList.remove("selectedBgc");
  dealBotton.classList.remove("selectedBgc");
  sellBotton.classList.add("selectedBgc");
}

const onclickDealBotton = () => {
  dealForm.classList.add("bottonClicked");
  sellForm.classList.remove("bottonClicked");
  buyForm.classList.remove("bottonClicked");

  buyBotton.classList.remove("selectedBgc");
  dealBotton.classList.add("selectedBgc");
  sellBotton.classList.remove("selectedBgc");
}

const addBottonClicked = () => {
  buyBotton.onclick = onclickBuyBotton;
  sellBotton.onclick = onclickSellBotton;
  dealBotton.onclick = onclickDealBotton;
}

onclickDealBotton();
addBottonClicked();