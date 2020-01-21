create database db_lenguajesaltonivel_demo;
CREATE TABLE tb_user (
 id serial primary key
 ,deleted smallint
 ,suspended smallint
 ,username varchar(30)
 ,firstname varchar(100) not null
 ,lastname varchar(100) not null
 ,email **dm_email**
 );
