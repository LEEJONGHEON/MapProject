# RDS 설정값 확인
show variables like 'c%';
select @@time_zone, now();

# database 설정
show databases;
create database project;
use project;
show tables;

# xml 테이블 생성
create table xml_data(
    id int not null,
    siDo varchar(100) not null,
    siKunKu varchar(100) not null,
    eubMyeonDong varchar(100) not null,
    dongRi varchar(100) not null,
    kyeongDo varchar(100) not null,
    wiDo varchar(100) not null,
    kuYeokKuBun varchar(100) not null,
    jangSo varchar(100) not null
);
select * from xml_data;


# excel 테이블 생성
create table excel_data (
    place varchar(100) not null,
    phoneNumber varchar(100) not null,
    roadAddr varchar(100) not null,
    jibyeonAddr varchar(100) not null
);

select * from excel_data;



-------new-----------
# board 테이블 생성
CREATE TABLE tbl_board (
  id VARCHAR(255) NOT NULL, 
  title varchar(100) NOT NULL,
  contents text NOT NULL,
  writer varchar(20) NOT NULL,
  passwd varchar(100) NOT NULL,
  deleteYn varchar(5) DEFAULT 'false',
  createdDate datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '생성일시',
  modifiedDate datetime DEFAULT '0000-00-00 00:00:00' COMMENT '최종 수정일시',
  PRIMARY KEY (`id`)
);

