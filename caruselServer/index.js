const cors = require('cors');
const express = require('express');


const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

const min = 0;
const max = 9;
app.get('/getRandom', function (req, res) {

  res.json({ number: Math.round(Math.random() * (+max - +min) + +min)});
});
const config = { port: 3000 };

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port);
});

