const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const name = req.body.name;
  const message = `Hi, ${name}!`;
  console.log('Received request for name:', name);
  res.send(message);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});