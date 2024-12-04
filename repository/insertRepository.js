const db = require('../db/mariadb').conn

//모임 등록
exports.addClass = function(cdto) {
    const classDTO = cdto;
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO class VALUES(?,?,?)',['0',classDTO.name,classDTO.place],function(err,result) {
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
exports.addClassInfo = function(code,min,max,date,price,book,link,desc,level,mode,goal,img,video) {
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO class_info VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',[code,min,max,date,price,book,link,desc,level,mode,goal,img,video],function(err,result) {
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