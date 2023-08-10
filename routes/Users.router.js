const usersRouter = require("express").Router();

usersRouter
  .get("/", (req, res) => {
    res.status(200).send([
      { id: 1, name: "shehab" },
      { id: 2, name: "Yousif" },
      { id: 3, name: "Iman" },
    ]);
  })
  .post("/", (req, res) => {
    console.log(req.body);
    res.status(200).send("success");
  })
  .put("/:id", (req, res) => {
    console.log(req.body)
    res.status(200).send("success");
  });

  module.exports = usersRouter