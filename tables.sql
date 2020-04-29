CREATE TABLE IF NOT EXISTS teachers (
    id SERIAL PRIMARY KEY,
    name TEXT,
    loginName TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS class (
    id SERIAL PRIMARY KEY,
    classname TEXT
);

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name TEXT,
    gender VARCHAR(1),
    personalContact INTEGER,
    parentGuardianName TEXT,
    parentGuardianNumber INTEGER,
    relationship TEXT,
    CCA TEXT
);

CREATE TABLE IF NOT EXISTS conduct (
    id SERIAL PRIMARY KEY,
    remark TEXT,
    conductGrade TEXT
);

CREATE TABLE IF NOT EXISTS subject (
    id SERIAL PRIMARY KEY,
    subjectName TEXT
);

CREATE TABLE IF NOT EXISTS result (
    id SERIAL PRIMARY KEY,
    SA1 DECIMAL,
    SA2 DECIMAL,
    Overall DECIMAL
);

CREATE TABLE IF NOT EXISTS teacher_class (
    id SERIAL PRIMARY KEY,
    teacher_id INTEGER,
    class_id INTEGER
);

CREATE TABLE IF NOT EXISTS student_class (
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    class_id INTEGER
);

CREATE TABLE IF NOT EXISTS student_conduct (
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    conduct_id INTEGER
);

CREATE TABLE IF NOT EXISTS student_subject (
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    subject_id INTEGER
);


CREATE TABLE IF NOT EXISTS student_subject_result_class (
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    subject_id INTEGER,
    result_id INTEGER,
    class_id INTEGER
);