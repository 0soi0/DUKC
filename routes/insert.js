var express = require('express');
var router = express.Router();

const insertRepository = require('../repository/insertRepository');

//get == query post == body

//체스모임 등록
router.post('/addClass', function(req,res) {
  let name = req.body.name;
  let place = req.body.place;
  insertRepository.addClass(name,place).then((result) => {
    res.send(JSON.stringify({
      code : 201
    }));
  }).catch((err) => {
    res.send(JSON.stringify({
      code : 400
    }));
  })
});

//체스모임 정보 기입
router.post('./addClassInfo',function(req,res) {
  let code = req.body.code
  let min = req.body.min
  let max = req.body.max
  let date = req.body.date
  let price = req.body.price
  let book = req.body.book
  let link = req.body.link
  let desc = req.body.desc
  let level = req.body.level
  let mode = req.body.mode
  let goal = req.body.goal
  let img = req.body.img
  let video = req.body.video
  insertRepository.addClassInfo(code,min,max,date,price,book,link,desc,level,mode,goal,img,video).then((result) => {
    res.send(JSON.stringify({
      code : 201
    }));
  }).catch((err) => {
    res.send(JSON.stringify({
      code : 400
    }));
  })
});

//체스모드 입력
router.post('/chess_mode', function(req, res) {
  let mode = req.body.mode;
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