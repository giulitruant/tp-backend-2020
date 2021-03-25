import { getRepository, Repository } from 'typeorm'
import { Empresa } from '../entity/Empresa'

export class EmpresaRepository{    

    constructor(
        private repository: Repository<Empresa>
    ){        
        this.getEmpresas = this.getEmpresas.bind(this);        
     }

    public async getEmpresas(): Promise<Empresa[]> {
        // const result = await getRepository(Empresa)
        // .createQueryBuilder("user").getMany();

        var companies = await Empresa.find();
        
        return companies;
        
    }

    public async getEmpresa(cuit: any){
        const result = await Empresa.findOne(cuit);
        if(result === undefined){
            throw { status: 404, message: 'Empresa wasnt create' };
        }

        return result;

    }

    public async createEmpresa(emp: Empresa){
        const empresa = await Empresa.create(emp);
        const InsertedEmpresa = await Empresa.save(empresa);
        if(InsertedEmpresa == undefined){
            throw { status: 404, message: 'Empresa not found' };
        }

        return InsertedEmpresa;
    }

    public async updateEmpresa(emp: Empresa){
        const empresa = await Empresa.findOne(emp.Cuit);
        
        if (empresa === undefined) {
            throw { status: 404, message: 'Empresa not found' };            
            
        }
        const result = await Empresa.merge(empresa, emp);
        await Empresa.save(result);
    
    }

    public async deleteEmpresa(cuit: any){
        const emp = await Empresa.delete(cuit);
        if(emp.affected === null){
            throw { status: 404, message: 'Empresa not found' };
        }
    }
}