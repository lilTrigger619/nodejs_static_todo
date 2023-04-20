const TodoRoutes = require("./todo/routes");
const {InvalidRequest} = require("./todo/controllers");
const express = require("express");
const ServerInstance = express();

//todo routes
ServerInstance.use([
  express.json(),
  express.urlencoded({ extended: true }),
]);

ServerInstance.use("/todos",TodoRoutes)

ServerInstance.get("/", function (req, res) {
  const { host } = req.headers;
  const Body = {
    message: "You have successfully reached the static todo api",
    urls: {
      this_route: "http://" + host + "/",
      all_todos: "http://" + host + "/todos",
    },
  };
  return res.status(200).json(Body);
});

ServerInstance.get("*", InvalidRequest);
ServerInstance.post("*", InvalidRequest);
ServerInstance.delete("*", InvalidRequest);

ServerInstance.listen(9000, function () {
  console.log("Server Listening on port 9000");
});

