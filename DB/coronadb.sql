-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema coronadb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `coronadb` ;

-- -----------------------------------------------------
-- Schema coronadb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `coronadb` DEFAULT CHARACTER SET utf8 ;
USE `coronadb` ;

-- -----------------------------------------------------
-- Table `cases`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cases` ;

CREATE TABLE IF NOT EXISTS `cases` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `state` VARCHAR(45) NOT NULL,
  `positive` INT NULL,
  `negative` INT NULL,
  `in_icu` INT NULL,
  `on_ventilator` INT NULL,
  `recovered` INT NULL,
  `death` INT NULL,
  `hospitalized` INT NULL,
  `total_test_result` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS corona@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'corona'@'localhost' IDENTIFIED BY 'corona';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'corona'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `cases`
-- -----------------------------------------------------
START TRANSACTION;
USE `coronadb`;
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (1, 'AK', 257, 7475, null, null, 63, 8, 31, 7732);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (2, 'AL', 3191, 18058, null, null, null, 91, 402, 21249);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (3, 'AR', 1226, 17352, null, 33, 340, 24, 130, 18578);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (4, 'AZ', 3393, 37137, null, null, null, 108, null, 40530);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (5, 'CA', 19472, 152604, 1591, null, null, 541, null, 172076);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (6, 'CO', 6510, 26143, null, null, null, 250, 1312, 32653);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (7, 'CT', 11510, 28321, null, null, null, 494, null, 39831);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (8, 'DC', 1778, 8261, null, null, 447, 47, null, 10039);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (9, 'DE', 1479, 9624, null, null, 191, 33, null, 11103);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (10, 'FL', 18494, 154439, null, null, null, 438, 2661, 172933);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (11, 'GA', 12159, 39556, null, null, null, 428, 2479, 51715);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (12, 'HI', 465, 17066, null, null, 284, 8, 43, 17531);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (13, 'IA', 1510, 15622, 55, 30, 585, 34, null, 17132);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (14, 'ID', 1396, 12368, null, null, null, 25, 128, 13764);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (15, 'IL', 19810, 72969, 1166, 821, null, 677, null, 92779);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (16, 'IN', 7435, 31780, 820, 497, null, 330, null, 39215);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (17, 'KS', 1268, 11075, null, null, null, 55, 293, 12343);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (18, 'KY', 1693, 22595, 105, null, 464, 90, 459, 24288);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (19, 'LA', 20014, 76901, null, 470, null, 806, null, 96915);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (20, 'MA', 22860, 85916, null, null, null, 686, 2120, 108776);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (21, 'MD', 7694, 39544, null, null, 431, 206, 1709, 47238);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (22, 'ME', 616, 6088, null, null, 256, 19, 114, 6704);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (23, 'MI', 23993, 52021, 1582, 1441, 595, 1392, null, 76014);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (24, 'MN', 1427, 33977, 69, null, 793, 64, 340, 35404);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (25, 'MO', 4024, 39148, null, null, null, 109, null, 43172);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (26, 'MS', 2642, 18632, null, null, null, 93, 528, 21274);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (27, 'MT', 377, 8204, null, null, 169, 6, 46, 8581);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (28, 'NC', 4312, 56081, null, null, null, 80, null, 60393);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (29, 'ND', 293, 9787, null, null, 119, 7, 36, 10080);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (30, 'NE', 700, 9285, null, null, null, 17, null, 9985);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (31, 'NH', 885, 9608, null, null, 234, 22, 134, 10493);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (32, 'NJ', 58151, 62042, 1746, 1650, null, 2183, null, 120193);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (33, 'NM', 1091, 26007, null, 18, 235, 19, null, 27098);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (34, 'NV', 2700, 20887, null, null, null, 102, null, 23587);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (35, 'NY', 180458, 260522, 5009, null, 14590, 8627, 33244, 440980);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (36, 'OH', 6250, 54221, null, null, null, 247, 1859, 60471);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (37, 'OK', 1868, 20790, 191, null, 865, 94, 446, 22658);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (38, 'OR', 1371, 25853, 58, 46, null, 48, 338, 27224);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (39, 'PA', 21655, 98498, null, 639, null, 494, null, 120153);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (40, 'RI', 2349, 15858, 50, 26, 35, 56, null, 18207);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (41, 'SC', 3207, 26886, null, null, null, 80, 496, 30093);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (42, 'SD', 626, 7378, null, null, 189, 6, 33, 8004);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (43, 'TN', 5114, 61714, null, null, 1386, 101, 556, 66828);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (44, 'TX', 12561, 107972, null, null, 1617, 254, null, 120533);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (45, 'UT', 2206, 40340, null, null, null, 18, 190, 42546);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (46, 'VA', 5077, 32922, 709, 283, null, 130, null, 37999);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (47, 'VT', 711, 8547, null, null, 15, 25, null, 9258);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (48, 'WA', 9887, 83391, 191, null, null, 475, null, 93278);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (49, 'WI', 3213, 34680, 179, null, null, 137, 950, 37893);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (50, 'WV', 577, 14875, 40, 22, 63, 5, null, 15452);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (51, 'WY', 340, 5003, null, null, 129, 0, 37, 5343);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (52, 'PR', 788, 5583, null, null, null, 42, null, 6371);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (53, 'AS', 0, 3, null, null, null, null, null, 3);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (54, 'GU', 133, 693, 2, 2, 58, 5, null, 826);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (55, 'MP', 11, 27, null, null, null, 2, null, 38);
INSERT INTO `cases` (`id`, `state`, `positive`, `negative`, `in_icu`, `on_ventilator`, `recovered`, `death`, `hospitalized`, `total_test_result`) VALUES (56, 'VI', 51, 299, null, null, 43, 1, null, 350);

COMMIT;

