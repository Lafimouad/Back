const db = require("../models");
const Bookmarks = db.bookmarks;

exports.getBookmarks = async (req, res, next) => {
  const Bookmarkss = await Bookmarks.findAll({});
  res.status(200).json({
   data: Bookmarkss
  });
 }
 
 exports.addBookmarks = (req, res) => {
  console.log(req.body);
  if (!req.body.videoUrl) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const bookmarks = {
    videoUrl: req.body.videoUrl,
  };

  Bookmarks.create(bookmarks)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred."
      });
    });
};

