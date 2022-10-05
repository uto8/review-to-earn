const express = require("express");
const app = express();
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200)
  } else {
    next()
  }
}
app.use(allowCrossDomain)

// db接続
mongoose.connect(process.env.MONGOURL).then(()=>{
  console.log("DBと接続");
}).catch((err) => {
  console.log(err);
});

app.listen(port, () => console.log("サーバーがたちあがっった"));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res)=>{
  res.send("hello express");
});

