-- dcl
-- * 외부(vs code)에서 사용하려고 일부 계정(vs code에서 사용할)을 권한 부여함.
-- 사용자 권한 부여 명령어
-- GRANT permission_type On dbname.table_name TO username@host IDENTIFIED BY 'my_password'
-- [with grant option];

-- 호스트: 로컬 호스트 all: 퍼미션 모두, *.*: 모든 테이블

-- 계정 없어서 에러
-- grant all privileges on *.* to 'user'@'localhost' identified by '4321' with grant option;

-- 권한부여
show grants;

-- 1 계정 생성
-- 같은 계정이 있으면 1396 에러남 Error Code: 1396. Operation CREATE USER failed for 'user'@'localhost'
create user 'user'@'localhost' identified by '4321'; 

select * from mysql.user; -- 존재하는 계정 확인

-- 저장
flush privileges;
grant all privileges on *.* to 'user'@'localhost';
grant all privileges on *.* to 'user'@'%';

-- '%' 권한을 가진 계정 먼저 생성
create user 'user'@'%' identified by '4321';

-- 권한 삭제
revoke privileges on *.* from 'user'@'localhost';

-- 계정 삭제
drop user 'user'@'localhost';

-- 계정 수정(비밀번호 변경) : update -> alter로 변경됨
-- update mysql.user set password = password('1234') where user = 'user';
alter user 'user'@'localhost' identified by '1234';

-- 저장
flush privileges;

