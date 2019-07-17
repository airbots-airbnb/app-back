/*Jesus Quintal*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservacionSchema = new Schema({
	fechaInicio: {
		type: String,
	},
	fechafin: {
		type: String,
	},
	alojamiento: {
		type: Schema.Types.ObjectId,
		ref: 'alojamiento'
	},
	usuario: {
		type: Schema.Types.ObjectId,
		ref: 'usuario'
	}
}, { collection: 'reservacion', timestamps: true });

module.exports = mongoose.model('reservacion', ReservacionSchema);
