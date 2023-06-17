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
  `account_no` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `balance` INT NULL DEFAULT 0,
  `secret` VARCHAR(45) NULL,
  PRIMARY KEY (`account_no`),
  INDEX `bank_email_idx` (`email` ASC) VISIBLE,
  CONSTRAINT `bank_email`
    FOREIGN KEY (`email`)
    REFERENCES `e_commerce`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `e_commerce`.`transaction` (
  `t_id` INT NOT NULL AUTO_INCREMENT,
  `buyer` VARCHAR(45) NULL,
  `total` INT NOT NULL,
  `supplier` VARCHAR(45) NULL,
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
    
CREATE TABLE `e_commerce`.`transaction_product` (
  `t_id` INT NOT NULL,
  `p_id` INT NOT NULL,
  `count` INT NULL,
  INDEX `p_id_idx` (`p_id` ASC) VISIBLE,
  CONSTRAINT `t_id`
    FOREIGN KEY (`t_id`)
    REFERENCES `e_commerce`.`transaction` (`t_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `p_id`
    FOREIGN KEY (`p_id`)
    REFERENCES `e_commerce`.`product` (`p_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `e_commerce`.`notification` (
  `n_id` INT NOT NULL AUTO_INCREMENT,
  `sender` VARCHAR(45) NOT NULL,
  `reciever` VARCHAR(45) NOT NULL,
  `t_id` INT NULL,
  `message` VARCHAR(405) NULL,
  `seen` INT NULL DEFAULT 0,
  INDEX `sender_idx` (`sender` ASC) VISIBLE,
  INDEX `reciever_idx` (`reciever` ASC) VISIBLE,
  INDEX `t_id_idx` (`t_id` ASC) VISIBLE,
  PRIMARY KEY (`n_id`),
  CONSTRAINT `sender`
    FOREIGN KEY (`sender`)
    REFERENCES `e_commerce`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `reciever`
    FOREIGN KEY (`reciever`)
    REFERENCES `e_commerce`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `transaction_id`
    FOREIGN KEY (`t_id`)
    REFERENCES `e_commerce`.`transaction` (`t_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


