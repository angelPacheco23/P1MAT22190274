document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (user === 'admin' && pass === '1234') {
    message.style.color = 'green';
    message.textContent = '¡Login exitoso!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Usuario o contraseña incorrectos.';
  }
});
