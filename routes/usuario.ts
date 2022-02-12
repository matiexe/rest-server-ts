import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarios, postUsuarios, putUsuario} from "../controller/usuarios";


const router = Router();


router.get('/',getUsuarios);
router.get('/:id',getUsuario);
router.post('/',postUsuarios);
router.put('/:id',putUsuario);
router.delete('/:id',deleteUsuario);




export default router;