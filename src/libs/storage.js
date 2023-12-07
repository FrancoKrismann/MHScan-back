import multer from "multer";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicFolderPath = join(__dirname, "..", "public");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join(publicFolderPath, `${file.fieldname}`));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

export const upload = multer({ storage: storage }).fields([
  { name: "image", maxCount: 1 },
  // { name: 'chapters[].data[]', maxCount: 50 }
]);
