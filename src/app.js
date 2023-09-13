import cookieParser from "cookie-parser";
import express from 'express';
import morgan from "morgan";

import AuthRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())

app.use("/api",AuthRoutes)
app.use("/task",taskRoutes)

export default app