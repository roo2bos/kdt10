-- sql문 작성 가능
-- 데이터베이스 : 데이터의 집합
-- DBMS : 데이터베이스를 운영/관리하는 프로그램(ex. MySQL)
-- 테이블: RDBMS에서 사용되는 언어
-- 참고! SQL은 대소문자를 구별하지 않음
-- 명령어를 구분하기 쉽게 하기 위해 대문자로 작성하는 것
-- 단, 데이터베이스명, 테이블명 같은 경우는 윈도우에서는 대소문자를 구분하지 X
-- 그 외, 리눅스 환경의 경우에서는 대소문자를 구분함 (주의 필요)

-- DDL(Data Definition Language)
-- 데이터 베이스, 테이블을 정의하는 언어

-- [DataBase 관련 명령어]
-- 1. DataBase 생성

--[Table 관련 명령어]
-- 1. 테이블 생성
-- 제약조건('옵션')
-- NOT NULL : NULL을 허용 안함
-- AUTO_INCREMENT: 자동 숫자 증가, 테이블에 데이터가 추가될 때마다 자동으로 숫자가 증가
-- PRIMARY KEY : 기본키(중복값 허용X, NULL 허용X) -> 하나의 테이블 당 하나만 설정
-- DEFAULT 기본값: 특정 속성의 기본 값 설정
-- UNIQUE : 



create table customer(
	custid char(10) primary key,
    custname varchar(10) not null,
    addr char(10) not null,
    phone char(11),
    birth date
);
desc customer;

-- insert 추가
insert into customer (custid, custname, addr, phone, birth)
values ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-10-05');
insert into customer (addr, custid, custname, phone, birth)
values ('부산', 'happy', '이지은', '01022223333', '2002-10-05');
insert into customer
values ('apple', '강해원', '광주', '01022223333', '2002-10-05');

-- 여러 튜플 동시에 추가
insert into customer
values ('banana', '강해원', '미국 뉴욕', '01022223333', '2002-10-05'),
('orange', '강해원', '미국 뉴욕', '01022223333', '2002-10-05'),
('kiwi', '강해원', '미국 뉴욕', '01022223333', '2002-10-05'),
('grape', '강해원', '미국 뉴욕', '01022223333', '2002-10-05');

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('jisu', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

-- 조회
select * from customer;
select custid from customer;

