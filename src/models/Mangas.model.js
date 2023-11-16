import mongoose from "mongoose";
import { config } from "../config.js";


const chapterSchema = new mongoose.Schema(
  {
    chapter: {
      type: Number,
      required: true,
    },
    data: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const detailSchema = new mongoose.Schema({
  alternative: String,
  author: String,
  artist: String,
  genre: {
    type: [String],
    default: [],
  },
  type: String,
  releaser: Number,
  status: String,
  description: {
    type: [String],
    default: [],
  },
});

const ManghuaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    href: {
      type: String,
      required: true,
      unique: true,
    },
    imgUrl: String,
    detail: {
      type: [detailSchema],
      required: true,
      trim: true,
      unique: true,
      default: [],
    },
    chapters: {
      type: [chapterSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

ManghuaSchema.methods.setImgUrl = function setImgUrl (filename){
  const {host, port} = config.appConfig
  this.imgUrl = `${host}:${port}/public/${filename}`;
}

export default mongoose.model("Manga", ManghuaSchema);
