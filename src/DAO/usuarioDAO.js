

const usuarioModel = require('./../Models/usuario.model');
const { Op } = require("sequelize");
class UsarioDAO{

    async crearUsuario(usuario){
        try {
            let usuarioActual = await usuarioModel.create(usuario)    
            return usuarioActual;
        } catch (error) {
            throw error;
        }
    }

    async obtenerUsuarios(params){
        try {
            let options = params ?  {[Op.eq] : params.id } : { [Op.notIn]:0}
            let filter  = {idUsuario : options}
            let usuarios = await usuarioModel.findAll(
                
                {
                    logging:true, 
                    where: filter,
                    include: [{
                        association: 'Roles',
                    }]
                })   
            return usuarios;
        } catch (error) {
            throw error;
        }
    }

    async actualizarUsuario(usuario){
        try {

            let usuarioActual = await usuarioModel.update({...usuario} ,{ logging:true, where :{idUsuario:usuario.idUsuario}}) 
            return usuarioActual;
        } catch (error) {
            throw error;
        }
    }

    async eliminarUsuario(params){
        try {

            let usuarioActual = await usuarioModel.destroy({where :{idUsuario: params.id }}) 
            return usuarioActual;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new UsarioDAO();