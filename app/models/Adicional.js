const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdicionalSchema = new Schema({
	centro_educativo:{
		type:String,
		required:false,
		default:''
	},
	contacto_emergencia:{
		type:String,
		require:false,
		default:''
	},
	nombre_empresa:{
		type:String,
		require:false,
		default:''
	},
	contacto_empresa:{
		type:String,
		require:false,
		default:''
	},
	descripcion:{
		type:String,
		required:false,
		default:''
	}
});

module.exports = mongoose.model('adicional', AdicionalSchema);