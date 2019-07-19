const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema(
	{
		comentario: {
			type: String
		},
		usuario: {
			type: Schema.Types.ObjectId,
			ref: 'usuario' 
		}
	},
	{ collection: 'comentarios', timestamps: true }
);

module.exports = mongoose.model('comentario', ComentarioSchema);
