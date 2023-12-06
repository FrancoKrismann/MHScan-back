
import Manga from "../models/Mangas.model.js";


export const getManhuas = async (req, res) => {};

export const createManhua = async (req, res) => {
  const { title, href , chapters} = req.body;
console.log("Pasa");
console.log(req.body);
const formData = req.body;
const detalleInfo = JSON.parse(formData.detail);
// const chaptersInfo = JSON.parse(formData.chapters)

// const mainImage = req.file.filename; 
// const mainImagesArray = req.files.filename
  try {
    const newManga = Manga({
      title,
      href,
      image:mainImage,
      detail:detalleInfo,
      chapters:chapters,
    });

    const MangaSaved = await newManga.save();

    res.json({
      id: MangaSaved.id,
      title: MangaSaved.title,
      href: MangaSaved.href,
      chapters: MangaSaved.chapters,
      image: MangaSaved.image,
      detail: MangaSaved.detail,
      createdAt: MangaSaved.createdAt,
      updatedAt: MangaSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getManhua = async (req, res) => {};

export const updateManhua = async (req, res) => {};

export const deleteManhua = async (req, res) => {};
