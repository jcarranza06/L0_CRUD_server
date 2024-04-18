const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.editDesplazado = (req, res) => {

    const PERSONA_ID = req.body.PERSONA_ID;
    const MUNICIPIO_ID_NUEVO = req.body.MUNICIPIO_ID_NUEVO;
    const MUNICIPIO_ID_VIEJO = req.body.MUNICIPIO_ID_VIEJO;
    

    console.log(PERSONA_ID);

    const consulta = SQLScripts.scriptEditDesplazado

    editDesplazado = () => {
        
        dbConnection.query(consulta, [MUNICIPIO_ID_NUEVO, MUNICIPIO_ID_VIEJO, PERSONA_ID], (err, results) => {
            if (err) {
                console.log(err)
                res.send({ statusCode: 400, message: "wrong data" })
            } else {
                if (results) {
                    console.log(results)
                    res.json({ statusCode: 200, message: "success", data: results })
                } else {
                    res.json({ statusCode: 400, message: "wrong data" })
                }
            }
        })
    }

    editDesplazado()
}