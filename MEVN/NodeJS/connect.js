const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017/collage';

async function findAll() {
  const client = await MongoClient.connect(url, { useNewUrlParser: true }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db('socialApp');
    let collection = db.collection('user');

    // Find all documents in the collection
    let cursor = collection.find({});

    // Iterate over the cursor to retrieve all documents
    await cursor.forEach((doc) => {
      console.log(doc);
    });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

findAll()