const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
const { log } = console;

app.use(express.static('public'));

if (true) {
  console.log('Yes it works');
}

app.listen(PORT, () => {
  log('Server is starting at ', PORT);
});
