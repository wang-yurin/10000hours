// assign Element
const contentArea = document.querySelector(".contents");
const startBtnEl = contentArea.querySelector(".start_button");
const resultArea = contentArea.querySelector(".result");
const goBtnEl = contentArea.querySelector(".go_button");
const shareBtnEl = contentArea.querySelector(".share_button");
const closeBtnEl = document.querySelector(".close_button");
const modalEl = document.getElementById("modal");
const loding = document.querySelector(".result_loding");

// input area
function onClickStartBtn() {
  const fieldInputEl = contentArea.querySelector(".field_value");
  const timeInputEl = contentArea.querySelector(".time_value");
  const fieldResultEl = contentArea.querySelector(".field_result");
  const timeResultEl = contentArea.querySelector(".time_result");
  const buttonsEl = contentArea.querySelector(".buttons");

  if (fieldInputEl.value === "" || timeInputEl.value === "") {
    alert("빈 곳을 모두 입력해주세요!😊");
    return (resultArea.style.display = "none");
  }
  resultArea.style.display = "none";
  loding.style.display = "flex";

  setTimeout(() => {
    loding.style.display = "none";
    resultArea.style.display = "flex";
    buttonsEl.style.display = "flex";
    fieldResultEl.innerHTML = fieldInputEl.value;
    timeResultEl.innerHTML = Math.floor(10000 / timeInputEl.value);
  }, 1500);
}

// Modal show & close
function showModal() {
  modalEl.style.display = "flex";
}
function closeModal() {
  modalEl.style.display = "none";
}
window.onclick = (event) => {
  if (event.target === modalEl) {
    closeModal();
  }
};

// Share button
function onClickShareBtn() {
  const url = window.location.href;
  const temp = document.createElement("input");

  document.body.appendChild(temp);
  temp.value = url;
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);

  alert("🔗 URL 복사 완료!! 🔗");
}

// Event
startBtnEl.addEventListener("click", onClickStartBtn);
goBtnEl.addEventListener("click", showModal);
closeBtnEl.addEventListener("click", closeModal);
shareBtnEl.addEventListener("click", onClickShareBtn);
