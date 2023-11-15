import multer from "multer";

const SaveImage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    if (file != null) {
      const ext = file.originalname.split(".").pop();
      cb(null, Date.now() + `.` + ext);
    }
  },
});

const filter = (req, file, cb) => {
  if (
    file &&
    (file.minitype === "image/jpg" ||
      file.minitype === "image/jpeg" ||
      file.minitype === "image/png")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export const subirImagen = multer({
  storage: SaveImage,
  fileFilter: filter,
})
