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
const postRoutes = require('./routes/post')

dotenv.config();


//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('combined'))

//routers
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);


//connect to database and run server
mongoose
  .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log("MongoDB connected!");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT ? process.env.PORT: 8000}`);
    });
  })
  .catch((err) => console.log(err));