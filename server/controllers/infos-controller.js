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

const addComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!req.session?.user) {
      return res.status(401).json({ message: 'Користувач не авторизований' });
  }
  
  const author = req.session.user.surname + ' ' + req.session.user.name;

  try {
      const info = await Info.findById(id);
      if (!info) {
          return res.status(404).json({ message: 'Новина не знайдена' });
      }

      info.comments.push({ author, content });
      await info.save();

      res.json({ author, content });
  } catch (error) {
      console.error('Помилка при додаванні коментаря:', error);
      res.status(500).json({ message: 'Помилка сервера' });
  }
};

module.exports = {
  getInfos,
  getInfo,
  deleteInfos,
  addInfos,
  updateInfos,
  addComment,
};
