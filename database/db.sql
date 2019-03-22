CREATE DATABASE tareas;
USE tareas;

--TABLA USUARIOS
CREATE TABLE users(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR (30) NOT NULL,
    password VARCHAR (60) NOT NULL,
    fullname VARCHAR (100) NOT NULL
);

--TABLA DE TAREAS
CREATE TABLE tarea(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR (100) NOT NULL,
    fecha_ejecucion DATE NOT NULL,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT  current_timestamp,
    fecha_recordatorio DATETIME NOT NULL,
    user_id INT (11),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);


