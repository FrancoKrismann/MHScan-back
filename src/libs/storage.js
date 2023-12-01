import multer from 'multer';

const storageSingle = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null, uniqueSuffix + file.originalname)
    }
  })

  const storageMultipler = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'chapters/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  export const uploadSingle = multer({ storage: storageSingle })

  export const uploadMultiple = multer({ storage: storageMultipler })

