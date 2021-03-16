const express = require("express");
const app = express();

const router = require("./routes/mahasiswa");
const errorRouter = require("./routes/error");
const PORT = 5000;

// Body parser middleware
app.use(express.json());

// Middleware
app.use("/mahasiswa", router);

app.use("/", errorRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}, http://localhost:${PORT}`);
});
