"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var Parada_controller_1 = require("../controller/Parada.controller");
router.get('./Paradas', Parada_controller_1.getParadas);
router.get('./Paradas/:id', Parada_controller_1.getParada);
router.post('./Paradas', Parada_controller_1.createParada);
router.put('./Paradas', Parada_controller_1.updateParada);
router.delete('./Paradas', Parada_controller_1.deleteParada);
exports.default = router;