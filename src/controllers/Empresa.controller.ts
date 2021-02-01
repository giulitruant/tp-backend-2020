import {NextFunction, Router, Request, Response } from 'express'
import { EmpresaService } from '../services/Empresa.service';

export class EmpresaController{
    constructor(private empresaService: EmpresaService){        
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

    }

    public getAll(req: Request, res: Response, next: NextFunction){
        (async () => {
            const emp = await this.empresaService.getAll();
            return res.json(emp);

        })().catch(next);
    }

    public getOne(req: Request, res: Response, next: NextFunction){
        (async () => {
            return await this.empresaService.getOne(req.params.Cuit);            

        })().catch(next);
    }

    public create(req: Request, res: Response, next: NextFunction){
        (async () => {
            return await this.empresaService.create(req.body);

        })().catch(next);

    }

    public update(req: Request, res: Response, next: NextFunction){
        (async () => {
            return await this.empresaService.update(req.body);

        })().catch(next);

    }

    public delete(req: Request, res: Response, next: NextFunction){
        (async () => {
            return await this.empresaService.delete(req.params.Cuit);

        })().catch(next);

    }
}