var express = require('express');
var router = express.Router();

const insertRepository = require('../repository/insertRepository');

//get == query post == body

//체스모드 입력
router.get('/chess_mode', function(req, res) {
  let mode = req.query.mode;
  console.log(mode);
  insertRepository.chessmode(mode).then((result) => {
    res.send(JSON.stringify({
      code : 201
    }));
  }).catch((err) => {
    res.send(JSON.stringify({
      code : 400
    }));
  })
});

module.exports = router;