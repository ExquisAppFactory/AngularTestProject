import { AppDataSource } from "./data-source";
import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as cookieParser from "cookie-parser"
import { Response, Request } from "express";
import invoiceRoute from "./invoice/invoice.route"
import authRoute from "./auth/auth.route";

dotenv.config();
AppDataSource.initialize().then(async () => {

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/invoice", invoiceRoute)

app.get("/", (req: Request, res: Response) => res.send("server is up and running"));


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
})
}) .catch((error) => console.log(error));
