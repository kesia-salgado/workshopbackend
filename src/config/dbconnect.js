import mongoose from "mongoose";

mongoose.connect(
"mongodb+srv://admin:kesia123@cluster0.bmvcter.mongodb.net/workshopbackend"
);

let db = mongoose.connection;

export default db;