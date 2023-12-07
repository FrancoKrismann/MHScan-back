
import Manga from "../models/Mangas.model.js";


export const getManhuas = async (req, res) => {};

export const createManhua = async (req, res) => {
  console.log("Pasa");
  const { title, href ,detail, chapters} = req.body;
  // console.log(req.body);

console.log("Title: ",title);
console.log("href: ",href);
console.log("Detail: ",detail);
console.log("Chapters: ",chapters)

  try {
    const newManga = Manga({
      title,
      href,
      image:"",
      detail:detail,
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
