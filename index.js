const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());



/* user: habiburnobel
pass: 4wM803iMMCodrNr8
 */
const uri = "mongodb+srv://habiburnobel:4wM803iMMCodrNr8@cluster0.grizk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();

        const userCollection = client.db('foodExpress').collection('users');
        const user = { name: "rokaiah fardous", email: "rokaiahfardous@gmail.com" };

        const result = await userCollection.insertOne(user);

        console.log(`user added with id: ${result.insertedId}`)
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
