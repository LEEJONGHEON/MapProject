show databases;
use demodb;
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
drop table xml_data;
select * from xml_data;


# excel 테이블 생성
create table excel_data (
    place varchar(100) not null,
    phoneNumber varchar(100) not null,
    roadAddr varchar(100) not null,
    jibyeonAddr varchar(100) not null
);

drop table excel_data;
select * from excel_data limit 10000;