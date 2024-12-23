var express = require('express');
var router = express.Router();

//repository연결
const selectRepository = require('../repository/selectRepository');

//test용 쿼리
router.get('/test', function(req, res) {
  selectRepository.test().then((rows) => {
    console.log(rows);
    res.send(rows);
  }).catch((err) => {
    console.log('error is : '+err);
  })
});

//모임 전체보기(카카오맵용)
router.get('/boardAll', function(req, res) {
  selectRepository.classForMap().then((rows) => {
    console.log(rows);
    res.send(rows);
  }).catch((err) => {
    console.log('error is ='+err);
  })
});

//모임 정보 보기
router.get('/boardAll', function(req, res) {
  let code = req.params.code
  selectRepository.classInfo(code).then((rows) => {
    console.log(rows);
    res.send(rows);
  }).catch((err) => {
    console.log('error is ='+err);
  })
});

//게시물전체 보기
router.get('/boardAll', function(req, res) {
  selectRepository.boardAll().then((rows) => {
    console.log(rows);
    res.send(rows);
  }).catch((err) => {
    console.log('error is ='+err);
  })
});

//게시물 보기
router.get('/boardAll', function(req, res) {
  let code = req.params.code
  selectRepository.board(code).then((rows) => {
    console.log(rows);
    res.send(rows);
  }).catch((err) => {
    console.log('error is ='+err);
  })
});

//댓글보기
router.get('/boardAll', function(req, res) {
  let code = req.params.code
  selectRepository.comments(code).then((rows) => {
    console.log(rows);
    res.send(rows);
  }).catch((err) => {
    console.log('error is ='+err);
  })
});


module.exports = router;