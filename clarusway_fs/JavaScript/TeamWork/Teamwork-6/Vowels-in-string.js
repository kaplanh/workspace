const text = "aaa";
const vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü"];

const textArray = text.split("");

console.log(textArray);

// const result = textArray.filter((x) => vowels.indexOf(x) !== -1).length;

const result = textArray.filter((x) => vowels.includes(x)).length;

console.log(result);



// const text = "aaa";
// const vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü"];

// const textArray = text.split("");

// console.log(textArray);

// // const result = textArray.filter((x) => vowels.indexOf(x) !== -1).length;

// const result = textArray.filter((x) => vowels.includes(x)).length;

// console.log(result);

const input = document.querySelector("input");

const button = document.querySelector("button");

const description = document.querySelector(".description");

button.addEventListener("click", () => {
  if (!input.value) {
    description.innerHTML = `Lütfen bir şeyler yaz!`;
  } else {
    vowelsString();
  }
});

const vowelsString = () => {
  const vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü"];
  const result = input.value
    .toLowerCase()
    .split("")
    .filter((x) => vowels.includes(x)).length;
  // console.log(result);

  description.innerHTML = `There are ${result} vowels in <span style="color: red">${input.value.toLowerCase()}`;
  input.value = "";
};

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    button.click();
  }
});

window.onload = () => {
  input.focus();
};

