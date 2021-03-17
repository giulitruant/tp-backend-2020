import { Empresa } from '../entity/Empresa';
import { EmpresaRepository } from '../repositories/Empresa.repository';

export class EmpresaService{
    constructor(private repo: EmpresaRepository){
        this.getAll = this.getAll.bind(this);
        // this.getOne = this.getOne.bind(this);
        
    }

    public async getAll(){
        return await this.repo.getEmpresas();

    }

    // public async getOne(id: any){
    //     return await this.repo.getEmpresa(id);

    // }

    // public async create(body: Empresa){
    //     return await this.repo.createEmpresa(body);

    // }

    // public async update(body: Empresa){
    //     return await this.repo.updateEmpresa(body);

    // }

    // public async delete(id: any){
    //     return await this.repo.deleteEmpresa(id);
    // }

}