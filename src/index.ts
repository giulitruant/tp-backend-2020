import 'reflect-metadata';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { createConnection, Repository } from 'typeorm'

import { EmpresaService } from './services/Empresa.service';
import { EmpresaRepository } from './repositories/Empresa.repository';
import { Empresa } from './entity/Empresa';
import { EmpresaController } from './controllers/Empresa.controller';

const empresaEntity = new Repository<Empresa>();
const empresaRepo = new EmpresaRepository(empresaEntity);
const empresaService = new EmpresaService(empresaRepo);
const empresaController = new EmpresaController(empresaService);

createConnection();

const app = express()

//middlewars
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/empresa', empresaController.getAll);
app.get('/empresa/:cuit', empresaController.getOne);
app.get('/empresa', empresaController.create);
app.get('/empresa', empresaController.update);
app.get('/empresa/:cuit', empresaController.delete);

app.listen(3000);
console.log('Server on port', 3000);