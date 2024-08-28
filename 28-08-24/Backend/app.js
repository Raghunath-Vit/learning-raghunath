const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/product");
const authorRouter = require("./routes/authors");
const todosapiRouter = require("./routes/todosapi");
const carrentalsuserRouter = require("./routes/userrentaluser");
const categoryRouter = require("./routes/category");
const booksRouter = require("./routes/books");
const filesRouter=require("./routes/fileUpload");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/authors", authorRouter);
app.use("/todos", todosapiRouter);
app.use("/carsUser", carrentalsuserRouter);
app.use("/category", categoryRouter);
app.use("/books", booksRouter);
app.use("/file",filesRouter);

const mongoConsUrl = "mongodb://localhost/ascendion";
mongoose.connect(mongoConsUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => console.log("Error connecting to MongoDB"));
db.once("open", () => console.log("Connected to MongoDB"));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.use((req, res, next) => {
  console.log("Request Headers:", req.headers);
  next();
});

module.exports = app;
