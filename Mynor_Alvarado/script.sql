-- Script SQL para evaluación UPA

-- 1. Creamos la base de datos con el nombre solicitado
create database evaluacion_mynor_alvarado;
use evaluacion_mynor_alvarado;

-- 2. Creamos la tabla de EstadoUsuario
create table estado_usuario (
id int auto_increment primary key, 
titulo varchar(255) not null,
clave varchar(255) not null 
);

-- 3. Creamos la tabla usuario
create table usuario (
id int auto_increment primary key, 
nombre varchar(100) not null,
fecha date not null,
telefono varchar(20) not null,
correo varchar(50) not null unique,
creacion timestamp default current_timestamp,
estado_usuario_id int not null,
foreign key (estado_usuario_id) references estado_usuario(id)
);

-- 3. Insert estaticos de la serie 4
insert into estado_usuario (id, titulo, clave)
values ('1', 'Activo', 'activo');

insert into estado_usuario (id, titulo, clave)
values ('2', 'Baja Permanente', 'baja');
