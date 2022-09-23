const express = require("express");
const app = express();
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

// db接続
mongoose.connect(process.env.MONGOURL).then(()=>{
  console.log("DBと接続");
}).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res)=>{
  res.send("hello express");
});

app.listen(PORT, () => console.log("サーバーがたちあがっった"));
