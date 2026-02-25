const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const expenseRoutes = require("./routes/expense.routes");

const app = express();

app.use(cors({
  origin: "https://fastidious-kelpie-5558bb.netlify.app"
}));app.use(express.json());

app.use("/api/expenses", expenseRoutes);
app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
  res.send("Expense Tracker API running");
});

module.exports = app;
