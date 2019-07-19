const AlojamientoModel = require('../models/Alojamiento');
const UsuarioModel = require('../models/Usuario');
const authenticate = require('../utils/authenticate');
const ServicioModel = require('../models/Servicio');
const ComentarioModel = require('../models/Comentario');
const ReservacionModel = require('../models/Reservacion');

/**
 * Función para crear un alojamiento.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const createAlojamiento = async (root, params, context, info) => {

	const Alojamiento = await AlojamientoModel.create(params.data)
		.catch(e => { throw new Error(e.message); });

	if (!Alojamiento) throw new Error('No se creo el Alojamiento');

	return Alojamiento.toObject();
};

/**
 * Función para actualizar los datos de un alojamiento.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const updateAlojamiento = async (root, params, context, info) => {

	const { data } = params;
	const { user } = context;

	let Alojamiento = await AlojamientoModel.findById(user._id);

	if (!Alojamiento)
		throw new Error('El Alojamiento no existe');

	Object.keys(data).map(key => Alojamiento[key] = data[key]);

	const AlojamientoActualizado = await Alojamiento.save({ new: true });

	return AlojamientoActualizado.toObject();
};

/**
 * Función para crear un servicio.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const createServicio = async (root, params, context, info) => {

	const Servicio = await ServicioModel.create(params.data)
		.catch(e => { throw new Error(e.message); });

	if (!Servicio) throw new Error('No se creo el Servicio');

	return Servicio.toObject();
};

//#region Usuarios
/**
 * Función para crear un usuario
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const createUsuario = async (root, params, context, info) => {

	const usuario = await UsuarioModel.create(params.data)
		.catch(e => { throw new Error(e.message); });

	if (!usuario) throw new Error('No se creo el usuario');

	return usuario.toObject();
};

/**
 * 
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const login = async (root, params, context, info) => {

	const token = await authenticate(params).catch(e => { throw e; });

	return {
		token,
		message: 'Ok'
	};
};



const createComentario = async (root, params, context, info) => {

	const {user} = context;
	params.data.usuario = user._id;
	
	const comentario = await ComentarioModel.create(params.data).catch( e => {throw new Error('Error al crear Comentario');} );
	const newComentario = await ComentarioModel.findOne({_id:comentario._id}).populate('usuario');
	await ComentarioModel.findByIdAndUpdate(user.id,{$push:{comentarios:comentario}});
	return newComentario;

};


const createReservacion = async (root, params, context, info) => {

	const reservacion = await ReservacionModel.create(params.data)
		.catch(e => { throw new Error(e.message); });

	if (!reservacion) throw new Error('No se creo la reservación');

	return reservacion.toObject();
};




//#region

module.exports = {
	createAlojamiento,
	updateAlojamiento,
	createUsuario,
	createServicio,
	createComentario,
	createReservacion,
	login
};