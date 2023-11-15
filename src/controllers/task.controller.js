import * as fs from "fs";
import Manga from "../models/Mangas.model.js";

const validarPostData = (title, chapters, href, detail, imgUrl, sevalida) => {
  var errors = [];
  if (title === undefined || title.trim() === "") {
    errors.push("el title no debe estar vacio");
  }

  if (chapters === undefined || chapters.trim() === "") {
    errors.push("el chapters no debe estar vacio");
  }
  if (href === undefined || href.trim() === "") {
    errors.push("el href no debe estar vacio");
  }

  if (imgUrl === undefined || imgUrl.trim() === "") {
    errors.push("el imgUrl no debe estar vacio");
  }

  if (detail === undefined || detail.trim() === "") {
    errors.push("el detail no debe estar vacio");
  }

  if (sevalida === "Y" && imgUrl === undefined) {
    errors.push("Selecciona una imagen en formato jpg, jpeg o png");
  } else {
    if (errors != "") {
      fs.unlinkSync("./public/uploads/" + imgUrl.filename);
    }
  }
  return errors;
};

export const getManhuas = async (req, res) => {};

export const createManhua = async (req, res) => {
  const { title, chapters, href, detail } = req.body;
  // console.log(description);
  const validation = validarPostData(
    title,
    chapters,
    href,
    detail,
    req.file,
    "Y"
  );
  // if (!title || !chapters || !imgUrl || !detail || !href) {
  //   return res.status(400).json({ message: "Not enough data" });
  // }

  console.log(chapters);
  // const chaptersWithImages = chapters.map((chapter) => ({
  //   chapter: chapter.chapter,
  //   data: chapter.data.map((image) => ({
  //     path: image.path,
  //   })),
  // }));
  try {
    if (validation.length > 0)
      res.sendStatus(400).json({ message: "Invalid post data" });
    const newManga = new Manga({
      title,
      href,
      imgUrl: "/uploads/" + req.file.filename,
      detail,
      chapters,
    });

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
