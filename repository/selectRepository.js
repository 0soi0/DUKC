const { request } = require('express');

const db = require('../db/mariadb').conn;

//test쿼리
exports.test = function() {
    return new Promise(function(resolve,reject) {
        db.query('select * from chess_mode', function(err,rows) {
            if(!err) {
                resolve(rows);
            } else {
                reject(err);
            }
        });
    })
}

//모든 모임 정보 보기 (카카오 맵용)
exports.classForMap = function() {
    return new Promise(function(resolve,reject) {
        var sql = 'SELECT * FROM class;'
        db.query(sql, function(err, rows) {
            if (!err) {
                resolve(rows); 
            } else {
                reject(err);
            }
        });
    })
}

//모임 정보 조회
exports.classInfo = function(code) {
    return new Promise(function(resolve,reject) {
        var sql = 'SELECT * FROM class c INNER JOIN class_info i ON(c.code = i.code) WHERE c.code = ' + db.escape(code);
        db.query(sql, function(err,rows) {
            if(!err) {
                resolve(err);
            } else {
                reject(err);
            }
        });
    })
}

//게시물 전체 조회
exports.boardAll = function() {
    return new Promise(function(resolve,reject) {
        var sql = 'SELECT * FROM board;'
        db.query(sql, function(err, rows) {
            if (!err) {
                resolve(rows); 
            } else {
                reject(err);
            }
        });
    })
}

//게시물 조회
exports.board = function(code) {
    return new Promise(function(resolve,reject) {
        var sql = 'SELECT * FROM board where board_code = ' + db.escape(code);
        db.query(sql, function(err, rows) {
            if (!err) {
                resolve(rows); 
            } else {
                reject(err);
            }
        });
    })
}

//댓글조회
exports.comments = function(code) {
    return new Promise(function(resolve,reject) {
        var sql = 'SELECT * FROM comment where board_code = ' + db.escape(code);
        db.query(sql, function(err, rows) {
            if (!err) {
                resolve(rows); 
            } else {
                reject(err);
            }
        });
    })
}