import 'reflect-metadata';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { createConnection, Repository } from 'typeorm'

import { EmpresaService } from './services/Empresa.service';
import { EmpresaRepository } from './repositories/Empresa.repository';
import { Empresa } from './entity/Empresa';
 import { EmpresaRouter } from './controllers/Empresa.controller';

const entity = new Repository<Empresa>();
const repo = new EmpresaRepository(entity);
const service = new EmpresaService(repo);
const controller = new EmpresaRouter(service);

createConnection();

const app = express()

//middlewars
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/empresa', controller.getAll);
app.get('/empresa/:cuit', controller.getOne);
app.get('/empresa', controller.create);
app.get('/empresa', controller.update);
app.get('/empresa/:cuit', controller.delete);

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