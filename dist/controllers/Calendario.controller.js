"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarioController = void 0;
// import { Router } from 'express'
// const router = Router()
var CalendarioController = /** @class */ (function () {
    function CalendarioController(service) {
        this.service = service;
    }
    CalendarioController.prototype.getAll = function (req, res, next) {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var calendarios;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getAll()];
                    case 1:
                        calendarios = _a.sent();
                        return [2 /*return*/, res.send(200).json(calendarios)];
                }
            });
        }); })().catch(next);
    };
    CalendarioController.prototype.getOne = function (req, res, next) {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var calendario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getOne(req.params.IdCalendario)];
                    case 1:
                        calendario = _a.sent();
                        return [2 /*return*/, res.send(200).json(calendario)];
                }
            });
        }); })().catch(next);
    };
    CalendarioController.prototype.create = function (req, res, next) {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.create(req.body)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.send(200)];
                }
            });
        }); })().catch(next);
    };
    CalendarioController.prototype.update = function (req, res, next) {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.update(req.body)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.send(200)];
                }
            });
        }); })().catch(next);
    };
    CalendarioController.prototype.delete = function (req, res, next) {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.delete(req.params.IdCalendario)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.send(200)];
                }
            });
        }); })().catch(next);
    };
    return CalendarioController;
}());
exports.CalendarioController = CalendarioController;
// import { getCalendarios, getCalendario, createCalendario, updateCalendario, deleteCalendario } from '../repositories/Calendario.repository'
// router.get('/calendario', getCalendarios);
// router.get('/calendario/:IdCalendario', getCalendario);
// router.put('/calendario', updateCalendario);
// router.post('/calendario', createCalendario);
// router.delete('/calendario/:IdCalendario', deleteCalendario);
// export default router
