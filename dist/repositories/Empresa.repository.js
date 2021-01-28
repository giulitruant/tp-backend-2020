"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaRepository = void 0;
var typeorm_1 = require("typeorm");
var Empresa_1 = require("../entity/Empresa");
var EmpresaRepository = /** @class */ (function () {
    function EmpresaRepository(repository) {
        this.repository = repository;
        this.repositorys = repository;
    }
    EmpresaRepository.prototype.getEmpresas = function () {
        // return this.repositorys.createQueryBuilder()
        //     .select("empresa")
        //     .from(Empresa, "empresa").getMany();
        return typeorm_1.getRepository(Empresa_1.Empresa).find();
    };
    EmpresaRepository.prototype.getEmpresa = function (cuit) {
        var empresa = typeorm_1.getRepository(Empresa_1.Empresa).findOne(cuit);
    };
    return EmpresaRepository;
}());
exports.EmpresaRepository = EmpresaRepository;
// export const getEmpresa = async (req: Request, res: Response): Promise<Response> => {
//     try {
//         const empresa = await getRepository(Empresa).findOne(req.params.cuit);
//         if (empresa !== undefined) {
//             return res.status(200).json(empresa);
//         }
//         return res.status(204).send({ Message: 'Empresa not found' });
//     } catch (error) {
//         return res.status(400).json(error);
//     }
// }
// export const createEmpresa = async (req: Request, res: Response): Promise<Response> => {
//     try {
//         const nuevaEmpresa = await getRepository(Empresa).create(req.body);
//         const empre = await getRepository(Empresa).save(nuevaEmpresa);
//         if (empre !== undefined && empre) {
//             return res.status(200).json(empre);
//         } else {
//             return res.status(204).send(empre);
//         }
//     } catch (error) {
//         return res.status(400).send({ Message: 'Error al crear la empresa' });
//     }
// }
// export const updateEmpresa = async (req: Request, res: Response): Promise<Response> => {
//     try {        
//         const empresa = await getRepository(Empresa).findOne(req.body.Cuit);        
//         if (empresa !== undefined && empresa) {
//             getRepository(Empresa).merge(empresa, req.body);
//             const result = await getRepository(Empresa).save(empresa);
//             return res.json(result);
//         } else {
//             return res.status(204).send({ message: 'Empresa not found' });
//         }
//     } catch (error) {
//         return res.status(400).send({ message: 'Error al actualizar la empresa' });
//     }
// }
// export const deleteEmpresa = async (req: Request, res: Response): Promise<Response> => {
//     try {
//         const result = await getRepository(Empresa).delete(req.params.cuit);
//         if(result !== undefined && result){
//             return res.status(200).json(result);
//         } else{
//             return res.status(204).send({Message : 'Empresa not found'});
//         }
//     } catch (error) {
//         return res.status(400).send({Message: 'Error al eliminar la empresa'});
//     }
// }
