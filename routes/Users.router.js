const usersRouter = require("express").Router();
const UserModel = require("../models/UserModel");

usersRouter
  .get("/", async (req, res) => {
    //const usersList = [
    //  { id: 1, name: "shehab" },
    //  { id: 2, name: "Yousif" },
    //  { id: 3, name: "Iman" },
    //];

    //res.render("users", { title: "Users", users: usersList });

    try {
      let users = await UserModel.find();

      res.status(200).send(users);
    } catch (e) {
      console.log(e);
      res.status(500).send({ error: "error while processing your request" });
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const userId = req.params.id;

      const user = await UserModel.findById(userId);

      res.status(200).send({ user: user });
    } catch (e) {
      console.log(e);
      res.status(500).send("error");
    }
    res.render("first-view");
  })
  .post("/", async (req, res) => {
    try {
      let user = new UserModel({
        email: req.body.email,
        name: req.body.name,
      });

      let resBody = await user.save();

      res.status(200).send(resBody);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  })
  .put("/:id", async (req, res) => {
    try {
      await UserModel.findOneAndReplace({ _id: req.params.id }, req.body);

      res.status(200).send({ _id: req.params.id, ...req.body });
    } catch (e) {
      console.log(e);
      res.status(500).send({ error: e.message });
    }
  });

module.exports = usersRouter;
