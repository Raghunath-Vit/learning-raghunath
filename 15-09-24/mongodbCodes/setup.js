
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mydatabase';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  
  const users = db.collection('users');
  await users.insertOne({
    first_name: 'Paul',
    surname: 'Miller',
    cell: '447557505611',
    city: 'London',
    location: [45.123, 47.232],
    profession: ['banking', 'finance', 'trader'],
    cars: [
      { model: 'Bentley', year: 1973 },
      { model: 'Rolls Royce', year: 1965 }
    ]
  });

  console.log('Document inserted');

  await client.close();
}

main().catch(console.error);