const express = require("express");
const TodoRouter = express.Router();
const {getAll, addItem} = require("./controllers");

TodoRouter.route("/").get(getAll).post(addItem)

module.exports = TodoRouter;
