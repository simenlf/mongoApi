module.exports = (app) => {
    var router = require("express").Router();
    const controller = require("../controllers/controller.js");

    router.get("/getData", controller.getData);

    app.use("/api", router);
}