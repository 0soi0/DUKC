var express = require('express');
var router = express.Router();

const patchRepository = require('../repository/patchRepository');
const cdto = require('../dto/classDTO');
const cidto = require('../dto/classInfoDTO');
const bdto = require('../dto/boardDTO');
const codto = require('../dto/commentDTO');
const { plainToInstance } = require('class-transformer');

//모임수정
router.patch('/class', function(req, res) {
    const classDto = plainToInstance(cdto,req.body);
    patchRepository.class(cdto).then((result) => {
      res.send(JSON.stringify({
        code : 201
      }));
    }).catch((err) => {
      res.send(JSON.stringify({
        code : 400
      }));
    })
  });

//모임정보수정
router.patch('/classInfo', function(req, res) {
  const classDto = plainToInstance(cidto,req.body);
  patchRepository.class(classDto).then((result) => {
    res.send(JSON.stringify({
      code : 201
    }));
  }).catch((err) => {
    res.send(JSON.stringify({
      code : 400
    }));
  })
});

//게시판수정
router.patch('/board', function(req, res) {
  const classDto = plainToInstance(bdto,req.body);
  patchRepository.class(classDto).then((result) => {
    res.send(JSON.stringify({
      code : 201
    }));
  }).catch((err) => {
    res.send(JSON.stringify({
      code : 400
    }));
  })
});

//댓글수정
router.patch('/comment', function(req, res) {
  const classDto = plainToInstance(codto,req.body);
  patchRepository.class(classDto).then((result) => {
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