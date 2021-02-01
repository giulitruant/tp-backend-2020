import { Parada } from '../entity/Parada';
import { ParadaColectivoRepository } from '../repositories/Parada.repository';

export class ParadaService{
    constructor(private repo: ParadaColectivoRepository){
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        
    }

    public async getAll(){
        return await this.repo.getParadas();

    }

    public async getOne(id: any){
        return await this.repo.getParada(id);

    }

    public async create(body: Parada){
        return await this.repo.createParada(body);

    }

    public async update(body: Parada){
        return await this.repo.updateParada(body);

    }

    public async delete(id: any){
        return await this.repo.deleteParada(id);
    }

}