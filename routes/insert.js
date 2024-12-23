var express = require('express');
var router = express.Router();
const path = require('path');
const { plainToInstance } = require('class-transformer');

const insertRepository = require('../repository/insertRepository');
const cdto = require('../dto/classDTO');
const cidto = require('../dto/classInfoDTO');
const bdto = require('../dto/boardDTO');
const codto = require('../dto/commentDTO');

/*react 설치
npm install react react-dom
npm install webpack webpack-cli webpack-dev-server @babel/core babel-loader @babel/preset-env @babel/preset-react html-webpack-plugin
*/

//체스모임 등록
router.post('/class', function(req,res) {
  const classDTO = plainToInstance(cdto,req.body);
  res.insertRepository.addClass(classDTO).then((result) => {
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
router.post('/classInfo',function(req,res) {
  const classInfoDTO = plainToInstance(cidto,req.body);
  insertRepository.addClassInfo(classInfoDTO).then((result) => {
    res.send(JSON.stringify({
      code : 201
    }));
  }).catch((err) => {
    res.send(JSON.stringify({
      code : 400
    }));
  })
});

//게시글 작성
router.post('/board',function(req,res) {
  const boardDTO = plainToInstance(bdto,req.body);
  insertRepository.addBoard(boardDTO).then((result) => {
    res.send(JSON.stringify({
      code : 201
    }));
  }).catch((err) => {
    res.send(JSON.stringify({
      code : 400
    }));
  })
});

//댓글 작성
router.post('/comment',function(req,res) {
  const commentDto = plainToInstance(codto,req.body);
  insertRepository.addComment(commentDto).then((result) => {
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