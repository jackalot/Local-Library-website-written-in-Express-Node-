var mongoose = require('mongoose');
var Schema = mongoose.Schema;

genreSchema = new Schema(
	{
		name: {type: String, required: true, minlength: 3, maxLength: 100}
	});

genreSchema
.virtual('url')
.get(function () {
	return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', genreSchema);