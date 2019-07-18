const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DireccionSchema = new Schema({
	calle: {
		type: String,
	},
	colonia: {
		type: String,
	},
	estado: {
		type: String,
	},
	numero: {
		type: String,
	},
	pais: {
		type: String,
	},
}, { collection: 'direccion', timestamps: true });

module.exports = mongoose.model('direccion', DireccionSchema);