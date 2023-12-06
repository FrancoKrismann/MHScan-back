import { Router } from "express";
import { createManhua, deleteManhua, getManhua, getManhuas, updateManhua } from "../controllers/task.controller.js";
import { authRequired, } from "../middlewares/validateToken.js";


const router = Router()


// const upload = multer({dest:"uploads/"})

router.get("/manhuas", authRequired, getManhuas)

router.get("/manhuas/:id", authRequired, getManhua)

router.post("/manhuas"
   ,createManhua)
// router.post("/manhuas", uploadSingle, (req, res, next) => {
//   if (req.file) {
//     console.log("Imagen individual subida:", req.file);
//   } else {
//     return res.status(400).send("Error al cargar la imagen individual");
//   }
//   next();
// }, (req, res, next) => {
//   if (!req.body.chapters) {
//     return res.status(400).send("Chapters está vacío");
//   }

//   uploadMultiple(req, res, err => {
// console.log("Pasa por Multipler",req.body);   
//  if (err instanceof multer.MulterError) {
//       // Si hay un error de Multer, manejarlo aquí
//       return res.status(500).json({ message: 'Error al subir archivos.' });
//     } else if (err) {
//       // Si hay otro tipo de error, manejarlo aquí
//       return res.status(500).json({ message: 'Otro tipo de error.' });
//     }
//     console.log("Archivos subidos correctamente:", req.files);
//     return res.status(200).json({ message: 'Archivos subidos correctamente.' });
//   });
// }, createManhua);
  

router.delete("/manhuas/:id", authRequired, deleteManhua)

router.put("/manhuas/:id", authRequired, updateManhua)


export default router