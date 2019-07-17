const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServicioSchema = new Schema({
	nombre: {
		type:String
	},
	descripcion: {
		type:String
	}
});

module.exports = mongoose.model('servicio',ServicioSchema);