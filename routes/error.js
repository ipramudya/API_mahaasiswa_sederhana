const { Router } = require("express");

const router = Router();

router.use((req, res) => {
  res.json("There's no route matches");
});

module.exports = router;
