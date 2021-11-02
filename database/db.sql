CREATE DATABASE database_myanimemangalist;

USE database_myanimemangalist;


-- USERS TABLES
CREATE TABLE users(
    id INT(20) NOT NULL,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(20) NOT NULL AUTO_INCREMENT;

DESCRIBE users;

-- TABLE RELATIONAL
CREATE TABLE user_animeManga (
    user_id INT(20) NOT NULL,
    animeManga_id INT(20) NOT NULL,
    PRIMARY KEY(user_id, animeManga_id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT fk_animeManga FOREIGN KEY (animeManga_id) REFERENCES animeManga (id)
);

-- ANIME TABLES
CREATE TABLE animeManga (
    id INT(20) NOT NULL,
    title VARCHAR(150) NOT NULL,
    type VARCHAR(10) NOT NULL,
    synopsis TEXT,
    url_image VARCHAR(500) NOT NULL,
    episodeCount INT(5) NOT NULL
);

ALTER TABLE animeManga
    ADD PRIMARY KEY(id);

ALTER TABLE animeManga
    MODIFY id INT(20) NOT NULL AUTO_INCREMENT;

DESCRIBE animeManga;


-- SQL para obtener los animes que sigue el usuario x
SELECT u.username, a.title
FROM users u
INNER JOIN user_animeManga ua
ON ua.animeManga_id = u.id
INNER JOIN animeManga a
ON a.id = ua.id
WHERE u.id = ?