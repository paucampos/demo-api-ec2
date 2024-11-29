const express = require("express");
const router = express.Router();
const {
  getList,
  getDetail,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/video.controller");
const { checkSession } = require("../middlewares/origin");

// TODO: [GET] http://localhost:3001/v1/video/list
router.get("", getList);
router.get("/:id", getDetail);
router.put("/:id", updateItem);
router.post("", createItem);
router.delete("/:id", checkSession, deleteItem);

module.exports = router;
