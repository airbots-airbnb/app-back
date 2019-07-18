/*Jesus Quintal*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
	cComentario:{
		type:String,
	},
	alojamiento :{
		type:Schema.Types.ObjectId,
		ref:'alojamientos'
	},
	{ collection: "comentario", timestamps: true }
);

module.exports = mongoose.model("comentario", ComentarioSchema);
