const Info = require('../models/info.js');

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getInfos = (req, res) => {
  Info.find()
    .then((infos) => {
      res.status(200).json(infos);
    })
    .catch((err) => handleError(res, err));
};

const getInfo = (req, res) => {
  Info.findById(req.params.id)
    .then((info) => {
      res.status(200).json(info);
    })
    .catch((err) => handleError(res, err));
};

const deleteInfos = (req, res) => {
  Info.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

const addInfos = (req, res) => {
  const info = new Info(req.body);
  info.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => handleError(res, err));
};

const updateInfos = (req, res) => {
  Info.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

const addComment = (req, res) => {
  const { author, content } = req.body;

  Info.findById(req.params.id)
    .then((info) => {
      if (!info) {
        return res.status(404).json({ error: 'Новина не знайдена' });
      }
      info.comments.push({ author, content });
      return info.save();
    })
    .then((updatedInfo) => {
      res.status(201).json(updatedInfo);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  getInfos,
  getInfo,
  deleteInfos,
  addInfos,
  updateInfos,
  addComment,
};
