const express = require("express");
const router = express.Router();
const fs = require("fs");


const PATH_ROUTER = __dirname;

const cleanFileName = (fileName) => {
  const clean = fileName.split('.').shift(); // video
  return clean;
};

// TODO [index.route.js, video.route.js]
fs.readdirSync(PATH_ROUTER).filter((fileName) => {
  const prefixRoute = cleanFileName(fileName);

  if(prefixRoute !== 'index') {
    console.log('Cargando la ruta...', prefixRoute);
    router.use(`/${prefixRoute}`, require(`./${prefixRoute}.route.js`));
  }
})

module.exports = { router };