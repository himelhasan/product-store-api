const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

const productCollection = require("./data/product.json");

app.get("/", (req, res) => {
  res.send("now serving is running");
});

app.get("/allProducts", (req, res) => {
  res.send(productCollection);
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const getSingleItem = productCollection?.find((p) => p.id == id);
  if (!getSingleItem) {
    res.send("pailam nah re bhai");
  }
  res.send(getSingleItem);
});

app.get("/category/:name", (req, res) => {
  const name = req.params.name;
  const getCategory = productCollection.filter((p) => p.category == name);
  res.send(getCategory);
});

app.listen(port, () => {
  console.log("the server listening on port", port);
});
