// Express importation:
const express = require("express");
const router = express.Router();

// Routes:
router.get("/", (_req, res) => {
    res.render("products");
});

// Modules exportation:
module.exports = router;