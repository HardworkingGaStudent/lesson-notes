const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: { type: String, required: true, unique: true },
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	body: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;