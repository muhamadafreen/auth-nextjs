import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("Connected", () => {
      console.log("MongoDB Connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB Connection  error plsease make sure Mongodb is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("SomeThing Goes Wrong!");
    console.log(error);
  }
}
