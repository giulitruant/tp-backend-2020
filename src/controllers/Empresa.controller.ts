import {NextFunction, Router, Request, Response } from 'express'
import { EmpresaService } from '../services/Empresa.service';

export class EmpresaRouter{
    constructor(private empresaService: EmpresaService){        
        this.findAll = this.findAll.bind(this);

    }

    public findAll(req: Request, res: Response, next: NextFunction){
        (async () => {
            const emp = await this.empresaService.findAll()
            return res.json(emp);

        })().catch(next);
    }


}

// router.get('/empresa', getEmpresas);
// router.post('/empresa', createEmpresa);
// router.get('/empresa/:cuit', getEmpresa);
// router.put('/empresa', updateEmpresa);
// router.delete('/empresa/:cuit', deleteEmpresa);

// export default router