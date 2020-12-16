import dotenv from "dotenv";
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

import config from "./config/key";
import composeHotel from "./routes/hotelRoute";
import userRoutes from './routes/userRoute';

const mongodbURL = config.MONGODB_URL;
const port = config.PORT

mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`Database is connected successfully on port 27017!!! ${mongodbURL}`);
});
const app = express();

app.use(bodyParser.json());
app.use("/api/hotels", composeHotel);
app.use('/api/users', userRoutes);
app.use('/uploads', express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.listen(port, () => { console.log(`Server hosted at http://localhost:/${port}`) });