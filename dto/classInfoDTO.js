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

module.exports = classInfoDTO;