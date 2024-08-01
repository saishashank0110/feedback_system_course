-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2021 at 01:29 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbms`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `c_id` varchar(20) NOT NULL,
  `c_name` varchar(100) NOT NULL,
  `credits` varchar(100) NOT NULL,
  `mids` varchar(100) NOT NULL,
  `compre` varchar(100) NOT NULL,
  `handout` varchar(1000) NOT NULL,
  `c_avg_rating` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

-- --------------------------------------------------------

--
-- Table structure for table `details`
--

CREATE TABLE `details` (
  `id` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `details`
--

INSERT INTO `details` (`id`, `password`, `role`, `status`) VALUES
('A1000', '$2b$10$d5dhg/6lJnXf3Qtux2H5FeD2U9Kf3YgSni7ROXg50Kq1jZ9f/Nu2.', 'admin', 'v');

-- --------------------------------------------------------

--
-- Table structure for table `feedback_course`
--

CREATE TABLE `feedback_course` (
  `c_id` varchar(20) NOT NULL,
  `s_id` varchar(20) NOT NULL,
  `c_rating` varchar(100) NOT NULL,
  `c_review` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback_course`
--

--
-- Triggers `feedback_course`
--
DELIMITER $$
CREATE TRIGGER `cAvgRating` AFTER INSERT ON `feedback_course` FOR EACH ROW BEGIN
    DECLARE n double;
    select avg(c_rating) into n from feedback_course where c_id = NEW.c_id;
    update course set c_avg_rating = n where c_id = NEW.c_id;
    
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `feedback_prof`
--

CREATE TABLE `feedback_prof` (
  `s_id` varchar(20) NOT NULL,
  `p_id` varchar(20) NOT NULL,
  `p_rating` varchar(100) NOT NULL,
  `p_review` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback_prof`
--

--
-- Triggers `feedback_prof`
--
DELIMITER $$
CREATE TRIGGER `pAvgRating` AFTER INSERT ON `feedback_prof` FOR EACH ROW BEGIN
    DECLARE n double;
    select avg(p_rating) into n from feedback_prof where p_id = NEW.p_id;
    update professor set p_avg_rating = n where p_id = NEW.p_id;
    
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `professor`
--

CREATE TABLE `professor` (
  `p_id` varchar(20) NOT NULL,
  `p_name` varchar(100) NOT NULL,
  `p_email` varchar(100) NOT NULL,
  `p_contact_no` varchar(100) NOT NULL,
  `p_avg_rating` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `professor`
--


-- --------------------------------------------------------

--
-- Table structure for table `registers`
--

CREATE TABLE `registers` (
  `c_id` varchar(20) NOT NULL,
  `s_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registers`
--

-- --------------------------------------------------------

--
-- Stand-in structure for view `reg_courses`
-- (See below for the actual view)
--
CREATE TABLE `reg_courses` (
`c_id` varchar(20)
,`c_name` varchar(100)
,`s_id` varchar(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `s_id` varchar(20) NOT NULL,
  `s_name` varchar(100) NOT NULL,
  `s_email` varchar(100) NOT NULL,
  `s_contact_no` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

-- --------------------------------------------------------

--
-- Table structure for table `teaches`
--

CREATE TABLE `teaches` (
  `c_id` varchar(20) NOT NULL,
  `p_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teaches`
--

-- --------------------------------------------------------

--
-- Structure for view `reg_courses`
--
DROP TABLE IF EXISTS `reg_courses`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `reg_courses`  AS   (select `c`.`c_id` AS `c_id`,`c`.`c_name` AS `c_name`,`r`.`s_id` AS `s_id` from (`course` `c` join `registers` `r`) where `c`.`c_id` = `r`.`c_id`)  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback_course`
--
ALTER TABLE `feedback_course`
  ADD PRIMARY KEY (`c_id`,`s_id`),
  ADD KEY `feedback_c_sid` (`s_id`);

--
-- Indexes for table `feedback_prof`
--
ALTER TABLE `feedback_prof`
  ADD PRIMARY KEY (`s_id`,`p_id`),
  ADD KEY `feedback_p_pid` (`p_id`);

--
-- Indexes for table `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `registers`
--
ALTER TABLE `registers`
  ADD PRIMARY KEY (`c_id`,`s_id`),
  ADD KEY `enrol_sid` (`s_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`s_id`);

--
-- Indexes for table `teaches`
--
ALTER TABLE `teaches`
  ADD PRIMARY KEY (`c_id`,`p_id`),
  ADD KEY `fk.p_id` (`p_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `feedback_course`
--
ALTER TABLE `feedback_course`
  ADD CONSTRAINT `feedback_c_cid` FOREIGN KEY (`c_id`) REFERENCES `course` (`c_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `feedback_c_sid` FOREIGN KEY (`s_id`) REFERENCES `student` (`s_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `feedback_prof`
--
ALTER TABLE `feedback_prof`
  ADD CONSTRAINT `feedback_p_pid` FOREIGN KEY (`p_id`) REFERENCES `professor` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `feedback_p_sid` FOREIGN KEY (`s_id`) REFERENCES `student` (`s_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `professor`
--
ALTER TABLE `professor`
  ADD CONSTRAINT `p_user_id` FOREIGN KEY (`p_id`) REFERENCES `details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `registers`
--
ALTER TABLE `registers`
  ADD CONSTRAINT `enrol_cid` FOREIGN KEY (`c_id`) REFERENCES `course` (`c_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `enrol_sid` FOREIGN KEY (`s_id`) REFERENCES `student` (`s_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `s_user_id` FOREIGN KEY (`s_id`) REFERENCES `details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teaches`
--
ALTER TABLE `teaches`
  ADD CONSTRAINT `fk.c_id` FOREIGN KEY (`c_id`) REFERENCES `course` (`c_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk.p_id` FOREIGN KEY (`p_id`) REFERENCES `professor` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
