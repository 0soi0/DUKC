CREATE TABLE `class` (
	`code`	int(4)	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`class_name`	varchar(50)	NOT NULL,
	`class_place`	varchar(50)	NOT NULL
);

CREATE TABLE `class_info` (
	`code`	int(4)	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`class_min`	int(2)	NULL,
	`class_max`	int(2)	NULL,
	`class_date`	varchar(20)	NULL,
	`class_price`	varchar(50)	NULL,
	`class_book`	varchar(10)	NULL,
	`class_link`	varchar(50)	NULL,
	`class_desc`	varchar(50)	NULL,
	`class_level`	varchar(20)	NULL,
	`chess_mode`	int(1)	NOT NULL,
	`class_goal`	varchar(50)	NULL,
	`class_img`	varchar(50)	NULL,
	`class_video`	varchar(50)	NULL
);

CREATE TABLE `chess_mode` (
	`chess_code`	int(1)	NOT NULL,
	`chess_mode`	varchar(5)	NOT NULL
);

CREATE TABLE `board` (
	`board_code`	int(10)	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`writer`	varchar(10)	NOT NULL,
	`title`	varchar(50)	NOT NULL,
	`content`	varchar(100)	NULL,
	`time`	datetime NOT NULL,
	`password`	varchar(10)	NOT NULL
);

CREATE TABLE `comment` (
	`comment_code`	int(10)	NOT NULL AUTO_INCREMENT,
	`board_code`	int(10)	NOT NULL,
	`writer`	varchar(10)	NOT NULL,
	`content`	varchar(50)	NOT NULL,
	`date`	datetime NOT NULL,
	`password`	varchar(10)	NOT NULL
    CONSTRAINT PRIMARY KEY (comment_code,board_code)
);

CREATE TABLE `account` (
	`code`	int(10)	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`name`	varchar(15)	NOT NULL,
	`id`	varchar(20)	NOT NULL,
	`password`	varchar(20)	NOT NULL
);

ALTER TABLE `class_info` ADD CONSTRAINT `FK_class_TO_class_info_1` FOREIGN KEY (
	`code`
)
REFERENCES `class` (
	`code`
) ON delete cascade;

ALTER TABLE `comment` ADD CONSTRAINT `FK_board_TO_comment_1` FOREIGN KEY (
	`board_code`
)
REFERENCES `board` (
	`board_code`
) ON delete cascade;

ALTER database dukc defalut character set utf8mb3;
ALTER TABLE class_info defalut character set utf8mb3;

INSERT INTO chess_mode VALUES(1,'스탠다드');
INSERT INTO chess_mode VALUES(2,'레피드');
INSERT INTO chess_mode VALUES(3,'블리츠');
INSERT INTO chess_mode VALUES(4,'불릿');

SELECT * FROM class;
SELECT * FROM class c INNER JOIN class_info i ON(c.code = i.code) WHERE c.code =
INSERT INTO class VALUES()
INSERT INTO class_info VALUES()
SELECT * FROM class_info c INNER JOIN chess_mode i ON(c.chess_mode = i.chess_code) WHERE c.code =

