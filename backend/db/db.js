import mongoose from "mongoose";

function connect() {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Database connected to ${process.env.MONGO_DBNAME}`);
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
}

export default connect;
