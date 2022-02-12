"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuarios = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        msg: 'get usuarios'
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get usuario',
        id
    });
};
exports.getUsuario = getUsuario;
const postUsuarios = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post usuarios',
        body
    });
};
exports.postUsuarios = postUsuarios;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'actualiza usuario',
        id,
        body
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete usuario',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map