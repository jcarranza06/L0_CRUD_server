const dbConnection = require('../db/dbConnection')
const SQLScripts = require('../db/SQLScripts')

module.exports.deleteDesplazado = (req, res) => {

    const MUNICIPIO_ID = req.body.MUNICIPIO_ID;
    const PERSONA_ID = req.body.PERSONA_ID;
    console.log(PERSONA_ID);

    const consulta = SQLScripts.scriptDeleteDesplazado
    
    

    deleteDesplazado = () => {
        dbConnection.query(consulta, [MUNICIPIO_ID,PERSONA_ID], (err, results) => {
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

    deleteDesplazado()
}