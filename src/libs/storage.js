import multer from 'multer';
import { dirname, join } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicFolderPath = join(__dirname, '..', 'public');

const storageSingle = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, join(publicFolderPath,`${file.fieldname}`))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null, uniqueSuffix + file.originalname)
    }
  })

  // const storageMultipler = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, join(publicFolderPath,"chapters"))
  //   },
  //   filename: function (req, file, cb) {
  //     const uniqueSuffix = Date.now() 
  //     cb(null, uniqueSuffix + file.originalname)
  //   }
  // })
  
  export const upload = multer({ storage: storageSingle }).fields([
    // { name: 'image', maxCount: 1 },
    { name: 'chapters'},
    // ... especifica cada campo de la estructura anidada aquí
  ]);;

  // export const uploadMultiple = multer({ storage: storageMultipler })

