import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadPath = path.join(__dirname, '..', '..', 'storage', 'imgs');
        cb(null, uploadPath);
    },
    filename: function(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.png`);
    }
});

export const upload = multer({ storage });
