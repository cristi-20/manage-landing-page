const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-menu-icon");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

// Email Validation
const emailField = document.getElementById('emailField');
const button = document.getElementById('button');
const response = document.getElementById('response');

button.addEventListener('click', function() {
  const email = emailField.value;
  if (validateEmail(email)) {
    response.innerHTML = '';
  } else {
    response.innerHTML = 'Please insert a valid email';
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

