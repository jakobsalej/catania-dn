 var express = require('express');
 var app = express();

 app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});