import { Repository } from 'typeorm'
import { Calendario } from '../entity/Calendario'

export class EmpresaRepository{
    private repositorys: Repository<Calendario>;

    constructor(
        private repository: Repository<Calendario>
    ){
        this.repositorys = repository;
     }

     public async getCalendarios(){
         return await this.repositorys.find();

     }

     public async getCalendario(idCalendario: any){
        const result = await this.repositorys.findOne(idCalendario);
        if(result === undefined || result){
            throw { status: 404, message: 'Calendario not found' };

        }

        return result;
    }

    public async createCalendario(item: Calendario){
        const calendar = await this.repositorys.findOne(item.IdCalendario);
        if(calendar !== undefined && calendar){
            const result = this.repositorys.merge(calendar, item);
            await this.repositorys.save(result);

        }

        throw { status: 404, message: 'Calendario not found' };
    }

    public async deleteCalendario(idCalendario: any){
        const calendario = await this.repositorys.delete(idCalendario);
        if(calendario.affected === null){
            throw { status: 404, message: 'Calendario not found' };
        }

    }
}