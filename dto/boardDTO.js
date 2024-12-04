class boardDTO {
    constructor(code,writer,title,content,date) {
        this.code = code;
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.date = date;
    }
}

module.exports = boardDTO;