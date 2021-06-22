// const http = require("http");
// const routes = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

//const pug = require("pug");

const app = express();
// app.engine(
//   "handlebars",
//   expressHbs({
//     layoutsDir: "Views/layout/",
//     defaultLayout: "main-layout",
//     extname: "handlebars",
//   })
// );
app.set("view engine", "ejs");
app.set("Views", "views");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "Views", "404.html"));
  res.status(404).render("404", { pageTitle: "Not Found" });
});

app.listen(3000);

// const server = http.createServer(app);

// server.listen(3000);
