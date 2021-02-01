import {NextFunction, Router, Request, Response } from 'express';
import { CalendarioService } from '../services/Calendario.service';
// import { Router } from 'express'
// const router = Router()

export class CalendarioController{
    constructor(private service: CalendarioService){

    }

    public getAll(req: Request, res: Response, next: NextFunction){
        (async () => {
            const calendarios = await this.service.getAll();
            return res.send(200).json(calendarios);

        })().catch(next);
    }

    public getOne(req: Request, res: Response, next: NextFunction){
        (async () => {
            const calendario = await this.service.getOne(req.params.IdCalendario);
            return res.send(200).json(calendario);

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
            await this.service.delete(req.params.IdCalendario);
            return res.send(200);

        })().catch(next);
    }

}

// import { getCalendarios, getCalendario, createCalendario, updateCalendario, deleteCalendario } from '../repositories/Calendario.repository'

// router.get('/calendario', getCalendarios);
// router.get('/calendario/:IdCalendario', getCalendario);
// router.put('/calendario', updateCalendario);
// router.post('/calendario', createCalendario);
// router.delete('/calendario/:IdCalendario', deleteCalendario);

// export default router