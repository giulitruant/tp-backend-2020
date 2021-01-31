import { Recorrido } from '../entity/Recorrido';
import { RecorridoRepository } from '../repositories/Recorrido.repository';

export class LineaColectivoService{
    constructor(private repo: RecorridoRepository){
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        
    }

    public async getAll(){
        return await this.repo.getRecorridos();

    }

    public async getOne(id: any){
        return await this.repo.getRecorrido(id);

    }

    public async create(body: Recorrido){
        return await this.repo.createRecorrido(body);

    }

    public async update(body: Recorrido){
        return await this.repo.updateRecorrido(body);

    }

    public async delete(id: any){
        return await this.repo.deleteRecorrido(id);
    }

}