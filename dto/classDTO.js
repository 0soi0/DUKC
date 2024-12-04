class classDTO {
    constructor(code,name,place) {
        this.code = code;
        this.name = name;
        this.place = place;
    }
}

class classInfoDTO {
    constructor(min,max,date,price,book,link,desc,level,mode,goal,img,video) {
        this.min = min;
        this.max = max;
        this.date = date;
        this.price = price;
        this.book = book;
        this.link = link;
        this.desc = desc;
        this.level = level;
        this.mode = mode;
        this.goal = goal;
        this.img = img;
        this.video = video;
    }
}

class boardDTO {
    constructor(code,writer,title,content,date) {
        this.code = code;
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.date = date;
    }
}

class commentDTO {
    constructor(code,boardCode,writer,content,date) {
        this.code = code;
        this.boardCode = boardCode;
        this.writer = writer;
        this.content = content;
        this.date = date;
    }
}