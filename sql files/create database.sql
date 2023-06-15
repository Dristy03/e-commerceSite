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
  `p_id` INT NOT NULL AUTO_INCREMENT,
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
    
CREATE TABLE `e_commerce`.`bank` (
  `email` VARCHAR(45) NULL,
  `balance` INT NULL,
  INDEX `bank-user_idx` (`email` ASC) VISIBLE,
  CONSTRAINT `bank-user`
    FOREIGN KEY (`email`)
    REFERENCES `e_commerce`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `e_commerce`.`transaction` (
  `t_id` INT NOT NULL,
  `buyer` VARCHAR(45) NULL,
  `supplier` VARCHAR(45) NULL,
  `amount` INT NULL,
  `buyer_verified` INT NULL DEFAULT 0,
  `supplier_verified` INT NULL DEFAULT 0,
  `completed` INT NULL DEFAULT 0,
  PRIMARY KEY (`t_id`),
  INDEX `buyer_idx` (`buyer` ASC) VISIBLE,
  INDEX `supplier_idx` (`supplier` ASC) VISIBLE,
  CONSTRAINT `buyer`
    FOREIGN KEY (`buyer`)
    REFERENCES `e_commerce`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `supplier`
    FOREIGN KEY (`supplier`)
    REFERENCES `e_commerce`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
