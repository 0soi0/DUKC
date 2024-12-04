class commentDTO {
    constructor(code,boardCode,writer,content,date) {
        this.code = code;
        this.boardCode = boardCode;
        this.writer = writer;
        this.content = content;
        this.date = date;
    }
}

module.exports = commentDTO;