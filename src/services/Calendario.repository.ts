import { Calendario } from '../entity/Calendario';
import { CalendarioRepository } from '../repositories/Calendario.repository';

export class LineaColectivoService{
    constructor(private repo: CalendarioRepository){
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        
    }

    public async getAll(){
        return await this.repo.getCalendarios();

    }

    public async getOne(id: any){
        return await this.repo.getCalendario(id);

    }

    public async create(body: Calendario){
        return await this.repo.createCalendario(body);

    }

    public async update(body: Calendario){
        return await this.repo.updateCalendario(body);

    }

    public async delete(id: any){
        return await this.repo.deleteCalendario(id);
    }

}