CREATE TABLE erasmus (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  surname VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL UNIQUE,
  birthday DATE,
  nationality VARCHAR(20) NOT NULL,
  mobile VARCHAR(20),
  esncard VARCHAR(20) NOT NULL UNIQUE,
  faculty VARCHAR(20),
  uni_id VARCHAR(20) UNIQUE,
  registration_date DATE NOT NULL,
  city VARCHAR(20) NOT NULL
);
