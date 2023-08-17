const express = require("express");
const cors = require("cors");

require("./database");
const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.static(__dirname + "/public"));
//app.set("view engine", "ejs");
//app.set("views", "./views");

//const middleWare = (req, res, next) => {
//  const today = new Date();

//  const startHour = 9;
//  const endHour = 17;
//  const weekDay = today.getDay();

//  if (
//    today.getHours() >= startHour &&
//    today.getHours() <= endHour &&
//    weekDay != 1 &&
//    weekDay != 6
//  ) {
//    next();
//  } else {
//    res.status(500).send({ message: "we're outside our working hours" });
//  }
//};

//app.use(middleWare);

//Routers
const usersRouter = require("./routes/Users.router");
const jobsRouter = require("./routes/Jobjs.router");

app.use("/users", usersRouter);
app.use("/jobs", jobsRouter);

app.listen(8080, () => console.log("server is running on port 8080 ...."));
