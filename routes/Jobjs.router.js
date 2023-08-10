const jobsRouter = require("express").Router();

jobsRouter
  .get("/", (req, res) => {
    res.status(200).send([
      { id: 1, name: "Engineer" },
      { id: 2, name: "Dentist" },
      { id: 3, name: "programmer" },
    ]);
  })
  .get("/:id", (req, res) => {
    console.log(req.params.id)
    res.status(200).send({ id: 2, name: "Dentist" });
  })
  .post("/", (req, res) => {
    console.log(req.body);
    res.status(200).send("success");
  })

module.exports = jobsRouter;
