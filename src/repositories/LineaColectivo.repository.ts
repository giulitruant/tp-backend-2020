import {Request, Response} from 'express'
import { getRepository, createQueryBuilder, Repository } from 'typeorm'
import { LineaColectivo } from '../entity/LineaColectivo'

export class LineaColectivoRepository{
    private repositorys = new Repository<LineaColectivo>();

    constructor(
        private repository :Repository<LineaColectivo>
    ){
        this.repositorys = repository;

    }

    public async getLineaColectivos(){
        return await this.repositorys.find();

    }

    public async getLineaColectivo(id: any){
        const lineaCol = await this.repositorys.createQueryBuilder('LineaColectivo')
        .leftJoinAndSelect('LineaColectivo.empresa', 'Empresa')
        .where('LineaColectivo.idLineaColectivo = :idLineaColectivo', {idLineaColectivo : id})
        .getOne();

        if(lineaCol === undefined){
            throw { status: 404, message: 'Linea de colectivo not found' };

        }

        return lineaCol;

    }

    public async createLineaColectivo(item: LineaColectivo){
        let linea = await this.repositorys.findOne(item.idLineaColectivo);
        if(linea !== undefined){
            throw { status: 404, message: 'Linea de colectivo exists' };

        }
        linea = await this.repositorys.create(item);
        await this.repositorys.save(linea);

    }

    public async updateLineaColectivo(item: LineaColectivo){
        let linea = await this.repositorys.findOne(item.idLineaColectivo);
        if(linea === undefined){
            throw { status: 404, message: 'Linea de colectivo exists' };

        }
        const result = await this.repositorys.merge(linea, item);
        await this.repositorys.save(result);

    }

    public async deleteLineaColectivo(id: any){
        const result = await this.repositorys.delete(id);
        if(result.affected === null){
            throw { status: 404, message: 'Linea de colectivo do not exists' };

        }
    }
}