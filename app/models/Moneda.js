const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MonedaSchema = new Schema({
	nombre_moneda:{
		type:String,
		required:true
	},
	simbolo_moneda:{
		type:String,
		require:false
	},
	descripcion:{
		type:String,
		required:false
	}
});

module.exports = mongoose.model('monedas', MonedaSchema);