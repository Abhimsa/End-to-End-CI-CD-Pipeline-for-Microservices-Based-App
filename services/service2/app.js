const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Service 1!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Service 1 listening on port ${port}`);
});
