-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema beerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `beerdb` ;

-- -----------------------------------------------------
-- Schema beerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `beerdb` DEFAULT CHARACTER SET utf8 ;
USE `beerdb` ;

-- -----------------------------------------------------
-- Table `beer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beer` ;

CREATE TABLE IF NOT EXISTS `beer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `company` VARCHAR(500) NOT NULL,
  `name` VARCHAR(500) NOT NULL,
  `abv` DECIMAL(2,1) NOT NULL,
  `type` VARCHAR(500) NOT NULL,
  `description` TEXT NULL,
  `image_url` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS beer@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'beer'@'localhost' IDENTIFIED BY 'beer';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'beer'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `beer`
-- -----------------------------------------------------
START TRANSACTION;
USE `beerdb`;
INSERT INTO `beer` (`id`, `company`, `name`, `abv`, `type`, `description`, `image_url`) VALUES (1, 'New Belgium', 'Voodoo Ranger Juicy Haze IPA', 7.5, 'IPA - New England/Hazy', 'Packed with bright tropical aromas and brilliant citrusy flavors, this unfiltered IPA wraps up with a pleasantly smooth finish.', 'https://d2sochvv0rudri.cloudfront.net/beer_labels/239304/new-belgium-voodoo-ranger-juicy-haze-ipa-5.png');
INSERT INTO `beer` (`id`, `company`, `name`, `abv`, `type`, `description`, `image_url`) VALUES (2, 'Bootstrap Brewing', 'Lush Puppy Juicy IPA', 6.3, 'IPA - New England/Hazy', 'Lush Puppy is made with massive amounts of hops added at the end of the kettle boil and dry hopped in the fermenter to give this beer a great tropical, citrusy flavor and aroma. Gluten reduced.', 'https://untappd.akamaized.net/site/beer_logos_hd/beer-2575009_90aa5_hd.jpeg');
INSERT INTO `beer` (`id`, `company`, `name`, `abv`, `type`, `description`, `image_url`) VALUES (3, 'Left Hand Brewing Co.', 'Milk Stout', 6.0, 'Stout - Milk/Sweet', 'Milk sugar in your stout is like cream in your coffee. Just enough sweetness to keep the dark roast in check. Rich and robust, our classic Milk Stout exhibits notes of dark chocolate, freshly brewed coffee, caramelized sugar and roasted malt.', 'https://lh3.googleusercontent.com/9vUhEsGXILsf_fPdoXlkqf9w4uDeUqP2LsynMMUDKfQSvNMNR7fGBeQloQRGg-NXIm10GgVw6NEwbj8nS55tX97KZ61D6XI=s750');
INSERT INTO `beer` (`id`, `company`, `name`, `abv`, `type`, `description`, `image_url`) VALUES (4, 'Founders Brewing Co.', 'Breakfast Stout', 8.3, 'Stout - Milk | Sweet', 'The coffee lover’s consummate beer. Brewed with an abundance of flaked oats, bitter and imported chocolates, and two types of coffee, this stout has an intense fresh-roasted java nose topped with a frothy, cinnamon-colored head that goes forever.', 'https://untappd.akamaized.net/site/beer_logos_hd/beer-961501_b3b17_hd.jpeg');

COMMIT;

