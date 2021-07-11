const express = require("express");
const app = express();

//thirt party
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//include
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

dotenv.config();


//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('combined'))

//routers
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


mongoose
  .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log("MongoDB connected!");
    app.listen(8000, () => {
      console.log("Server running on port 8000");
    });
  })
  .catch((err) => console.log(err));
