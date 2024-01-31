import "dotenv/config";
import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
const PORT = 3000

app.use(
    cors({
        origin: true,
        credentials: true
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});