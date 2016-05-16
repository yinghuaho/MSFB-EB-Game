-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 16, 2016 at 01:34 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `MSFB`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `url` varchar(999) NOT NULL,
  `description` varchar(300) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `title`, `url`, `description`, `date`, `userid`) VALUES
(3, 'Flower', 'https://pixabay.com/static/uploads/photo/2014/07/10/11/00/daisies-388946_960_720.jpg', 'WHAT A PRETTY FLOWER LOL', '2016-05-15 20:57:20', 2),
(4, 'DAYUMMM', 'http://images2.fanpop.com/images/photos/4800000/Beauty-of-nature-random-4884745-1280-800.jpg', 'wow i wanna go here so bad !!', '2016-05-15 23:13:41', 2),
(5, 'Lol', 'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701', 'trolololol', '2016-05-15 23:18:54', 3);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `message` varchar(5000) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `userid`, `message`, `time`) VALUES
(1, 1, 'asdasdasd', '2016-03-02 00:24:58'),
(2, 1, 'qweqweq', '2016-03-02 00:55:39'),
(3, 1, 'da', '2016-03-02 00:57:29'),
(4, 1, 'dadasda', '2016-03-02 00:57:32'),
(5, 1, 'dadasdaxc', '2016-03-02 01:02:02'),
(6, 1, 'dadasdaxcwewrewtertreyey', '2016-03-02 01:02:30'),
(7, 1, 'dadasdaxcwewrewtertreyey', '2016-03-02 01:02:33'),
(8, 1, 'dadasdaxcwewrewtertreyey', '2016-03-02 01:02:33'),
(9, 1, 'eqweqw', '2016-03-02 01:06:46'),
(10, 1, 'sdasdasdasdasda', '2016-03-02 01:25:59'),
(18, 2, 'szsd', '2016-05-09 01:13:19'),
(19, 2, 'HI MIKE', '2016-05-09 01:13:24'),
(21, 2, 'edited', '2016-05-15 23:05:00'),
(22, 2, 'hI HUAHAUAHOAHOHOHOHOAHOHFIOUAHOAUHAOHOHOHO', '2016-05-15 23:05:54'),
(23, 3, 'hi there', '2016-05-15 23:16:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(9999) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(500) NOT NULL,
  `usertype` varchar(100) NOT NULL,
  `join_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `firstname`, `lastname`, `email`, `usertype`, `join_date`) VALUES
(1, 'mike', '1234567', 'Mike', 'Ho', 'mike@gmail.com', 'user', '2016-03-02 00:24:40'),
(2, 'hi', 'hi', 'hello', 'world', 'hi@email.com', '', '2016-05-08 21:18:59'),
(3, 'hey', 'hey', 'Henry', 'Lol', 'hey@email.com', '', '2016-05-15 23:16:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`),
  ADD KEY `userid_2` (`userid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
