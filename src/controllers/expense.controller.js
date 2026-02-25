const Expense = require("../models/expense.model");

// Create expense
const createExpense = async (req, res) => {

  try {

    const { title, amount, category } = req.body;

    const expense = await Expense.create({

      title,
      amount,
      category,
      user: req.userId,

    });

    res.status(201).json(expense);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Get all expenses of user
const getExpenses = async (req, res) => {

  try {

    const expenses = await Expense.find({
      user: req.userId
    });

    res.json(expenses);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// Update expense
const updateExpense = async (req, res) => {

  try {

    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json(expense);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};
// Delete expense
const deleteExpense = async (req, res) => {

  try {

    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json({ message: "Expense deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

module.exports = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense
};
