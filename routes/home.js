const express = require("express");

const homeRouter = express.Router();

// -------- sending regular files ------------------
// homeRouter.get("/about", (req, res) => {
//     res.send("about page!");
// });


// -------- using ENGINE TEMPLATES ------------------
homeRouter.get("/", (req, res) => {
    const titleForEjs = "this is a dynamic title I passed to be displayed in EJS engine template!";

    res.render("index.ejs", {titleForEjs});
})


// homeRouter.get("/dashboard", (req, res) => {
//     res.send("dashboard page!");
// });


homeRouter.get("/dashboard", (req, res) => {
    const username = "SebasPresagio070599";
    res.render("dashboard.ejs", { username });
})


module.exports = homeRouter;