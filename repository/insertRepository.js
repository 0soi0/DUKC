const db = require('../db/mariadb').conn

//가게 정보 입력
exports.chessmode = function(mode) {
    return new Promise(function(resolve,reject) {
        db.query('INSERT INTO chess_mode VALUES(?,?)',['5',mode],function(err,result) {
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