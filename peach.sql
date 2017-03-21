-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: peach
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `job_id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `comment` mediumtext NOT NULL,
  `assigned_by_id` mediumint(9) NOT NULL,
  `assigned_to_id` mediumint(9) NOT NULL,
  `patient_id` mediumint(9) DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `assigned_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (5,'title job23',0,'comment job',3,45,234,'2017-03-05 11:25:50','2017-03-07 18:32:17'),(6,'Brick',0,'Another brick in the wall',2,4,1440,'2017-04-14 00:00:00','2017-03-10 09:16:13'),(9,'Barack is sick',0,'Test',2,4,1440,'2017-03-18 00:00:00','2017-03-17 13:38:40'),(10,'TEst',0,'tedwedw calvn',2,4,1440,'2017-03-25 00:00:00','2017-03-17 13:41:00'),(11,'23',0,'e23',2,4,1440,'2017-03-16 00:00:00','2017-03-17 13:59:23');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meetings`
--

DROP TABLE IF EXISTS `meetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meetings` (
  `meeting_id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL,
  `starting_time` time DEFAULT NULL,
  `ending_time` time DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`meeting_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetings`
--

LOCK TABLES `meetings` WRITE;
/*!40000 ALTER TABLE `meetings` DISABLE KEYS */;
INSERT INTO `meetings` VALUES (1,'Meeting titledwedwedwedweeeeeeeeeeeedwedwededw','11:26:50','11:29:50','2017-03-09 19:44:49'),(3,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:30:13'),(4,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:30:50'),(5,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:31:11'),(6,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:31:47'),(7,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:33:02'),(8,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:35:17'),(9,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:35:43'),(10,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:36:09'),(11,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:36:22'),(12,'Meeting title 2','11:26:50','11:25:50','2017-03-09 19:37:30'),(13,'Meeting title 2','11:26:50','11:29:50','2017-03-09 19:38:12'),(14,'Meeting title 2','11:26:50','11:29:50','2017-03-09 19:38:50'),(15,'Meeting title 2','11:29:50','11:29:50','2017-03-09 19:38:58'),(16,'Meeting title 2','11:29:50','11:43:50','2017-03-09 19:40:26'),(17,'Meeting title 2','11:45:50','11:43:50','2017-03-09 19:40:29'),(18,'Meeting title 2','11:42:50','11:43:50','2017-03-09 19:41:05'),(19,'Meeting title 2','11:41:50','11:43:50','2017-03-09 19:41:18');
/*!40000 ALTER TABLE `meetings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meetings_occurences`
--

DROP TABLE IF EXISTS `meetings_occurences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meetings_occurences` (
  `meeting_occurence_id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `meeting_id` mediumint(9) NOT NULL,
  `occurence_date` date NOT NULL,
  PRIMARY KEY (`meeting_occurence_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetings_occurences`
--

LOCK TABLES `meetings_occurences` WRITE;
/*!40000 ALTER TABLE `meetings_occurences` DISABLE KEYS */;
INSERT INTO `meetings_occurences` VALUES (3,11,'2017-05-15'),(4,1,'2017-06-15'),(6,1,'2017-06-15');
/*!40000 ALTER TABLE `meetings_occurences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialities`
--

DROP TABLE IF EXISTS `specialities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specialities` (
  `speciality_id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  PRIMARY KEY (`speciality_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialities`
--

LOCK TABLES `specialities` WRITE;
/*!40000 ALTER TABLE `specialities` DISABLE KEYS */;
INSERT INTO `specialities` VALUES (1,'test'),(2,'jusite'),(3,'wdewde');
/*!40000 ALTER TABLE `specialities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialities_assigments`
--

DROP TABLE IF EXISTS `specialities_assigments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specialities_assigments` (
  `speciality_assigment_id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `speciality_id` mediumint(9) NOT NULL,
  `meeting_id` mediumint(9) NOT NULL,
  PRIMARY KEY (`speciality_assigment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialities_assigments`
--

LOCK TABLES `specialities_assigments` WRITE;
/*!40000 ALTER TABLE `specialities_assigments` DISABLE KEYS */;
INSERT INTO `specialities_assigments` VALUES (3,1,1),(4,2,1),(5,3,1),(6,3,2),(7,2,1),(8,1,1);
/*!40000 ALTER TABLE `specialities_assigments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-21 12:39:42
