-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a televisions table, drop it

DROP TABLE IF EXISTS televisions;

-- Create a televisions table

--  The table should have id, model_name, screen_size, resolution,
--  price, release_date, photo_url

CREATE TABLE televisions (
    id SERIAL primary key,
    model_name VARCHAR(200) NOT NULL,
    screen_size INTEGER NOT NULL,
    resolution INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    release_date timestamp NOT NULL,
    photo_url VARCHAR(200) NULL 
);


-- Insert 4 televisions into the televisions table

INSERT INTO televisions (model_name, screen_size, resolution, price, release_date)
VALUES
('apple tv', 55, 3, 999.99, '2020-09-09 19:09:19');


-- Select all entries from the televisions table

SELECT * from televisions;


-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the tv_models, removing the resolution column
--  and add vertical_resolution and horizontal_resolution columns