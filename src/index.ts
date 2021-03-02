import 'reflect-metadata';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { createConnection, Repository } from 'typeorm'

import { EmpresaService } from './services/Empresa.service';
import { EmpresaRepository } from './repositories/Empresa.repository';
import { Empresa } from './entity/Empresa';
import { EmpresaController } from './controllers/Empresa.controller';

import { LineaColectivoService } from './services/LineaColectivo.service';
import { LineaColectivoRepository } from './repositories/LineaColectivo.repository';
import { LineaColectivo } from './entity/LineaColectivo';
import { LineaColectivoController } from './controllers/LineaColectivo.controller';

import { ParadaService } from './services/Parada.service';
import { ParadaColectivoRepository } from './repositories/Parada.repository';
import { Parada } from './entity/Parada';
import { ParadaController } from './controllers/Parada.controller';

import { RecorridoService } from './services/Recorrido.service';
import { RecorridoRepository } from './repositories/Recorrido.repository';
import { Recorrido } from './entity/Recorrido';
import { RecorridoController } from './controllers/Recorrido.controller';

import { ChoferService } from './services/Chofer.service';
import { ChoferRepository } from './repositories/Chofer.repository';
import { Chofer } from './entity/Chofer';
import { ChoferController } from './controllers/Chofer.controller';

import { CalendarioService } from './services/Calendario.service';
import { CalendarioRepository } from './repositories/Calendario.repository';
import { Calendario } from './entity/Calendario';
import { CalendarioController } from './controllers/Calendario.controller';

const empresaEntity = new Repository<Empresa>();
const empresaRepo = new EmpresaRepository(empresaEntity);
const empresaService = new EmpresaService(empresaRepo);
const empresaController = new EmpresaController(empresaService);

const lineaEntity = new Repository<LineaColectivo>();
const lineaRepo = new LineaColectivoRepository(lineaEntity);
const lineaService = new LineaColectivoService(lineaRepo);
const lineaController = new LineaColectivoController(lineaService);

const paradaEntity = new Repository<Parada>();
const paradaRepo = new ParadaColectivoRepository(paradaEntity);
const paradaService = new ParadaService(paradaRepo);
const paradaController = new ParadaController(paradaService);

const recorridoEntity = new Repository<Recorrido>();
const recorridoRepo = new RecorridoRepository(recorridoEntity);
const recorridoService = new RecorridoService(recorridoRepo);
const recorridoController = new RecorridoController(recorridoService);

const choferEntity = new Repository<Chofer>();
const choferRepo = new ChoferRepository(choferEntity);
const choferService = new ChoferService(choferRepo);
const choferController = new ChoferController(choferService);

const calendarioEntity = new Repository<Calendario>();
const calendarioRepo = new CalendarioRepository(calendarioEntity);
const calendarioService = new CalendarioService(calendarioRepo);
const calendarioController = new CalendarioController(calendarioService);


createConnection();

const app = express()

//middlewars
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/empresa', empresaController.getAll);
app.get('/empresa/:cuit', empresaController.getOne);
app.post('/empresa', empresaController.create);
app.put('/empresa', empresaController.update);
app.delete('/empresa/:cuit', empresaController.delete);

app.get('/linea', lineaController.getAll);
app.get('/linea/:idLineaColectivo', lineaController.getOne);
app.post('/linea', lineaController.create);
app.put('/linea', lineaController.update);
app.delete('/linea/:idLineaColectivo', lineaController.delete);

app.get('/parada', paradaController.getAll);
app.get('/parada/:nroParada', paradaController.getOne);
app.post('/parada', paradaController.create);
app.put('/parada', paradaController.update);
app.delete('/parada/:nroParada', paradaController.delete);

app.get('/recorrido', recorridoController.getAll);
app.get('/recorrido/:idRecorrido', recorridoController.getOne);
app.post('/recorrido', recorridoController.create);
app.put('/recorrido', recorridoController.update);
app.delete('/recorrido/:idRecorrido', recorridoController.delete);

app.get('/chofer', choferController.getAll);
app.get('/chofer/:cuil', choferController.getOne);
app.post('/chofer', choferController.create);
app.put('/chofer', choferController.update);
app.delete('/chofer/:cuil', choferController.delete);

app.get('/calendario', calendarioController.getAll);
app.get('/calendario/:idCalendario', calendarioController.getOne);
app.post('/calendario', calendarioController.create);
app.put('/calendario', calendarioController.update);
app.delete('/calendario/:idCalendario', calendarioController.delete);

app.listen(3000);
console.log('Server on port', 3000);