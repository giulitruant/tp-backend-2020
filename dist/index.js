"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var Empresa_service_1 = require("./services/Empresa.service");
var Empresa_repository_1 = require("./repositories/Empresa.repository");
var Empresa_controller_1 = require("./controllers/Empresa.controller");
var empresaEntity = new typeorm_1.Repository();
var empresaRepo = new Empresa_repository_1.EmpresaRepository(empresaEntity);
var empresaService = new Empresa_service_1.EmpresaService(empresaRepo);
var empresaController = new Empresa_controller_1.EmpresaController(empresaService);
typeorm_1.createConnection();
var app = express_1.default();
//middlewars
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.get('/empresa', empresaController.getAll);
app.listen(3000);
console.log('Server on port', 3000);
