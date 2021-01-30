import { Repository } from 'typeorm'
import { Calendario } from '../entity/Calendario'

export class CalendarioRepository{
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
        if(calendar !== undefined){
            throw { status: 404, message: 'Calendario not found' };

        }
        const result = await this.repositorys.create(item);
        await this.repositorys.save(result);

        
    }

    public async updateCalendario(item: Calendario){
        const calendar = await this.repositorys.findOne(item.IdCalendario);
        if(calendar === undefined){
            throw { status: 404, message: 'Calendario not found' };
            
        }
        const result = await this.repositorys.merge(calendar, item);
        await this.repositorys.save(result);
        
    }

    public async deleteCalendario(idCalendario: any){
        const calendario = await this.repositorys.delete(idCalendario);
        if(calendario.affected === null){
            throw { status: 404, message: 'Calendario not found' };
        }

    }
}