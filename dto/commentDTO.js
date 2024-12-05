class commentDTO {
    constructor(code,boardCode,writer,content,date,password) {
        this.code = code;
        this.boardCode = boardCode;
        this.writer = writer;
        this.content = content;
        this.date = date;
        this.password = password;
    }
}

module.exports = commentDTO;