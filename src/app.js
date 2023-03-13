const express = require("express");
const expressServerInstance = express();
const TodoRoutes = require("./todo/routes");

expressServerInstance.use(express.json());
expressServerInstance.use(express.urlencoded({extended:true}));

// todos/
expressServerInstance.use("/todos/", TodoRoutes);

// home request
expressServerInstance.get("/", function (req, res) {
  const { host } = req.headers;
  const response = {
    message:
      "You have successfully access an api that creates a todo into a txt file on the server",
    routes: {
      thisRoute: "http://" + host + "/",
      viewAllTodo: "http://" + host + "/all/",
    },
  };
  return res.status(200).json(response);
});

expressServerInstance.get("*", function (req, res) {
  return res.status(404).json({ message: "Invalid url!" });
});

expressServerInstance.listen(8000, () =>
  console.log("Application is listening on port 8000")
);
