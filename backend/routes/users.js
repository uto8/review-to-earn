const router = require("express").Router();

router.get("/", (req, res)=>{
  res.send("user Router");
});

module.exports = router;
