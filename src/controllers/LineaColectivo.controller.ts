import {NextFunction, Router, Request, Response } from 'express'
import { LineaColectivoService } from '../services/LineaColectivo.service';
//const router = Router()

export class LineaColectivoController{    
    constructor(private lineaServices: LineaColectivoService){
        // this.getAll = this.getAll.bind(this);
        // this.getOne = this.getOne.bind(this);
        // this.create = this.create.bind(this);
        // this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);        

    }


    public getAll(req: Request, res: Response, next: NextFunction){
        (async () => {
            const lineas = await this.lineaServices.getAll();
            return res.json(lineas);

        })().catch(next);
    }

    public getOne(req: Request, res: Response, next: NextFunction){
        (async () => {            
            const linea = await this.lineaServices.getOne(req.params.idLineaColectivo);
            if(linea === undefined){
                return res.send(404).json(linea);
            }
            return res.json(linea);

        })().catch(next);
    }

    public create(req: Request, res: Response, next: NextFunction){
        (async () => {
            const linea = await this.lineaServices.create(req.body);
            return res.send().json({status: 200, message: 'Ok'});
        })().catch(next);
    }

    public update(req: Request, res: Response, next: NextFunction){
        (async () => {
            await this.lineaServices.update(req.body);
            return res.send(200);
        })
        ().catch(next);
    }

    public delete(req: Request, res: Response, next: NextFunction){
        (async () => {
            await this.lineaServices.delete(req.params.idLineaColectivo);
            return res.send(200);
        })
        ().catch(next);
    }


}

// router.get('/lineaColectivo', getLineaColectivos);
// router.get('/lineaColectivo/:id', getLineaColectivo);
// router.post('/lineaColectivo', createLineaColectivo);
// router.put('/lineaColectivo', updateLineaColectivo);
// router.delete('/lineaColectivo/:id', deleteLineaColectivo);

// export default router
