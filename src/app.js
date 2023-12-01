import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from 'express';
import morgan from "morgan";
import path from 'path';
import AuthRoutes from "./routes/auth.routes.js";
import MangasRoutes from "./routes/mangas.routes.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express()

app.use(
    cors({
      origin: 'http://localhost:5173', // Especifica el origen permitido
      methods: ['GET', 'POST'], // Especifica los métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization'], // Especifica los encabezados permitidos
      credentials: true, // Habilita el intercambio de credenciales
      preflightContinue: false, // Continúa con las solicitudes preflight
    })
  );
app.use(morgan("dev"))
// Parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '50mb' })); // Ajusta el límite al tamaño que necesites
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Ajusta el límite al tamaño que necesites

app.use(express.json())
app.use(cookieParser())
app.use("/public", express.static(path.join(__dirname, 'storage', 'imgs')));

app.use("/api",AuthRoutes)
app.use("/api",MangasRoutes)

app.use((req, res) => {
    res.status(404).json({status:false,errors:"Not Found"})
})

export default app