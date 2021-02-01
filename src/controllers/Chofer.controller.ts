import {NextFunction, Router, Request, Response } from 'express';
import { ChoferService } from '../services/Chofer.service';
// import { Router } from 'express'
// const router = Router()

export class ChoferController{
    constructor(private service: ChoferService){ }

    public getAll(req: Request, res: Response, next: NextFunction){
        (async () => {
            const choferes = await this.service.getAll();
            return res.send(200).json(choferes);
        })().catch(next);
        
    }

    public getOne(req: Request, res: Response, next: NextFunction) {
        (async () => {
            const chofer = await this.service.getOne(req.params.Cuil);
            return res.send(200).json(chofer);
        })().catch(next);
        
    }

    public create(req: Request, res: Response, next: NextFunction){
        (async () => {
            await this.service.create(req.body);
            return res.send(200);
        })().catch(next);
    }

    public update(req: Request, res: Response, next: NextFunction){
        (async () => {
            await this.service.update(req.body);
            return res.send(200);
        })().catch(next);
    }

    public delete(req: Request, res: Response, next: NextFunction){
        (async () => {
            await this.service.delete(req.params.Cuil);
            return res.send(200);
        })().catch(next);
    }

}

// import { createChofer, getChofer, getChoferes, updateChofer, deleteChofer } from '../repositories/Chofer.repository'

// router.get('/chofer', getChoferes);
// router.get('/chofer/:cuil', getChofer);
// router.post('/chofer', createChofer);
// router.put('/chofer', updateChofer);
// router.delete('/chofer/:cuil', deleteChofer);

// export default router