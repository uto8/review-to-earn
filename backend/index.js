const express = require("express");
const app = express();
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const PORT = 3000;

app.use("/api/users", userRoute);
app.use("/api/auth", userRoute);

app.get("/", (req, res)=>{
  res.send("hello express");
});

app.listen(PORT, () => console.log("サーバーがたちあがっった"));
