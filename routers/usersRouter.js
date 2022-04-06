// Express importation:
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// Routes:
router.get("/register", (_req, res) => {
    res.render("register");
});

router.post("/register", (req, res) => {

})

router.get("/login", (_req, res) => {
    res.render("login");
});

router.get("/logout", (_req, res) => {
    res.render("logout");
});


// Modules exportation:
module.exports = router;