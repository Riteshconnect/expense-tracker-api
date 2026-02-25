const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense
} = require("../controllers/expense.controller");

router.post("/", authMiddleware, createExpense);

router.get("/", authMiddleware, getExpenses);

router.put("/:id", authMiddleware, updateExpense);
router.delete("/:id", authMiddleware, deleteExpense);

module.exports = router;
