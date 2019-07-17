const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerfilSchema = new Schema({
	cDescripcion: {
		type: String,
	},
	idiomas: {
		type: Schema.Types.ObjectId,
		ref: 'idiomas'
	},
	monedas: {
		type: Schema.Types.ObjectId,
		ref: 'monedas'
	},
	adicional: {
		type: Schema.Types.ObjectId,
		ref: 'adicional'
	}
}, { collection: 'perfil', timestamps: true });

module.exports = mongoose.model('perfil', PerfilSchema);