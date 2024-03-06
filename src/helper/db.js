import mongoose from "mongoose";
import {User} from "../models/user";

export const  connectDb = async () => {
    try {
      const {connection} = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName : "work_manager",
        });
        console.log("db Connected...")

        const uuser = new User({
            name: "test name",
            email:"test@gmail.com",
            password:"testpassword",
            about:"this is testing"
        })
        await uuser.save();
        console.log("user is created");

        console.log(connection)
    } catch (error) {
        console.log("failed too connect with database")
        console.log(error);
    }
};