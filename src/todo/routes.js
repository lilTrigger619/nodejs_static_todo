const express = require("express");
const TodoRouter = express.Router();
const {getAll, addItem, getItem, updateItem} = require("./controllers");

TodoRouter.route("/").get(getAll).post(addItem);
TodoRouter.route("/:itemId").get(getItem).put(updateItem);

module.exports = TodoRouter;
