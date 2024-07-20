const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users");
const gridRoutes = require("./routes/grids");
const messageRoutes = require("./routes/messages");

const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/cipherdb', { useNewUrlParser: true, useUnifiedTopology: true });

//connecting to mongoDB using mongoose
const dbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/cipherdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to Database`);
    })
    .catch((error) => {
      console.log(`Error while connecting to database: ${error}`);
    });
};

dbConnection();
app.listen(5000, () => console.log("Server running on port 5000"));

app.use("/api/users", userRoutes);
app.use("/api/grids", gridRoutes);
app.use("/api/messages", messageRoutes);
