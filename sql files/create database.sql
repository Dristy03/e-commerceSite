 CREATE DATABASE e_commerce;
 
 use e_commerce;
 
 CREATE TABLE `e_commerce`.`user` (
  `email` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
  
  CREATE TABLE `e_commerce`.`product` (
  `p_id` INT NOT NULL,
  `p_name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `supplier_email` VARCHAR(45) NOT NULL,
  `image` VARCHAR(100) NULL,
  PRIMARY KEY (`p_id`),
  INDEX `product-supplier_idx` (`supplier_email` ASC) VISIBLE,
  CONSTRAINT `product-supplier`
    FOREIGN KEY (`supplier_email`)
    REFERENCES `e_commerce`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);