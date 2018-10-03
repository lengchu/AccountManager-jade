drop table if exists account;
create table account (
    id int primary key auto_increment,
    accName varchar(64),
    username varchar(64),
    password varchar(64),
    homepage varchar(128),
    comment text
);
