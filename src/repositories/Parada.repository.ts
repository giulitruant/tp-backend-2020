import {Request, Response} from 'express'
import { getRepository, Repository } from 'typeorm'
import { Parada } from '../entity/Parada'

export class ParadaColectivoRepository{
    private repositorys = new Repository<Parada>();

    constructor(
        private repository: Repository<Parada>
    ){
        this.repositorys = repository;
    }

    public async getParadas(){
        return await this.repositorys.find();
        
    }

    public async getParada(nroParada: any){
        const result = await this.repositorys.findOne(nroParada);
        if(result === undefined){
            throw { status: 404, message: 'Parada de colectivo not found' };

        }

        return result;
    }
    
    public async createParada(paradaColectivo: Parada){
        const parada = await this.repositorys.findOne(paradaColectivo.NroParada);
        if(parada !== undefined){
            throw { status: 404, message: 'Parada de colectivo exists' };

        }
        const insertedParada = await this.repositorys.create(paradaColectivo);
        await this.repositorys.save(insertedParada);

    }

    public async updateParada(item: Parada){
        let parada = await this.repositorys.findOne(item.NroParada);
        if(parada === undefined){
            throw { status: 404, message: 'Parada de colectivo not found' };

        }
        parada = await this.repositorys.merge(parada, item);
        return await this.repositorys.save(parada);


    }

    public async deleteParada(nroParada: any){
        const isDeleted = await this.repositorys.delete(nroParada);
        if(isDeleted.affected === null){
            throw { status: 404, message: 'Nro de parada nor found' };

        }
    }

}