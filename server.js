var express = require('express');

// Constants
var PORT = process.env.PORT || 8888;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hola pindonguita\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
