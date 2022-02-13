import {Request ,Response} from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async( req:Request , res:Response) =>{
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}
export const getUsuario =async( req:Request , res:Response) =>{
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id)

    if(!usuario){
        res.status(404).json({
            msg:`no existe el usuario con el id: ${id}`
        })
    }else{
        res.json(usuario)
    }
    
}

export const postUsuarios =( req:Request , res:Response) =>{
    
    const {body} = req;
    
    res.json({
        msg: 'post usuarios',
        body
    })
}

export const putUsuario =( req:Request , res:Response) =>{
    
    const{id} = req.params

    const{body} = req;
    
    res.json({
        msg: 'actualiza usuario',
        id,
        body
    })
}

export const deleteUsuario =( req:Request , res:Response) =>{
    
    const { id } = req.params
    res.json({
        msg: 'delete usuario',
        id
    })
}