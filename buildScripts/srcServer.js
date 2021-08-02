import express from "express";
import { join } from "path";
import open from "open";
import { webpack } from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", function (req, res) {
  res.sendFile(join(__dirname, "../src/index.html"));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@smith.com" },
    { id: 2, firstName: "Tammy", lastName: "Smith", email: "tammy@smith.com" },
    { id: 3, firstName: "Tina", lastName: "Smith", email: "tina@smith.com" },
    { id: 4, firstName: "Danijel", lastName: "Smith", email: "dan@smith.com" },
  ]);
});
