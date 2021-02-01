import {NextFunction, Router, Request, Response } from 'express';
import { RecorridoService } from '../services/Recorrido.service';
// const router = Router();

export class RecorridoController{
    constructor(private service: RecorridoService){}

    public getAll(req: Request, res: Response, next: NextFunction){
        (async () => {
            const recorridos = await this.service.getAll();
            return res.send(200).json(recorridos);
        
        })
        ().catch(next);

    }


    public getOne(req: Request, res: Response, next: NextFunction){
        (async () => {
            const recorrido = await this.service.getOne(req.params.IdRecorrido);
            if(recorrido === undefined){
                return res.send(404).json({message: 'Recorrido not found'});
            }

            return res.send(200).json(recorrido);
        })
        ().catch(next);

    }

    public create(req: Request, res: Response, next: NextFunction){
        (async () => {
            await this.service.create(req.body);
            return res.send(200);

        })
        ().catch(next);

    }

    public update(req: Request, res: Response, next: NextFunction){
        (async () => {
            await this.service.update(req.body);
            return res.send(200);

        })
        ().catch(next);

    }

    public delete(req: Request, res: Response, next: NextFunction){
        (async () => {
            await this.service.delete(req.params.IdRecorrido);
            return res.send(200);

        })
        ().catch(next);

    }

}

// router.get('/recorrido', getRecorridos);    
// router.get('/recorrido/:IdRecorrido', getRecorrido);
// router.post('/recorrido', createRecorrido);
// router.put('/recorrido', updateRecorrido)
// router.delete('/recorrido/:IdRecorrido', deleteRecorrido);

// export default router