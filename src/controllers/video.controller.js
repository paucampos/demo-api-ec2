const { getAllVideos } = require("../services/video.service");

const getList = (req, res) => {
  res.status(201);
  res.send({ data: getAllVideos() });
};
const getDetail = (req, res) => {
  res.send({ data: "Detalle" });
};
const updateItem = (req, res) => {
  res.send({ data: "Actualiza" });
};
const createItem = (req, res) => {
  res.send({ data: "Creando" });
};
const deleteItem = (req, res) => {
  res.send({ data: "Elimnar" });
};

module.exports = { getList, getDetail, updateItem, createItem, deleteItem };
