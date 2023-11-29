const form = document.getElementById("my-form");
const nameInput = form["name"];
const emailInput = form["email"];

form.onsubmit = (e) => {
  e.preventDefault();

  localStorage.setItem(nameInput.value, emailInput.value);
};
