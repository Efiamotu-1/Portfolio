const form = document.querySelector('form');
const emailError = document.querySelector('.form-error');

form.addEventListener('submit', (e) => {
  const email = form.email.value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    emailError.innerHTML = `<p class="error">Email should be written in lowercase letters: ${email}</p>`;
  }
});
