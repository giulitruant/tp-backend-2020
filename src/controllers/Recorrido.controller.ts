import { Router } from 'express'
const router = Router();

import { getRecorridos, getRecorrido, createRecorrido, updateRecorrido, deleteRecorrido } from '../repositories/Recorrido.repository'

router.get('/recorrido', getRecorridos);    
router.get('/recorrido/:IdRecorrido', getRecorrido);
router.post('/recorrido', createRecorrido);
router.put('/recorrido', updateRecorrido)
router.delete('/recorrido/:IdRecorrido', deleteRecorrido);

export default router