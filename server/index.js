require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w7fyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        const coffeeCollection = client.db("Espresso_Emporium").collection("Coffees");
        const userCollection = client.db("Espresso_Emporium").collection("Users");
        // await client.connect();
        app.get('/coffees',async(req,res)=>{
            const cursor = coffeeCollection.find({});
            const allValues = await cursor.toArray();
            res.send(allValues);
        })
        app.get('/coffees/:id',async(req,res)=>{
            const id = req.params.id;
            const result = await coffeeCollection.findOne({_id: new ObjectId(id)});
            res.send(result);
        })
        app.get("/users",async(req,res)=>{
            const cursor = userCollection.find({});
            const allValues = await cursor.toArray();
            res.send(allValues);
        })
        app.post("/users",async(req,res)=>{
            const newUser = req.body;
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })
        app.post("/coffees",async(req,res)=>{
            const newCoffee = req.body;
            const result = await coffeeCollection.insertOne(newCoffee);
            res.send(result);
        })
        
        app.put("/coffees/:id",async(req,res)=>{
            const id = req.params.id;
            const filter = {_id:new ObjectId(id)};
            const updatedCoffee = req.body;
            const options = { upsert: true };
            const modifiedCoffee = {
                $set: {
                    name:updatedCoffee.name,
                    chef: updatedCoffee.chef,
                    supplier: updatedCoffee.supplier,                     
                    taste: updatedCoffee.taste,
                    category: updatedCoffee.category,
                    details: updatedCoffee.details,
                    photo: updatedCoffee.photo
                }
            };
            const result = await coffeeCollection.updateOne(filter, modifiedCoffee, options);
            res.send(result);
        })
        app.delete('/coffees/:id',async(req,res)=>{
            const id = req.params.id;
            const query = {_id:new ObjectId(id)};
            const deleteResult = await coffeeCollection.deleteOne(query);
            res.send(deleteResult);
        })
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }catch(e) {
        console.log(e);
    }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('Hello, World!');
})
app.listen(port,()=>{
    console.log('listening on port: ',port);
})