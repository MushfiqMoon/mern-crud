const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// user: user101
// pass : 8VYEibDm3zn2doip




const uri = "mongodb+srv://user101:8VYEibDm3zn2doip@cluster101.ai4fuw4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    const userCollection = client.db("simple-db").collection("user");
    // const user = { name: "Moon", email: 'moon@gmai.com' }

    app.post('/users', async (req, res) => {
      const user = req.body
      const result = await userCollection.insertOne(user)
      user.id = result.insertedId

      res.send(user);
    })
  } finally {
  }
}
run().catch(console.dir);




client.connect(err => {

  // perform actions on the collection object
  // client.close();
});




app.get('/users', (req, res) => {
  res.send(users)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})