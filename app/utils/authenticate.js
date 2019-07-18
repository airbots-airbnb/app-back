const bcrypt = require("bcrypt");
const UsuarioModel = require("../models/Usuario");
const createToken = require("./createToken");

const authenticate = ({ correo, password }) => {
	//resove: lo que espero de la promes
	//reject: cuando ocurre algo que no espero
	return new Promise((resolve, reject) => {
		UsuarioModel.findOne({ correo })
			.then(user => {
				if (!user) reject(new Error("usuario no existe"));

				bcrypt.compare(password, user.password, (err, isValid) => {
					if (err) reject(new Error("Error al crear el Token"));

					isValid
						? resolve(createToken(user))
						: reject("Password no coinciden");
				});
			})
			.catch(e => reject(e));
	});
};

module.exports = authenticate;
