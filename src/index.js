const express = require("express");
const app = express();

const router = require("./routers");
const db = require("./models/index");
const port = 3000;

router(app);

db.sequelize.sync().then((res) => {
    app.listen(port, () => {
        console.log("Server is listening at port 3000");
    });
});
