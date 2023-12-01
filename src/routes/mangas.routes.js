import { Router } from "express";
import { createManhua, deleteManhua, getManhua, getManhuas, updateManhua } from "../controllers/task.controller.js";
import { uploadMultiple, uploadSingle } from "../libs/storage.js";
import { authRequired, } from "../middlewares/validateToken.js";

const router = Router()


// const upload = multer({dest:"uploads/"})

router.get("/manhuas", authRequired, getManhuas)

router.get("/manhuas/:id", authRequired, getManhua)

// router.post("/manhuas", uploadSingle.single("image"), uploadMultiple.array("data"),createManhua)
router.post("/manhuas", (req, res, next) => {
    // Manejo de la imagen individual (uploadSingle.single)
    uploadSingle.single("image")(req, res, err => {
      if (err) {
        return res.status(400).send("Error al cargar la imagen individual");
      }
      
      // Si no hay errores con la imagen individual, guardarla en req.singleImage y proceder al siguiente middleware
      
      next();
    });
  }, (req, res, next) => {
    console.log(req.body);
    // Manejo del array de imágenes (uploadMultiple.array)
    if (!req.body.chapters || !req.body.chapters[0].data) {
        return res.status(400).send("Falta la propiedad 'chapters' o 'data'");
      }
    uploadMultiple.array("data")(req, res, err => {
        console.log(req.files);
        

      if (err) {
        return res.status(400).send("Error al cargar el array de imágenes");
      }
  
      // Si no hay errores con el array de imágenes, guardarlas en req.multipleImages y proceder al siguiente middleware
      next();
    });
  }, createManhua);
  

router.delete("/manhuas/:id", authRequired, deleteManhua)

router.put("/manhuas/:id", authRequired, updateManhua)


export default router