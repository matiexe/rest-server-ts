import {Request ,Response} from 'express';

export const getUsuarios =( req:Request , res:Response) =>{
    res.json({
        msg: 'get usuarios'
    })
}
export const getUsuario =( req:Request , res:Response) =>{
    const { id } = req.params;
    res.json({
        msg: 'get usuario',
        id
    })
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