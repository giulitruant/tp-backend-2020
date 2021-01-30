import { LineaColectivo } from '../entity/LineaColectivo';
import { LineaColectivoRepository } from '../repositories/LineaColectivo.repository';

export class LineaColectivoService{
    constructor(private repo: LineaColectivoRepository){
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        
    }

    public async getAll(){
        return await this.repo.getLineaColectivos();

    }

    public async getOne(id: any){
        return await this.repo.getLineaColectivo(id);

    }

    public async create(body: LineaColectivo){
        return await this.repo.createLineaColectivo(body);

    }

    public async update(body: LineaColectivo){
        return await this.repo.updateLineaColectivo(body);

    }

    public async delete(id: any){
        return await this.repo.deleteLineaColectivo(id);
    }

}