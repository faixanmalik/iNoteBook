import mongoose from "mongoose";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const connectDb = handler => async (req,res)=>{
    if (mongoose.connections[0].readyState){
        return handler(req,res)
    }
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, options)
    return handler(req,res);
}

export default connectDb;