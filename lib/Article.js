"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _mongoose=require("mongoose");var _mongoose2=_interopRequireDefault(_mongoose);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ArticleSchema=new _mongoose2.default.Schema({url:{type:String,required:true,trim:true,lowercase:true},// article current url
domain:{type:String,required:true,trim:true,lowercase:true},// domain from the url
title:{type:String,required:true,trim:true},// title of article
lang:{type:String,required:true,trim:true},// iso code of the language
published:{type:Date,required:true},characters:{type:Number},// characters count for billing
author:[{type:_mongoose2.default.Schema.ObjectId,ref:"users"}],// Author of article or translation
tags:{type:Array},// list of tags
reponame:{type:String},// if this is our translation — it have repo
translations:{type:Array// array of thanslations in same format
}});var Article=_mongoose2.default.model("articles",ArticleSchema);exports.default=Article;
//# sourceMappingURL=Article.js.map