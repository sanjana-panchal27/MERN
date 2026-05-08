const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/RUPlacementCell';

async function listUsers() {
  await mongoose.connect(MONGO_URI);
  const db = mongoose.connection.db;
  const users = await db.collection('users').find({}, { projection: { email: 1, name: 1, role: 1, createdAt: 1 } }).toArray();
  
  console.log(`\n📋 Total users in DB: ${users.length}\n`);
  users.forEach((u, i) => {
    console.log(`${i + 1}. Name: ${u.name || 'N/A'} | Email: ${u.email} | Role: ${u.role}`);
  });

  await mongoose.disconnect();
}

listUsers().catch(console.error);
