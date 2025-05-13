require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3yfc6.mongodb.net/?retryWrites=true&w=majority`;

// Create MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const campaignCollection = client.db("campaignDB").collection("campaigns");
    const userCollection = client.db("campaignDB").collection("users");
    const donationsCollection = client.db("campaignDB").collection("donations");

    /**
     * Campaigns APIs
     */

    // Get all campaigns
    app.get("/campaigns", async (req, res) => {
      const cursor = campaignCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get a single campaign by ID
    app.get("/campaigns/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await campaignCollection.findOne(query);
      res.send(result);
    });

    // Create a new campaign
    app.post("/campaigns", async (req, res) => {
      const newCampaign = req.body;
      console.log("Adding new campaign:", newCampaign);
      const result = await campaignCollection.insertOne(newCampaign);
      res.send(result);
    });

    // Update a campaign
    app.put("/campaign/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: req.body,
      };
      const result = await campaignCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

    // Get running campaigns (deadline not passed)
    app.get("/runningCampaigns", async (req, res) => {
      const currentDate = new Date();
      try {
        const result = await campaignCollection
          .find({ deadline: { $gt: currentDate } })
          .limit(6)
          .toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching running campaigns:", error);
        res.status(500).send({ error: "Failed to fetch running campaigns" });
      }
    });

    /**
     * Users APIs
     */

    // Get all users
    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get campaigns for a specific user
    app.get("/user-campaigns/:email", async (req, res) => {
      const { email } = req.params;
      const query = { userEmail: email };
      const result = await campaignCollection.find(query).toArray();
      res.send(result);
    });

    // Delete a campaign by user
    app.delete("/user-campaigns/:id", async (req, res) => {
      console.log("going to delete", req.params.id);
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await campaignCollection.deleteOne(query);
      res.send(result);
    });

    // Create a new user
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("Creating new user:", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // Update user info
    app.patch("/users", async (req, res) => {
      const email = req.body.email;
      const filter = { email };
      const updatedDoc = {
        $set: {
          lastSignInTime: req.body?.lastSignInTime,
        },
      };
      const result = await userCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    /**
     * Donations APIs
     */

    // Get all donations by user email
    app.get("/donations", async (req, res) => {
      const email = req.query.email;
      const result = await donationsCollection.find({ userEmail: email }).toArray();
      res.send(result);
    });

    // Post a new donation
    app.post("/donations", async (req, res) => {
      const donation = req.body;
      console.log("New donation:", donation);
      const result = await donationsCollection.insertOne(donation);
      res.send(result);
    });

    console.log("Connected to MongoDB and APIs are ready.");
  } catch (error) {
    console.error("Error running the server:", error);
  }
}

run().catch(console.dir);

// Base route
app.get("/", (req, res) => {
  res.send("Crowd Funding server is running");
});

// Start the server
app.listen(port, () => {
  console.log(`Crowd Funding server is running on port: ${port}`);
});
