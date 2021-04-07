-- CRUD OPERATION MYSQL untuk memudahkan Query pada mysql terminal

-- Mengambil data seluruh mahasiswa
SELECT * FROM mahasiswa

-- Mengambil data mahasiswa berdasarkan nim
SELECT * FROM mahasiswa WHERE nim=?

-- Menambahkan data mahasiswa
INSERT INTO mahasiswa (first_name, last_name, faculty, email) VALUES (?, ?, ?, ?)

-- Memperbarui data mahasiswa berdasarkan nim
UPDATE mahasiswa SET first_name=?, last_name=?, faculty=?, email=?  WHERE nim = ?

-- Menghapus data mahasiswa berdasarkan nim
DELETE FROM mahasiswa WHERE nim=?