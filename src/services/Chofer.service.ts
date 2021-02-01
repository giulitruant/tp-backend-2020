import { Chofer } from '../entity/Chofer';
import { ChoferRepository } from '../repositories/Chofer.repository';

export class ChoferService{
    constructor(private repo: ChoferRepository){
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        
    }

    public async getAll(){
        return await this.repo.getChoferes();

    }

    public async getOne(id: any){
        return await this.repo.getChofer(id);

    }

    public async create(body: Chofer){
        return await this.repo.createChofer(body);

    }

    public async update(body: Chofer){
        return await this.repo.updateChofer(body);

    }

    public async delete(id: any){
        return await this.repo.deleteChofer(id);
    }

}