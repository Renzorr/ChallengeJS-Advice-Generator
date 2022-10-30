const btnGenerator = document.getElementById("btn-generate");
const adviceNumber = document.getElementById("adviceNumber");
const advicetext = document.getElementById("adviceText");

const url = "https://api.adviceslip.com/advice";

const getAdivce = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    showAdvice(data);
  } catch (error) {
    console.log(error);
  }
};

const showAdvice = (data) => {
  btnGenerator.classList.add("disabled");
  setTimeout(() => {
    adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
    advicetext.innerHTML = data.slip.advice;
    btnGenerator.classList.remove("disabled");
  }, 2000);
};

btnGenerator.addEventListener("click", getAdivce);
