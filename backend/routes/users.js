const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req, res)=>{
  res.send("user Router");
});
// ユーザー情報の更新
router.put("/:id", async(req, res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("ユーザー情報が更新されました");
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("あなたは自分のアカウントの時だけ情報を更新できます。");
  }
});
// ユーザーの削除
router.delete("/:id", async(req, res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("ユーザーが削除されました。");
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("あなたは自分のアカウントの時だけ情報を削除できます。");
  }
});
// ユーザーの取得
router.get("/:id", async(req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch(err) {
    return res.status(500).json(err);
  }
});

// ユーザーフォロー
router.put("/:id/follow", async (req, res) => {
  if(req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if(!user.followers.includes(req.body.userId)){
        await user.updateOne({
          $push: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $push: {
            followings: req.params.id,
          },
        });
        return res.status(200).json("フォローに成功しました");
      } else {
        return res.status(403).json("すでにフォローしています");
      }
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自分自身をフォローできません");
  }
});

// フォロー解除
router.put("/:id/unfollow", async (req, res) => {
  if(req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if(user.followers.includes(req.body.userId)){
        await user.updateOne({
          $pull: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $pull: {
            followings: req.params.id,
          },
        });
        return res.status(200).json("フォロー解除しました");
      } else {
        return res.status(403).json("すでにフォロー解除しています");
      }
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自分自身をフォロー解除できません");
  }
});

module.exports = router;
