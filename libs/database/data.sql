-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.24 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table zerocom.hero: ~2 rows (approximately)
/*!40000 ALTER TABLE `hero` DISABLE KEYS */;
REPLACE INTO `hero` (`id`, `name`, `img`) VALUES
	(1, 'Bobby B', 'https://nerdist.com/wp-content/uploads/2019/06/robert-baratheon.jpg'),
	(2, 'Superman', 'https://www.elcbrands.com/media/superman1.1.jpg');
/*!40000 ALTER TABLE `hero` ENABLE KEYS */;

-- Dumping data for table zerocom.hero_power: ~4 rows (approximately)
/*!40000 ALTER TABLE `hero_power` DISABLE KEYS */;
REPLACE INTO `hero_power` (`hero_id`, `power_id`) VALUES
	(1, 1),
	(2, 2),
	(1, 3),
	(2, 3);
/*!40000 ALTER TABLE `hero_power` ENABLE KEYS */;

-- Dumping data for table zerocom.photo: ~0 rows (approximately)
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;

-- Dumping data for table zerocom.power: ~2 rows (approximately)
/*!40000 ALTER TABLE `power` DISABLE KEYS */;
REPLACE INTO `power` (`id`, `name`) VALUES
	(1, 'Drink'),
	(2, 'Flight'),
	(3, 'Strength');
/*!40000 ALTER TABLE `power` ENABLE KEYS */;

-- Dumping data for table zerocom.user: ~2 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`id`, `username`, `password`, `isActive`) VALUES
	(1, 'admin', '', 1),
	(2, 'jeff.kubler', '$2b$10$j.gxWrUzE1Ga0VnDBg0X2erUuzptDgxl46U2tQCcNRLoSV2cZZ2xa', 1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
