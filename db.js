
import mongoose from "mongoose";

const connect = async () => {
    try
    {
        await mongoose.connect(process.env.MONGO_URL, { useCreateIndex: true, autoIndex: true })
        console.log("connection success")
    } catch (error)
    {
        throw new Error("Error in connecting mongo db")
    }
};

export default connect;