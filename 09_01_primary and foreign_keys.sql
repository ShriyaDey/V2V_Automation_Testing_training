create table students(
	stud_id int primary key,
	stud_name varchar(20),
	city varchar(20)
);
insert into students values(1,'Riya','Pune'),(2,'Jeena','Bhopal'),(3,'Deepti','HYD'),(4,'Karina','Chennai');
select * from students;

create table courses(
	course_name varchar(20),
	stud_id int,
	foreign key(stud_id) references students(stud_id)
);
-- insert into courses values('Maths',5); give error as stud_id=5 is not in parent table
insert into courses values('Maths',1),('Science',1),('Physics',2);
select * from courses;
