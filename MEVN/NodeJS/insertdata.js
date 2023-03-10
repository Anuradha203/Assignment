const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'socialApp';

// Use async/await to connect to the server
async function connectToServer() {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  const db = client.db(dbName);
  console.log("Connected successfully to server");
  // Do something with the database here...

  // Get the collection
  const collection = db.collection('user');

  // Insert a document
  const result = await collection.insertOne({ F_nm: 'Anuradha', L_nm: 'Patil', DOB: '20/03/2000',Phone_no: '7030478730' });

  console.log(`Inserted ${result.insertedCount} document into the collection`);

  client.close();
}

connectToServer();