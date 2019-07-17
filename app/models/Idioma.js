const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IdiomaSchema = new Schema({
	nombre_idioma:{
		type:String,
		required:true
	},
	descripcion:{
		type:String,
		required:false
	}
});

module.exports = mongoose.model('idiomas', IdiomaSchema);