
import Manga from "../models/Mangas.model.js";


export const getManhuas = async (req, res) => {};

export const createManhua = async (req, res) => {
  const { title, chapters, href, detail } = req.body;
console.log("Pasa");
  

  try {
    const newManga = Manga({
      title,
      href,
      detail,
      chapters,
    });
    if(req.file) {
    const {filename} = req.file
    newManga.setImgUrl(filename)
  }

    const MangaSaved = await newManga.save();
    res.json({
      id: MangaSaved.id,
      title: MangaSaved.title,
      href: MangaSaved.href,
      chapters: MangaSaved.chapters,
      imgUrl: MangaSaved.imgUrl,
      detail: MangaSaved.detail,
      createdAt: MangaSaved.createdAt,
      updatedAt: MangaSaved.updatedAt,
    });
  } catch (error) {
    // Maneja cualquier error que ocurra durante la creación
    res.status(500).json({ error: error.message });
  }
};

export const getManhua = async (req, res) => {};

export const updateManhua = async (req, res) => {};

export const deleteManhua = async (req, res) => {};
