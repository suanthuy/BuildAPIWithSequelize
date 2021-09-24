const express = require("express");
const app = express();

function router(app) {
    app.use("/", (req, res, next) => {
        res.json("Hello World");
    });
}

module.exports = router;
