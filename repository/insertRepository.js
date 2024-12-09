const db = require('../db/mariadb').conn

//모임 등록
exports.addClass = function(cdto) {
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO class VALUES(?,?,?)',['0',cdto.name,cdto.place],function(err,result) {
            if(!err) {
                console.log(result);
                resolve(result);
            } else {
                console.log(err);
                reject(err);
            }
        });
    })
}

//모임 정보 입력
exports.addClassInfo = function(cidto) {
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO class_info VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',[cidto.code,cidto.min,cidto.max,cidto.date,cidto.price,cidto.book,cidto.link,cidto.desc,cidto.level,cidto.mode,cidto.goal,cidto.img,cidto.video],function(err,result) {
            if(!err) {
                console.log(result);
                resolve(result);
            } else {
                console.log(err);
                reject(err);
            }
        });
    })
}

//게시물 작성
exports.addBoard = function(bdto) {
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO board VALUES(?,?,?,?,?,?)',['0',bdto.writer,bdto.title,bdto.content,bdto.date,bdto.password],function(err,result) {
            if(!err) {
                console.log(result);
                resolve(result);
            } else {
                console.log(err);
                reject(err);
            }
        });
    })
}

//댓글 작성
exports.addComment = function(cdto) {
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO comment VALUES(?,?,?,?,?,?)',['0',cdto.boardCode,cdto.writer,cdto.content,cdto.date,cdto.password],function(err,result) {
            if(!err) {
                console.log(result);
                resolve(result);
            } else {
                console.log(err);
                reject(err);
            }
        });
    })
}

//체스 모드 종류 입력
exports.chessmode = function(mode) {
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO chess_mode VALUES(?,?)',['0',mode],function(err,result) {
            if(!err) {
                console.log(result);
                resolve(result);
            } else {
                console.log(err);
                reject(err);
            }
        });
    })
}