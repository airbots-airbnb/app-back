const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema(
	{
		comentario: {
			type: String
		},
		alojamiento: {
			type: Schema.Types.ObjectId,
			ref: 'alojamientos'
		},
		usuario: {
			type: Schema.Types.ObjectId,
			ref: 'usuario'
		}
	},
	{ collection: 'comentario', timestamps: true }
);

module.exports = mongoose.model('comentario', ComentarioSchema);
