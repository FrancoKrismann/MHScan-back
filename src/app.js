import cookieParser from "cookie-parser";
import express from 'express';
import morgan from "morgan";
import path from 'path';

import AuthRoutes from "./routes/auth.routes.js";
import MangasRoutes from "./routes/mangas.routes.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express()

app.use(morgan("dev"))
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use("/public", express.static(path.join(__dirname, 'storage', 'imgs')));

app.use("/api",AuthRoutes)
app.use("/api",MangasRoutes)

app.use((req, res) => {
    res.status(404).json({status:false,errors:"Not Found"})
})

export default app