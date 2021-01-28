import { getRepository, createQueryBuilder, Repository } from 'typeorm'
import { Chofer } from '../entity/Chofer'

export class ChoferReposiitory{
    private repositorys: Repository<Chofer>;

    constructor(
        private repository: Repository<Chofer>
    ){
        this.repositorys = repository;
    }

    public async getChoferes(){
        return await getRepository(Chofer).find();

    }

    public async getChofer(cuil: any){
        const chofer = await this.repositorys.createQueryBuilder('Chofer')
        .leftJoinAndSelect('Chofer.lineaColectivo', 'LineaColectivo')
        .where('Chofer.Cuil = :Cuil', {Cuil: cuil})
        .getOne();

        if(chofer === undefined){
            throw { status: 404, message: 'Calendario not found' };

        }

        return chofer;

    }

    public async createChofer(item: Chofer){
        const chofer = this.repositorys.findOne(item);
        if(chofer === undefined){
            throw { status: 404, message: 'Calendario do not Created' };
            
        }

        const result = await this.repositorys.create(item);
        return await this.repositorys.save(result);

    }

    public async updateChofer(item: Chofer){
        const chofer = await getRepository(Chofer).findOne(item);
        if(chofer === undefined){
            throw { status: 404, message: 'Calendario not found' };
        }

        const result = this.repositorys.merge(chofer, item);
        this.repositorys.save(result);

    }

    public async deleteChofer(cuil: any){
        const result = await this.repositorys.delete(cuil);
        if(result.affected === null){
            throw { status: 404, message: 'Calendario not found' };

        }
    }
}