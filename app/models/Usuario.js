const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema(
	{
		usuario: {
			type: String,
			require: true
		},
		password: {
			type: String,
			require: true
		},
		nombre: {
			type: String,
			require: true
		},
		primerapellido: {
			type: String,
			require: true
		},
		segundoapellido: {
			type: String,
			require: true
		},
		correo: {
			type: String,
			require: true,
			unique: true
		},
		sexo: {
			type: String,
			enum: ["Hombre", "Mujer", "Otro"]
		},
		telefono: {
			type: Number
		},
		direccion: {
			type: Schema.Types.ObjectId,
			ref: "direccion"
		},
		idioma: {
			type: String,
			enum: ["Ingles", "Espanol"]
		},
		moneda: {
			type: String,
			enum: ["Dolar", "Peso", "Euro"]
		}
	},
	{ collection: "usuarios", timestamps: true }
);

/**
 * Se ejecuta antes de guardar un usuario.
 */
UsuarioSchema.pre("save", function(next) {
	const usuario = this;
	const SALT_FACTOR = 10;

	//Se valida si el password se modificó
	if (!usuario.isModified("password")) {
		return next();
	}

	bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
		if (err) return next(err);

		bcrypt.hash(usuario.password, salt, function(err, hash) {
			if (err) return next(err);
			usuario.password = hash;
			next();
		});
	});
});

module.exports = mongoose.model("usuario", UsuarioSchema);
