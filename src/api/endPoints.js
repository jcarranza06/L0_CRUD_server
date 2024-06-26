const express = require('express');
const router = express.Router();

const { userRegistration } = require('../controllers/userRegistration')
const { getMunicipios } = require('../controllers/getMunicipios')
const { getViviendas } = require('../controllers/getViviendas')
const { insertPersona } = require('../controllers/insertPersona')
const { getPersonas } = require('../controllers/getPersonas')
const { deletePersona } = require('../controllers/deletePersona')
const { insertVivienda } = require('../controllers/insertVivienda')
const { deleteVivienda } = require('../controllers/deleteVivienda')
const { getDepartamentos } = require('../controllers/getDepartamentos')
const { editPersona } = require('../controllers/editPersona')
const { editVivienda} = require('../controllers/editVivienda')
const { getDesplazados } = require('../controllers/getDesplazados')
const { insertDesplazado } = require('../controllers/insertDesplazado')
const { deleteDesplazado } = require('../controllers/deleteDesplazado')
const { editDesplazado } = require('../controllers/editDesplazado')

router.get('/getMunicipios', getMunicipios);
router.get('/getViviendas', getViviendas);
router.get('/getPersonas', getPersonas);
router.get('/getDepartamentos', getDepartamentos);
router.get('/getDesplazados', getDesplazados);

router.post('/userRegistration', userRegistration);
router.post('/insertPersona', insertPersona);
router.post('/deletePersona', deletePersona);
router.post('/insertVivienda', insertVivienda);
router.post('/deleteVivienda', deleteVivienda);
router.post('/editPersona', editPersona);
router.post('/editVivienda', editVivienda);
router.post('/insertDesplazado', insertDesplazado);
router.post('/deleteDesplazado', deleteDesplazado);
router.post('/editDesplazado', editDesplazado);

module.exports = router;