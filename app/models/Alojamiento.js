const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlojamientoSchema = new Schema({
	descripcion: {
		type: String
	},
	numero_banos: {
		type: Number
	},
	numero_camas: {
		type: Number,
	},
	numero_dormitorios: {
		type: Number,
	},
	numero_huespedes: {
		type: Number
	},
	precio: {
		type: Number
	},
	usuario: {
		type: Schema.Types.ObjectId,
		ref: 'usuario' 
	},
	disposicion_huespedes: {
		type: String,
		enum: ['Entero', 'Privado', 'Compartido']
	},
	tipo_alojamiento: {
		type: String,
		enum: ['Departamento', 'Casa', 'Anexa']
	},
	fotos: {
		type: [String]
	},
	espacio_exclusivo: {
		type: Boolean,
	},
	is_active: {
		type: Boolean,
		default: true
	}
}, { collection: 'alojamientos', timestamps: true });

module.exports = mongoose.model('alojamiento', AlojamientoSchema);