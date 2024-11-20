const express = require('express');
const { getInfos, getInfo, deleteInfos, addInfos, updateInfos, addComment } = require("../controllers/infos-controller");

const router = express.Router();

router.get('/infos', getInfos);
router.get('/infos/:id', getInfo);
router.delete('/infos/:id', deleteInfos);
router.post('/infos', addInfos);
router.patch('/infos/:id', updateInfos);
router.post('/infos/:id/comments', addComment);

module.exports = router;
