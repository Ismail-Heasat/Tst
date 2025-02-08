const express = require('express');
const app = express();
const PORT = 3600;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
