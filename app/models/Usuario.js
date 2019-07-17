const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
	cUsuario: {
		type: String,
		require: true
	},
	cPassword: {
		type: String,
		require: true
	},
	cNombre: {
		type: String,
		require: true
	},
	cPrimerApellido: {
		type: String,
		require: true
	},
	cSegundoApellido: {
		type: String,
		require: true
	},
	cCorreo: {
		type: String,
		require: true,
		unique: true
	},
	cSexo: {
		type: String,
		enum: ['H', 'M', 'O']
	},
	iTelefono: {
		type: Number
	},
	direccion: {
		type: Schema.Types.ObjectId,
		ref: 'direccion'
	},
	Perfil: {
		type: Schema.Types.ObjectId,
		ref: 'perfil'
	}
}, { collection: 'usuarios', timestamps: true });


/**
 * Se lanza antes de guardar un usuario.
 */
UsuarioSchema.pre('save', function (next) {
	
	const usuario = this;
	const SALT_FACTOR = 10;
	//Se valida si el password se modificó
	if (!usuario.isModified('cPassword')) { return next(); }

	bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
		if (err) return next(err);

		bcrypt.hash(usuario.cPassword, salt, function (err, hash) {
			if (err) return next(err);
			usuario.cPassword = hash;
			next();
		});
	});
});


module.exports = mongoose.model('usuario', UsuarioSchema);