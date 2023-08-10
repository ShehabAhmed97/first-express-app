const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/ab*cd", (req, res) => {
  console.log("ab*cd")
  res.send("success")
})

//Routers
const usersRouter = require("./routes/Users.router")
const jobsRouter = require("./routes/Jobjs.router")

app.use("/users", usersRouter)
app.use("/jobs", jobsRouter)


app.listen(8080, () => console.log("server is running on port 8080 ...."));
