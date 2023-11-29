-- join
select	* from customer, orders;

-- customer , orders 테이블의 행 개수 구하기
select count(*) from customer; -- 14
select count(*) from orders; -- 16
select count(*) from customer, orders; -- 224 = 14 * 16
-- => cross join

-- where절을 이용해서 조인 조건 추가
-- 테이블 이름.속성: 어느 테이블의 속성인지 가르킴
select * from customer, orders
where customer.custid = orders.custid
order by customer.custid;

-- inner join 사용: 위와 같음 (inner join , on 사용)
select * from customer inner join orders
on customer.custid = orders.custid
order by customer.custid;

-- '고객 이름'과 고객이 주문한 '상품명','상품 가격' 조회
select custname, prodname,price from customer, orders
where customer.custid = orders.custid;

-- inner join 사용: 위와 같음 (inner join , on 사용)
select custname, prodname,price from customer inner join orders
on customer.custid = orders.custid;

-- 고객 이름별로 주문한 제품 총 구매액을 구매액 기준으로 오름차순 정렬
select custname, sum(price * amount) as 'total_price'
from customer, orders
where customer.custid = orders.custid
group by custname
order by total_price;

-- inner join 사용: 위와 같음 (inner join , on 사용)
select custname, sum(price * amount) as 'total_price'
from customer inner join orders
on customer.custid = orders.custid
group by custname
order by total_price;

-- outer join
-- outer join은 공통된 부분만 결합하는 inner join과 다르게
-- 공통되지 않은 row도 유지한다.
-- 이때, 왼쪽 테이블의 row를 유지하면 Left Outer Join,
-- 오른쪽 테이블의 row를 유지하면 Right Outer Join 이다.

-- teaches 테이블 생성
create table teaches (
	id int primary key,
    course varchar(7),
    semester varchar(7),
    year varchar(4)
);

create table instructor(
	id int primary key,
	name varchar(7),
	dep_name varchar(7),
	salary int
);
desc teaches;
desc instructor;

insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');   
insert into teaches values (6, '알고리즘', '가을', '2023');

select * from teaches;
select * from instructor;
-- select * from teaches, instructor;

-- left outer join(많은걸 먼저 가저와야 정상/ I, T : 테이블명 약어)
select * from instructor I left outer join teaches T on I.id = T.id;
select * from teaches T left outer join instructor I on I.id = T.id;

-- right outer join
select * from instructor I right outer join teaches T on I.id = T.id;
select * from teaches T right outer join instructor I on I.id = T.id;
