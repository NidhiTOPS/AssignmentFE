const passwordInput = document.getElementById('passwordInput');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');

togglePasswordBtn.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    togglePasswordBtn.textContent = 'Show';
  }
});
