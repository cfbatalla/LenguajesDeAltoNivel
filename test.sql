 CREATE TABLE tb_user (
          id serial PRIMARY KEY
          ,deleted SMALLINT 
          ,suspended SMALLINT
          ,username VARCHAR(30)
          ,firstname VARCHAR(100) not null
          ,lastname VARCHAR(100) not null
          ,email VARCHAR(120)
          ,CHECK (deleted <1)
          ,CHECK (suspended <1)  
        );
