const express = require('express');
const path = require('path');
const service = require('./src/service');

const app = express();

app.use(express.static(path.join(__dirname, 'public/')));

app.get('/get/tip', (req,res) => {
  if (req.query.input == "") {
    res.send([]);
    return
  }
  let cities = service.getCityTip(req.query.input);
  res.send(cities);
});

app.listen(8080, '127.0.0.1', () => {
  console.log('正在连接http://127.0.0.1:8080')
})