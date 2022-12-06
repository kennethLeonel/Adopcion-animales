use databaseadoptme;
-- para eliminar tablas
-- DROP TABLE orders;
-- DROP TABLE pets;
-- DROP TABLE users;
-- DROP TABLE breeds;
-- DROP TABLE pet_types;
-- DROP TABLE cities;
-- DROP TABLE countries;
-- Paises
SELECT * FROM countries;
insert into countries (name) values ('Argentina');
insert into countries (name) values ('Uruguay');
insert into countries (name) values ('Colombia');
-- tipoMascota
SELECT * FROM pet_types;
insert into pet_types ( name) values ('Perro');
insert into pet_types ( name) values ('Gato');
insert into pet_types ( name) values ('Hamster');
insert into pet_types ( name) values ('Tortuga');
insert into pet_types ( name) values ('Pez');
-- ciudades
SELECT * FROM cities;
insert into cities (name,country_id ) values('Bogota',3);
insert into cities (name,country_id) values ('Buenos Aires',1);
insert into cities (name,country_id) values ('Montevideo',2);
insert into cities (name,country_id ) values('Barranquilla',3);
insert into cities (name,country_id ) values('Pasto',3);
insert into cities (name,country_id) values ('Cordoba',1);
-- razas
SELECT * FROM breeds;
insert into breeds (name,pet_type_id) values ('Lobo siberiano + Chiguagua',1);
insert into breeds (name,pet_type_id) values ('Bulldog',1);
insert into breeds (name,pet_type_id) values ('Gato de pelo corto',2);
insert into breeds (name,pet_type_id) values ('Gato siamés',2);
insert into breeds (name,pet_type_id) values ('Cuy Pastusense',3);
-- usuarios
SELECT * FROM users;
insert into users (name,email,password,image,city_id,country_id,role) values ('Kenneth','kennethleo1@hotmail.com','1234','kenneth.jpg',1, 3, "admin");
insert into users (name,email,password,image,city_id,country_id,role) values ('Juan Pablo','acostajuan678@gmail.com','123','juampi-jpg',2,1, "admin");
-- mascotas
SELECT * FROM pets;
insert into  pets(name,age,sex,breed_id,status,number_of_vaccines,city_id,country_id,description,image,attitude) values ('Max',1,'Macho',1,0,2,1,3,'Max es un perro muy cariñoso y juguetón.','perro1.jpg','Hogareño');
insert into pets(name,age,sex,breed_id,status,number_of_vaccines,city_id,country_id,description,image,attitude) values ('Neku',2,'Macho','3',0,2,3,2,'Neku Es un gato muy tranquilo y no maulla mucho.','gato1.jpg','Tranquilo');
insert into pets(name,age,sex,breed_id,status,number_of_vaccines,city_id,country_id,description,image,attitude) values ('Roger',1,'Macho','5',0,2,5,3,'Roger es un hamster muy inquieto a la hora de jugar.','hamster1.jpg','Inquieto');
-- ordenes
SELECT * FROM orders;
insert into orders (user_id,pet_id,date_of_order) values (1,3,NOW());
insert into orders (user_id,pet_id,date_of_order) values (2,1,NOW());