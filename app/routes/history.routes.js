const controller = require("../controllers/history.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/api/history", controller.getHistory);

    app.post("/api/history",controller.addHistory);
}