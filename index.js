const express = require("express");
const handlebars = require("handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

// Handlebars configuration:
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// Middlewares:
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

// Server Start:
app.listen(8000, () => {
    console.log("Listening on port 8000...");
});