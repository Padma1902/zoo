function login(e) {
  e.preventDefault(); // Prevent form from submitting normally

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace 'admin' and '1234' with your preferred login credentials
  if (username === 'admin' && password === '1234') {
    window.location.href = 'animal-records.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
}
