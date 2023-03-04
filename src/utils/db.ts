import mongoose from "mongoose";

type TConnection = {
    isConnected?: Number
}

const connection: TConnection = {};

const { MONGO_URL } = process.env;

if (!MONGO_URL) throw new Error('MONGO_URL is not defined')

async function connectDb() {
    if (connection.isConnected) {
        console.log("Already connected to the database.");
        return;
    }

    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log("Use previous connection to the database.");
            return;
        }

        await mongoose.disconnect();
    }

    const db = await mongoose.connect(MONGO_URL as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
     
    if (db) {
        console.log('New connection to the database.');
        connection.isConnected = db.connections[0].readyState;
    }
}

async function disconnectedDb() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = 0;
        } else {
            console.log("not disconnecting from the database")
        }
    }
}

const db = { connectDb, disconnectedDb };
export default db;