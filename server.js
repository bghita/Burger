const PORT = process.env.PORT || 7777;
const controllers = require("./controllers/controllers.js");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes/routes.js");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);
app.listen(PORT, () => {console.log("Server listening on http://localhost:" + PORT)});

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client-build"));
// }
