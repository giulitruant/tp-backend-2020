import { EmpresaRepository } from '../repositories/Empresa.repository';

export class EmpresaService{
    constructor(private repo: EmpresaRepository){
        this.findAll = this.findAll.bind(this);
        
    }

    public findAll(){
        return this.repo.getEmpresas();
    }

}