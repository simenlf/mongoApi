module.exports = (app) => {
    var router = require("express").Router();
    const controller = require("../controllers/controller.js");

    router.get("/getData", controller.getData);
    router.get("/getConfig", controller.getConfig);

    app.use("/api", router);
}