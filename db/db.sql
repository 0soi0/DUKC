CREATE TABLE `class` (
	`code`	int4	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`class_name`	varchar(50)	NOT NULL,
	`class_place`	varchar(50)	NOT NULL
);

CREATE TABLE `class_info` (
	`code`	int4	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`class_min`	int4	NULL,
	`class_max`	int4	NULL,
	`class_date`	varchar(20)	NULL,
	`class_price`	varchar(50)	NULL,
	`class_book`	varchar(10)	NULL,
	`class_link`	varchar(50)	NULL,
	`class_desc`	varchar(50)	NULL,
	`class_level`	varchar(20)	NULL,
	`chess_code`	int4	NOT NULL,
	`class_goal`	varchar(50)	NULL,
	`class_img`	varchar(50)	NULL,
	`Field`	varchar(50)	NULL
);

CREATE TABLE `chess_mode` (
	`chess_code`	int4	NOT NULL,
	`chess_mode`	varchar(5)	NOT NULL
);

CREATE TABLE `board` (
	`board_code`	int4	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`writer`	varchar(10)	NOT NULL,
	`title`	varchar(50)	NOT NULL,
	`content`	varchar(100)	NULL,
	`time`	datetime	NOT NULL,
	`password`	varchar(10)	NOT NULL
);

CREATE TABLE `comment` (
	`comment_code`	int4	NOT NULL AUTO_INCREMENT,
	`board_code`	int4	NOT NULL,
	`writer`	varchar(10)	NOT NULL,
	`content`	varchar(50)	NOT NULL,
	`date`	datetime	NOT NULL,
    CONSTRAINT PRIMARY KEY (comment_code,board_code)
);

CREATE TABLE `account` (
	`code`	int4	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`name`	varchar(15)	NOT NULL,
	`id`	varchar(20)	NOT NULL,
	`password`	varchar(20)	NOT NULL
);

ALTER TABLE `class_info` ADD CONSTRAINT `FK_class_TO_class_info_1` FOREIGN KEY (
	`code`
)
REFERENCES `class` (
	`code`
);

ALTER TABLE `comment` ADD CONSTRAINT `FK_board_TO_comment_1` FOREIGN KEY (
	`board_code`
)
REFERENCES `board` (
	`board_code`
);

ALTER database dukc defalut character set utf8mb3;

INSERT INTO chess_mode VALUES(1,'스탠다드');
INSERT INTO chess_mode VALUES(2,'레피드');
INSERT INTO chess_mode VALUES(3,'블리츠');
INSERT INTO chess_mode VALUES(4,'불릿');
