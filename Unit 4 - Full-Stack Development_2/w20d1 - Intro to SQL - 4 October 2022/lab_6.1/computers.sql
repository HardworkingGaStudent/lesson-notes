-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a computers table, drop it

DROP TABLE IF EXISTS computers;

-- Create a computers table


-- The table should have id, make, model, cpu_speed, memory_size
CREATE TABLE computers (
	id SERIAL primary key,
	make VARCHAR(200) NOT NULL,
	model VARCHAR(200) NOT NULL,
	cpu_speed INTEGER NOT NULL,
	memory_size INTEGER NOT NULL
);


-- Insert 4 computers into the computers table

INSERT INTO computers (make, model, cpu_speed, memory_size)
VALUES 
	('asus', 'm1', 12, 32),
	('apple', 'm13', 12, 32),
	('acer', 'x3', 12, 32),
	('xiaomi', 'yu', 12, 32);


-- Select all entries from the computers table

SELECT * from computers;

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the computers_models, removing the storage_amount column
-- and add storage_type and storage_size columns