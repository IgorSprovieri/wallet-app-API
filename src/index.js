require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const routesCategories = require("./routes/categories");
const routesUsers = require("./routes/users");
const routesFinances = require("./routes/finances");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const port = process.env.PORT;

app.use("/categories", routesCategories);
app.use("/users", routesUsers);
app.use("/finances", routesFinances);

app.get("/", (req, res) => {
  res.send("It is a wallet app API");
});

app.listen(port, () => {
  db.connect()
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      throw new Error(error);
    });

  console.log(`Example app listening on port ${port}`);
});
