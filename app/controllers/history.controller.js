const { history } = require("../models");
const historyModel = require("../models/history.model");
const db = require("../models");
const History = db.history;

exports.getHistory = async (req, res, next) => {
  const Histories = await History.findAll({});
  res.status(200).json({
   data: Histories
  });
 }
 
 exports.addHistory = (req, res) => {
  console.log(req.body);
  if (!req.body.videoUrl) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const history = {
    videoUrl: req.body.videoUrl,
  };

  History.create(history)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred ."
      });
    });
};

