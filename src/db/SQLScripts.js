module.exports = {
    scriptInsertPerson: "INSERT INTO `persona` (`MUNICIPIO_ID`, `VIVIENDA_ID`, `PERSONA_NOMBRE`, `PERSONA_APELLIDO`, `PERSONA_SEXO`, `PERSONA_EDAD`, `PERSONA_TELEFONO`, PERSONA_RESPONSABLE) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    scriptGetViviendas: "SELECT MUNICIPIO_ID,VIVIENDA_ID,VIVIENDA_DIRECCION,VIVIENDA_CAPACIDAD,VIVIENDA_NIVELES FROM vivienda;",
    scriptGetPersonas: "SELECT p.MUNICIPIO_ID,p.VIVIENDA_ID,p.PERSONA_ID,p.PERSONA_NOMBRE,p.PERSONA_APELLIDO,p.PERSONA_SEXO,p.PERSONA_EDAD,p.PERSONA_TELEFONO,p.PERSONA_RESPONSABLE, CASE WHEN ed.PERSONA_ID IS NOT NULL THEN m.MUNICIPIO_NOMBRE ELSE '' END AS MUNICIPIO_DESPLAZAMIENTO FROM persona p LEFT JOIN es_desplazado ed ON p.PERSONA_ID = ed.PERSONA_ID LEFT JOIN municipio m ON ed.MUNICIPIO_ID = m.MUNICIPIO_ID;",
    scriptGetMunicipios: "SELECT m.DEPARTAMENTO_ID,m.MUNICIPIO_ID,m.MUNICIPIO_NOMBRE,m.MUNICIPIO_AREA,m.MUNICIPIO_PRESUPUESTO, COUNT(ed.persona_id) AS numero_desplazados FROM municipio m LEFT JOIN es_desplazado ed ON m.MUNICIPIO_ID = ed.MUNICIPIO_ID GROUP BY m.MUNICIPIO_ID, m.MUNICIPIO_NOMBRE;",
    scriptDeletePersona: "DELETE FROM `railway`.`persona` WHERE (`PERSONA_ID` = ?);",
    scriptDeleteRelacionDuenoVivienda: "DELETE FROM `persona_es_duena` WHERE (`VIVIENDA_ID` = ?)",
    scriptDeleteVivienda: "DELETE FROM `vivienda` WHERE (`VIVIENDA_ID` = ?);",
    scriptDeletePersonaEsDuena: "DELETE FROM `persona_es_duena` WHERE (`PERSONA_ID` = ?);",
    scriptEditPersona: "UPDATE `railway`.`persona` SET `MUNICIPIO_ID` = ?, `VIVIENDA_ID` = ?, `PERSONA_NOMBRE` = ?, `PERSONA_APELLIDO` = ?, `PERSONA_SEXO` = ?, `PERSONA_EDAD` = ?, `PERSONA_TELEFONO` = ?, `PERSONA_RESPONSABLE` = ? WHERE (`PERSONA_ID` = ?);",
    scriptEditVivienda: "UPDATE `railway`.`vivienda` SET `MUNICIPIO_ID` = ?, `VIVIENDA_DIRECCION` = ?, `VIVIENDA_CAPACIDAD` = ?, `VIVIENDA_NIVELES` = ? WHERE (`VIVIENDA_ID` = ?);",
    scriptGetDesplazados: "SELECT p.PERSONA_ID,p.PERSONA_NOMBRE,m.MUNICIPIO_NOMBRE AS municipio_desplazamiento FROM persona p INNER JOIN es_desplazado ed ON p.PERSONA_ID = ed.PERSONA_ID INNER JOIN municipio m ON ed.MUNICIPIO_ID = m.MUNICIPIO_ID;",
    scriptInsertDesplazado: "INSERT INTO `es_desplazado` (`MUNICIPIO_ID`, `PERSONA_ID`) VALUES (?,?);",
    scriptDeleteDesplazado: "delete from `railway`.`es_desplazado` where (MUNICIPIO_ID=?) AND PERSONA_ID=?;",
    scriptEditDesplazado: "update `railway`.`es_desplazado` set MUNICIPIO_ID=? WHERE MUNICIPIO_ID=? AND PERSONA_ID=?;"
}