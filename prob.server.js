const express = require('express');

const app = express();

const router = express.Router();

router.get('/login', function (req, res) {
  res.json({
    errno: 0,
    data: 'seller'
  })
});

app.use(router);

const port = process.env.PORT || 8900;

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
});
