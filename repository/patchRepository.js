const db = require('../db/mariadb').conn

//모임 정보 수정 (이름,장소만 변경)
exports.class = function(cdto) {
    return new Promise(function(resolve,reject) {
        db.query('UPDATE class set class_name = ?, class_place = ? WHERE code = ?',[cdto.name,cdto.place,cdto.code],function(err,result) {
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

//모임 정보 수정(이름,장소외 기타사항 수정)
exports.classInfo = function(cidto) {
    return new Promise(function(resolve,reject) {
        db.query('UPDATE class_info set min = ?, max = ?, date = ?, price = ?, book = ?, link = ?, desc = ?, level = ?, mode = ?, goal = ?, img = ?, video = ?  WHERE code = ?',
            [cidto.min,cidto.max,cidto,cidto.date,cidto.price,cidto.book,cidto.link,cidto.desc,cidto.level,cidto.mode,cidto.goal,cidto.img,cidto.video],function(err,result) {
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

//게시물 글 수정
exports.board = function(bdto) {
    return new Promise(function(resolve,reject) {
        db.query('UPDATE board set title = ?, content =?  WHERE code = ?',[bdto.title,bdto.content,bdto.code],function(err,result) {
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

//댓글 수정
exports.comment = function(cdto) {
    return new Promise(function(resolve,reject) {
        db.query('UPDATE comment set content = ? WHERE comment_code = ?',[cdto.content,cdto.code],function(err,result) {
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