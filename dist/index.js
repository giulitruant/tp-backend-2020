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
var Empresa_controller_1 = require("./repositories/Empresa.controller");
var Empresa_route_1 = require("./controllers/Empresa.route");
var entity = new typeorm_1.Repository();
var repo = new Empresa_controller_1.EmpresaRepository(entity);
var service = new Empresa_service_1.EmpresaService(repo);
var controller = new Empresa_route_1.EmpresaRouter(service);
typeorm_1.createConnection();
var app = express_1.default();
//middlewars
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.get('/empresa', controller.findAll);
// routes
// app.use(empresaRouter.findAll, function(err: any, req: any, res: any, next: any){
//     if (res.headersSent) {
//         return next(err);
//       }
//       res.status(500);
//       res.render('error', { error: err });
// });
app.listen(3000);
console.log('Server on port', 3000);
