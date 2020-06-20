import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  url: { type: String, required: true, trim: true, lowercase: true }, // article current url
  domain: { type: String, required: true, trim: true, lowercase: true }, // domain from the url
  title: { type: String, required: true, trim: true }, // title of article
  lang: { type: String, required: true, trim: true }, // iso code of the language
  published: { type: Date }, // when was published
  updated: { type: Date }, // when was modified
  characters: { type: Number }, // characters count for billing
  author: { type: Array }, // Author of article or translation
  tags: { type: Array }, // list of tags
  reponame: { type: String }, // if this is our translation — it have repo
  translations: { type: Array } // array of thanslations in same format
});

const Article = mongoose.model("articles", ArticleSchema);
export default Article;
