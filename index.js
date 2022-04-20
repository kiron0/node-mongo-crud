const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// use middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://kiron0:Vks4Cj18OGXUI6SZ@kiron.ripcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("foodMaster").collection("users");
  console.log('db connected');

  client.close();
});


app.get("/", (req, res) => {
  res.send("Running my node CRUD Server");
});

app.listen(port, () => {
  console.log("CRUD Server is running");
});
