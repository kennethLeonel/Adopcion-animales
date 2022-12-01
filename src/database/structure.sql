CREATE DATABASE IF NOT EXISTS `Users_pets_db`;

USE `Users_pets_db`;

CREATE TABLE IF NOT EXISTS `Countries`(
    `country_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`country_id`)
);


CREATE TABLE IF NOT EXISTS `Pet_types`(
    `pet_type_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`pet_type_id`)
);

CREATE TABLE IF NOT EXISTS `Cities`(
    `city_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `country_id` INT NOT NULL ,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`city_id`),
    FOREIGN KEY (`country_id`) REFERENCES Countries(`country_id`)
);
CREATE TABLE IF NOT EXISTS `Breeds`(
    `breed_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `pet_type_id` INT NOT NULL ,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`breed_id`),
    FOREIGN KEY (`pet_type_id`) REFERENCES Pet_types(`pet_type_id`)
);

CREATE TABLE IF NOT EXISTS `Users`(
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `image` VARCHAR(250) NOT NULL,
    `city_id` INT NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`user_id`),
     FOREIGN KEY (`city_id`) REFERENCES Cities(`city_id`)
);
CREATE TABLE IF NOT EXISTS `Pets`(
    `pet_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `age` INT NOT NULL,
    `sex` VARCHAR(30) NOT NULL,
    `breed_id` INT NOT NULL,
    `status` VARCHAR(30) NOT NULL,
    `number_of_vaccines` INT NOT NULL,
    `city_id` INT NOT NULL,
    `description` VARCHAR(230) NOT NULL,
    `image` VARCHAR(230) NOT NULL,
    `attitude` VARCHAR(30) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`pet_id`),
     FOREIGN KEY (`breed_id`) REFERENCES Breeds(`breed_id`),
     FOREIGN KEY (`city_id`) REFERENCES Cities(`city_id`)
);
CREATE TABLE IF NOT EXISTS `Orders`(
    `order_id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `pet_id` INT NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT NULL,
    `updated_at` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`order_id`),
     FOREIGN KEY (`user_id`) REFERENCES Users(`user_id`),
     FOREIGN KEY (`pet_id`) REFERENCES Pets(`pet_id`)
);