import { Router } from "express";
import { createManhua, deleteManhua, getManhua, getManhuas, updateManhua } from "../controllers/task.controller.js";
// import { upload } from "../libs/storage.js";
import { authRequired } from "../middlewares/validateToken.js";
 
const router = Router()



router.get("/manhuas", authRequired, getManhuas)

router.get("/manhuas/:id", authRequired, getManhua)

router.post("/manhuas" ,createManhua)
// router.post('/manhuas', (req, res) => {
//     upload(req, res, function (err) {
//       if (err) {
//         // Manejar errores de Multer aquí
//         console.log("Error: " + err.message);
//         return res.status(400).send('Error al subir archivos');
//       }
  
//       const coverImage = req.files['image'][0].path; // Ruta de la imagen principal
//       const chapters = req.files['chapters']; // Array de objetos con sus datos
  
//       // Obtener las rutas de las imágenes de cada capítulo
//     //   const chapterImages = chapters.map(chapter => {
//     //     return chapter.data.map(file => file.path);
//     //   });
  
//       // Aquí puedes manejar la lógica para guardar las rutas de las imágenes en MongoDB junto con los otros datos del formulario
//       // ...
//       console.log(coverImage);
//       console.log(chapters);
  
//       res.send('Imágenes subidas exitosamente');
//     });
//   });

router.delete("/manhuas/:id", authRequired, deleteManhua)

router.put("/manhuas/:id", authRequired, updateManhua)


export default router