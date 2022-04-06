const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const usersRouter = require("./routers/usersRouter");
const productsRouter = require("./routers/productsRouter");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// Handlebars configuration:
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// Middlewares:
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));


// Routes:
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.get("/", (_req, res) => {
    res.render("homepage");
});

app.get("/lyon", (_req, res) => {
    res.render("lyon");
});
app.get("/marseille", (_req, res) => {
    res.render("marseille");
});
app.get("/paris", (_req, res) => {
    res.render("paris");
});

// Server Start:
app.listen(8000, () => {
    console.log("Listening on port 8000...");
});