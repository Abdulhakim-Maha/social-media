const express = require("express");
const app = express();
const path = require('path')

//thirt party
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const multer = require("multer");

//include
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post');

dotenv.config();



//middleware
// app.use(bodyParser.json())
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('combined'))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

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