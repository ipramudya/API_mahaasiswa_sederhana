const { Router } = require("express");

const pool = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const getQuery = "SELECT * FROM mahasiswa";
    const data = await pool.query(getQuery);

    res.json(data[0]);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getQueryId = "SELECT * FROM mahasiswa WHERE nim=?";
    const data = await pool.query(getQueryId, [id]);

    res.json(data[0]);
  } catch (error) {
    console.error(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, faculty, email } = req.body;
    const postQuery =
      "INSERT INTO mahasiswa (first_name, last_name, faculty, email) VALUES (?, ?, ?, ?)";
    const data = await pool.query(postQuery, [
      first_name,
      last_name,
      faculty,
      email,
    ]);

    res.json(
      `Adding ${first_name} ${last_name}, ${faculty}, ... to the database`
    );
  } catch (error) {
    console.error(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, faculty, email } = req.body;
  const putQuery =
    "UPDATE mahasiswa SET first_name=?, last_name=?, faculty=?, email=?  WHERE nim = ? ";
  const data = await pool.query(putQuery, [
    first_name,
    last_name,
    faculty,
    email,
    id,
  ]);

  res.json(`Data with id ${id} has been updated...`);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteQuery = "DELETE FROM mahasiswa WHERE nim=?";
  const data = await pool.query(deleteQuery, [id]);

  res.json(`Data with id ${id} has been deleted...`);
});

module.exports = router;
