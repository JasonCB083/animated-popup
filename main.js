const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#modal-btn");
const ans = document.querySelector("#answer");

modalBtn.addEventListener("click", () => {
  modal.className = "open";
})

modal.addEventListener("click", (e)=> {
  if (e.target.id === "yes-btn") {
    ans.innerText =  " yay! you're Pawsome "
  } else if (e.target.id === "no-btn") {
    ans.innerText = " Oh no! Grrr the Boyz are angry "
  } else {
    return;
  }
  modal.className = "close";
  
})
