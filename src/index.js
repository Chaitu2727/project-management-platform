import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/index.js";

const PORT = process.env.PORT ?? 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`The server is listening to port ${PORT}`),
    );
  })
  .catch((err) => {
    console.log("Error", err);
    process.exit(1);
  });
