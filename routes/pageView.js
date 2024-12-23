var express = require('express');
var router = express.Router();

const path = require('path');

//테스트 홈페이지 이동
router.get('/', function(req,res) {
    console.log('view page throw');
    res.sendFile(path.join(__dirname,'../public/index.html'));
  });

module.exports = router;