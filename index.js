const passwordInput = document.getElementById('password');
  const showPasswordCheckbox = document.getElementById('show-password');

  showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });