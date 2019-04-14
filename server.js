const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
const { log } = console;

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({
    username: 'accimeesterlin',
  });
});

app.get('/about', (req, res) => {
  res.json({
    username: 'james',
  });
});

app.listen(PORT, () => {
  log('Server is starting at ', PORT);
});
