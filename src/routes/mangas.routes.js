import { Router } from "express";
import { createManhua, deleteManhua, getManhua, getManhuas, updateManhua } from "../controllers/task.controller.js";
import { upload } from "../libs/storage.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()



router.get("/manhuas", authRequired, getManhuas)

router.get("/manhuas/:id", authRequired, getManhua)

router.post("/manhuas", upload ,createManhua)

router.delete("/manhuas/:id", authRequired, deleteManhua)

router.put("/manhuas/:id", authRequired, updateManhua)


export default router