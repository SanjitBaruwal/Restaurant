import mongoose from "mongoose";
const dbConnection = () => {
  mongoose
    .connect(process.env.MONGOURI, {
      dbName: "TEST",
    })
    .then(() => {
      console.log("database is connected successfully.");
    })
    .catch((err) => {
      console.error("some error occured while connected to databse: ", err);
    });
};
export default dbConnection;
