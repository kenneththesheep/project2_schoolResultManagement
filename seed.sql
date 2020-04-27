/* Enter Teacher */
INSERT INTO teachers
(name, loginName, password)
VALUES
('Kenneth Chua Qiyang', 'moe1234a', 'Password1');

INSERT INTO teachers
(name, loginName, password)
VALUES
('Lydia Jee Ming Jing', 'moe4321z', 'Password1');

/* Enter Class */
INSERT INTO class
(classname)
VALUES
('4F');

INSERT INTO class
(classname)
VALUES
('4A');

/* Enter Students */
INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('Jenny Neo Jing xiu', 'F', 9123456, 'Neo Xiong De', 9800123, 'father',  'Girl Guide');

INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('Deepa', 'F', 98765432, 'Supra', 9800552, 'father',  'Art Club');

INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('Nurul Atika', 'F', 98765555, 'Sulimah', 9833151, 'mother', 'Girl Guide');

INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('Bala', 'M', 91233333, 'Sarah', 9233151,  'grandmother', 'NCC');

INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('Jay Chng Yong Jie', 'M', 9123445, 'Chng Min Xiu',  9223141,  'mother', 'NCC');


INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('Erwina Ng Lee Jing', 'F', 9123111, 'Johnny Ng', 91111237, 'father',  'Girl Guide');

INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('Janet Elisha', 'F', 81765432, 'Majora', 9300552, 'father',  'Art Club');

INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('Siti', 'F', 92111111, 'Zurina', 9833151, 'mother', 'Girl Guide');

INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('Ali', 'M', 91233333, 'Zahidah', 9233151,  'mother', 'NCC');

INSERT INTO students
(name, gender, personalContact, parentGuardianName, parentGuardianNumber, relationship, CCA)
VALUES
('James Chong Lye Jie', 'M', 9123445, 'Chong Min Hui',  9223141,  'mother', 'NCC');


/* Enter Subjects */

INSERT INTO subject
(subjectName)
VALUES
('English');
INSERT INTO subject
(subjectName)
VALUES
('Math');
INSERT INTO subject
(subjectName)
VALUES
('Science');
INSERT INTO subject
(subjectName)
VALUES
('Chinese');
INSERT INTO subject
(subjectName)
VALUES
('Malay');
INSERT INTO subject
(subjectName)
VALUES
('Tamil');


/* Teacher _ class*/
INSERT INTO teacher_class
(teacher_id, class_id)
VALUES
(1, 1);
INSERT INTO teacher_class
(teacher_id, class_id)
VALUES
(2, 2);


/* student _ class*/
INSERT INTO student_class
(student_id, class_id)
VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1);
INSERT INTO student_class
(student_id, class_id)
VALUES
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2);


/*student_subject*/
INSERT INTO student_subject
(subject_id, student_id)
VALUES
(1, 1), (1,2), (1,3), (1,4), (1,5), (1,6), (1,7), (1,8), (1,9), (1,10),
(2, 1), (2,2), (2,3), (2,4), (2,5), (2,6), (2,7), (2,8), (2,9), (2,10),
(3, 1), (3,2), (3,3), (3,4), (3,5), (3,6), (3,7), (3,8), (3,9), (3,10),
(4,1), (4,5), (4, 6), (4, 10),
(5, 3), (5, 8), (5, 9),
(6, 2), (6, 4), (6,7)