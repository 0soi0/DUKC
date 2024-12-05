class boardDTO {
    constructor(code,writer,title,content,date,password) {
        this.code = code;
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.date = date;
        this.password = password;
    }
}

module.exports = boardDTO;