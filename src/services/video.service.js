const { MOCK_VIDEO } = require("../models/video.model");

const getAllVideos = () => {
  return MOCK_VIDEO;
}

module.exports = {getAllVideos};