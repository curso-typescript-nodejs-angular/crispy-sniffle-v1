import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

jest.setTimeout(60000);
const mongoServer = new MongoMemoryServer();

export async function startDB() {
    const mongoUri = await mongoServer.getConnectionString();
    await mongoose.connect(mongoUri,{useNewUrlParser:true});
}

export async function stopDB() {
    await mongoose.disconnect();
    await mongoServer.stop();
}
