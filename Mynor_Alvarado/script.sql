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

-- 4. insert de la serie 7 
-- Usuario con estado de baja
insert into usuario (nombre, fecha, telefono, correo, creacion, estado_usuario_id)
values ('Pepito', '1999-01-01', '55508978', 'pepito@gmail.com', now(), 2);

-- usuarios creados ayer
insert into usuario (nombre, fecha, telefono, correo, creacion, estado_usuario_id)
values
('juan perez',  '2000-02-01', '23452345', 'juan.ayer@gmail.com', date_sub(now(), interval 1 day), 1),
('josue martinez', '2002-03-10', '66775634', 'josue.ayer@gmail.com', date_sub(now(), interval 1 day), 1);

-- usuarios creados el mes pasado
insert into usuario (nombre, fecha, telefono, correo, creacion, estado_usuario_id)
values
('jorge ramirez',  '1995-02-01', '44446778', 'jorge.mesp@gmail.com', date_sub(now(), interval 1 month), 1),
('jose gomez', '1995-03-10', '55559088', 'jose.mesp@gmail.com', date_sub(now(), interval 1 month), 1);


-- serie 2
create table punteo_usuario (
punteo int not null,
fecha_ingreso date not null,
usuario_id int not null,
foreign key (usuario_id) references usuario(id)
);

   


