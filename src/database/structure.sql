CREATE DATABASE IF NOT EXISTS `DatabaseAdoptMe`;

USE `DatabaseAdoptMe`;

CREATE TABLE IF NOT EXISTS `Countries`(
    `country_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL UNIQUE,
    PRIMARY KEY (`country_id`)
);


CREATE TABLE IF NOT EXISTS `Pet_types`(
    `pet_type_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL UNIQUE,
    PRIMARY KEY (`pet_type_id`)
);

CREATE TABLE IF NOT EXISTS `Cities`(
    `city_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL UNIQUE,
    `country_id` INT NOT NULL ,
    PRIMARY KEY (`city_id`),
    FOREIGN KEY (`country_id`) REFERENCES Countries(`country_id`)
);
CREATE TABLE IF NOT EXISTS `Breeds`(
    `breed_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL UNIQUE,
    `pet_type_id` INT NOT NULL ,
    PRIMARY KEY (`breed_id`),
    FOREIGN KEY (`pet_type_id`) REFERENCES Pet_types(`pet_type_id`)
);

CREATE TABLE IF NOT EXISTS `Users`(
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(50) NOT NULL,
    `image` VARCHAR(250) NOT NULL,
    `city_id` INT NOT NULL,
    `country_id` INT NOT NULL, 
    `role` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`user_id`),
    FOREIGN KEY (`city_id`) REFERENCES Cities(`city_id`),
    FOREIGN KEY (`country_id`) REFERENCES Countries(`country_id`)

);
CREATE TABLE IF NOT EXISTS `Pets`(
    `pet_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `sex` VARCHAR(30) NOT NULL,
    `breed_id` INT NOT NULL,
    `status` BOOLEAN NOT NULL,
    `number_of_vaccines` INT NOT NULL,
    `city_id` INT NOT NULL,
    `country_id` INT NOT NULL, 
    `description` VARCHAR(230) NOT NULL,
    `image` VARCHAR(230) NOT NULL,
    `attitude` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`pet_id`),
    FOREIGN KEY (`breed_id`) REFERENCES Breeds(`breed_id`),
    FOREIGN KEY (`city_id`) REFERENCES Cities(`city_id`),
    FOREIGN KEY (`country_id`) REFERENCES Countries(`country_id`)

);
CREATE TABLE IF NOT EXISTS `Orders`(
    `order_id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `pet_id` INT NOT NULL,
    `date_of_order` DATETIME DEFAULT NULL,
    PRIMARY KEY (`order_id`),
     FOREIGN KEY (`user_id`) REFERENCES Users(`user_id`),
     FOREIGN KEY (`pet_id`) REFERENCES Pets(`pet_id`)
);