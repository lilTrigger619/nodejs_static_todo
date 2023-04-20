const express = require("express");
const TodoRouter = express.Router();
const {
  getAll,
  addItem,
  getItem,
  updateItem,
  InvalidRequest,
} = require("./controllers");

TodoRouter.route("/").get(getAll).post(addItem);
TodoRouter.route("/:itemId").get(getItem).put(updateItem);
TodoRouter.route("*")
  .get(InvalidRequest)
  .post(InvalidRequest)
  .put(InvalidRequest)
  .delete(InvalidRequest);

module.exports = TodoRouter;
