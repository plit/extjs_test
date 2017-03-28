-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2017. Már 28. 15:36
-- Kiszolgáló verziója: 5.6.19-log
-- PHP verzió: 5.5.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `travel`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ports`
--

CREATE TABLE `ports` (
  `port_id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- A tábla adatainak kiíratása `ports`
--

INSERT INTO `ports` (`port_id`, `name`, `description`) VALUES
(1, 'Lymington', ''),
(2, 'Yarmouth', ''),
(3, 'Ryde', ''),
(4, 'Portsmouth Harbour', ''),
(5, 'Fishbourne', ''),
(6, 'Portsmouth', '');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `timetables`
--

CREATE TABLE `timetables` (
  `timetable_id` int(11) NOT NULL,
  `start_port_id` int(11) NOT NULL,
  `end_port_id` int(11) NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- A tábla adatainak kiíratása `timetables`
--

INSERT INTO `timetables` (`timetable_id`, `start_port_id`, `end_port_id`, `time`) VALUES
(1, 1, 2, '00:00:00'),
(2, 2, 1, '01:00:00'),
(3, 1, 2, '04:00:00'),
(4, 2, 1, '05:00:00'),
(5, 1, 2, '06:00:00'),
(6, 2, 1, '07:00:00'),
(7, 1, 2, '08:00:00'),
(8, 2, 1, '09:00:00'),
(9, 1, 2, '10:00:00'),
(10, 2, 1, '11:00:00'),
(11, 1, 2, '12:00:00'),
(12, 2, 1, '13:00:00'),
(13, 1, 2, '14:00:00'),
(14, 2, 1, '15:00:00'),
(15, 1, 2, '16:00:00'),
(16, 2, 1, '17:00:00'),
(17, 1, 2, '18:00:00'),
(18, 2, 1, '19:00:00'),
(19, 1, 2, '20:00:00'),
(20, 2, 1, '21:00:00'),
(21, 1, 2, '22:00:00'),
(22, 2, 1, '23:00:00'),
(23, 3, 4, '10:30:00'),
(24, 4, 3, '12:30:00'),
(25, 3, 4, '16:30:00'),
(26, 4, 3, '18:30:00'),
(27, 5, 6, '09:15:00'),
(28, 6, 6, '10:15:00'),
(29, 5, 6, '18:15:00'),
(30, 6, 6, '19:15:00');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `ports`
--
ALTER TABLE `ports`
  ADD PRIMARY KEY (`port_id`);

--
-- A tábla indexei `timetables`
--
ALTER TABLE `timetables`
  ADD PRIMARY KEY (`timetable_id`),
  ADD KEY `start_port_id` (`start_port_id`),
  ADD KEY `end_port_id` (`end_port_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `ports`
--
ALTER TABLE `ports`
  MODIFY `port_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT a táblához `timetables`
--
ALTER TABLE `timetables`
  MODIFY `timetable_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `timetables`
--
ALTER TABLE `timetables`
  ADD CONSTRAINT `timetables_ibfk_1` FOREIGN KEY (`start_port_id`) REFERENCES `ports` (`port_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `timetables_ibfk_2` FOREIGN KEY (`end_port_id`) REFERENCES `ports` (`port_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
