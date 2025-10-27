const EMAIL_REGEXP = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+\.[a-z]{2,}$/;

const signUpForm = document.querySelector('.js-sign-up-form');
const nameControl = signUpForm.name;
const emailControl = signUpForm.email;
const passwordControl = signUpForm.password;
const confirmPasswordControl = signUpForm.confirmPassword;

const showError = (control, message) => {
  control.nextElementSibling.textContent = message;
};

signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  document.querySelectorAll('.js-error').forEach((el) => (el.textContent = ''));

  let valid = true;

  const name = nameControl.value.trim();
  if (name === '') {
    showError(nameControl, 'Name is required');
    valid = false;
  }

  const email = emailControl.value.trim();
  if (!EMAIL_REGEXP.test(email)) {
    showError(emailControl, 'Email is required');
    valid = false;
  }

  const password = passwordControl.value.trim();
  if (password.length < 6) {
    showError(passwordControl, 'Password must be at least 6 characters long');
    valid = false;
  }

  const confirmPassword = confirmPasswordControl.value.trim();
  if (confirmPassword === '') {
    showError(confirmPasswordControl, 'Password confirmation is required');
    valid = false;
  } else if (confirmPassword !== password) {
    showError(confirmPasswordControl, 'Your password does not match');
    valid = false;
  }

  if (valid) {
    alert('The form has been successfully submitted');
    signUpForm.reset();
  }
});
