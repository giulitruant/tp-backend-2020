import {NextFunction, Router, Request, Response } from 'express';
import { ParadaService } from '../services/Parada.service';

export class ParadaController{
    constructor(private service: ParadaService){

    }

    public getAll(req: Request, res: Response, next: NextFunction){
        (async () => {
            const paradas = await this.service.getAll();
            return res.send(200).json(paradas);
        })().catch(next);

    }

    public getOne(req: Request, res: Response, next: NextFunction){
        (async () => {
            const parada = await this.service.getOne(req.params.NroParada);
            return res.send(200).json(parada);
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
            await this.service.delete(req.params.NroParada);
            return res.send(200);
        })().catch(next);
        
    }

}

// const router = Router();

// import { getParada, getParadas, createParada, updateParada, deleteParada } from '../repositories/Parada.repository'

// router.get('/paradaColectivo', getParadas);
// router.get('/paradaColectivo/:NroParada', getParada);
// router.post('/paradaColectivo', createParada);
// router.put('/paradaColectivo', updateParada);
// router.delete('/paradaColectivo/:NroParada', deleteParada);

// export default router