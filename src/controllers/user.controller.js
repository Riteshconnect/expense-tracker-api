const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


// Register
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

const user = await User.create({
  email,
  password: hashedPassword
});

    res.json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

const user = await User.findOne({ email });

if (!user) {
  return res.status(400).json({ message: "Invalid credentials" });
}

const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
  return res.status(400).json({ message: "Invalid credentials" });
}
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET
    );

    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
