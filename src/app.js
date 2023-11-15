import cookieParser from "cookie-parser";
import express from 'express';
import morgan from "morgan";

import AuthRoutes from "./routes/auth.routes.js";
import MangasRoutes from "./routes/mangas.routes.js";

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))

app.use("/api",AuthRoutes)
app.use("/api",MangasRoutes)

app.use((req, res) => {
    res.status(404).json({status:false,errors:"Not Found"})
})

export default app