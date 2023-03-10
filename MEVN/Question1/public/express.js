const form = document.querySelector('form');
const responseDiv = document.querySelector('#response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.elements['name'].value;
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `name=${name}`
  })
  .then(response => response.text())
  .then(data => {
    responseDiv.textContent = data;
  });
});