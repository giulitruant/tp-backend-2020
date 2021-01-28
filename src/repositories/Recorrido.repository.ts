import {Request, Response} from 'express'
import { getRepository, createQueryBuilder, Repository } from 'typeorm'
import { Recorrido } from '../entity/Recorrido'

export class RecorridoRepository{
    private repositorys = new Repository<Recorrido>();

    constructor(
        private repository: Repository<Recorrido>
    ){
        this.repositorys = repository;
    }

    public async getRecorridos(){
        return await this.repositorys.find();

    }

    public async getRecorrido(idRecorrido: any){
        const result = await this.repositorys.createQueryBuilder("Recorrido")
        .leftJoinAndSelect('Recorrido.lineaColectivo', 'LineaColectivo')
        .where("Recorrido.IdRecorrido = :IdRecorrido", {IdRecorrido: idRecorrido})
        .getMany();
        if(result === undefined){
            throw { status: 404, message: 'Recorrido not found' };            

        }
        return result;

    }

    public async createRecorrido(item: Recorrido){
        let recorrido = await this.repositorys.findOne(item.IdRecorrido);
        if(recorrido !== undefined){
            throw { status: 404, message: 'Recorrido exists' };

        }
        recorrido = await this.repositorys.create(item);
        await this.repositorys.save(recorrido);        

    }

    public async updateRecorrido(item: Recorrido){
        let recorrido = await this.repositorys.findOne(item);
        if(recorrido === undefined){
            throw { status: 404, message: 'Recorrido not found' };

        }
        recorrido = await this.repository.merge(recorrido, item);
        await this.repository.save(recorrido);

    }

    public async deleteRecorrido(id: any){
        const result = await this.repositorys.delete(id);
        if(result.affected === null){
            throw { status: 404, message: 'Recorrido not found' };

        }


    }
}