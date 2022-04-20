const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

// use middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://kiron0:Vks4Cj18OGXUI6SZ@kiron.ripcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const usersCollection = client.db("foodMaster").collection("users");
    app.post("/user", (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      res.send("user data receive");
    });
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running my node CRUD Server");
});

app.listen(port, () => {
  console.log("CRUD Server is running");
});
