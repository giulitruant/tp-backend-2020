"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaService = void 0;
var EmpresaService = /** @class */ (function () {
    function EmpresaService(repo) {
        this.repo = repo;
        this.findAll = this.findAll.bind(this);
    }
    EmpresaService.prototype.findAll = function () {
        return this.repo.getEmpresas();
    };
    return EmpresaService;
}());
exports.EmpresaService = EmpresaService;
