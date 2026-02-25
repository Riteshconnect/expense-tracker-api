require("dotenv").config();
const cors = require("cors");

const app = require("./src/app");
const mongoose = require("mongoose");

app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

  const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

  })
  .catch((err) => {
    console.log(err);
  });
