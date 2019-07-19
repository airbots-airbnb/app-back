const AlojamientoModel =  require('../models/Alojamiento');
const DireccionModel =  require('../models/Direccion');
const UsuarioModel = require('../models/Usuario');
const ServicioModel = require('../models/Servicio');
const ComentarioModel = require('../models/Comentario');
const ReservacionModel = require('../models/Reservacion');

//#region Alojamiento
/**
 * Función para obtener todos los alojamientos.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listAlojamientos = async (root, params, context, info) => {

	const alojamientos = await AlojamientoModel.find({}).populate('usuario');

	return alojamientos;
};
//#end region

//#region Direccion
const listDirecciones = async (root, params, context, info) => {

	const direcciones = await  DireccionModel.find({});

	return direcciones;
};
//#region

//#region Usuarios
/**
 * Función 
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listUsuarios = async (root, params, context, info) => {

	const usuarios = await  UsuarioModel.find({});

	return usuarios;
};
//#region

//#Servicio
/**
 * Función para obtener todos los servicios.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listServicios = async (root, params, context, info) => {

	const servicio = await  ServicioModel.find({});

	return servicio;
};
//#endregion


//#Region Comentarios
/**
 * Función para obtener todos los servicios.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listComentarios = async(root, params, context, info) => {

	const comentario = await ComentarioModel.find({});

	return comentario;
};
//#endregion

//#Region Reservaciones
/**
 * Función para obtener todos los servicios.
 * @param {*} root 
 * @param {*} params 
 * @param {*} context 
 * @param {*} info 
 */
const listReservaciones = async(root, params, context, info) => {

	const reservacion = await ReservacionModel.find({});

	return reservacion;
};
//#Reservaciones


module.exports = {
	listAlojamientos,
	listDirecciones,
	listUsuarios,
	listServicios,
	listComentarios,
	listReservaciones
};
