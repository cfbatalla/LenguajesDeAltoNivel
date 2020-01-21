const conexion = require("../conexion")
module.exports = {
    async insertar(nombre, precio) {
        let resultados = await conexion.query(`insert into tb_user
        (username
        ,firstname
        ,lastname
        ,email)
        values
        ($1, $2,$3,$4)`, [username, firstname, lastname, email]);
        return resultados;
    },
    async obtener() {
        const resultados = await conexion.query("select id, firstname, lastname from tb_user");
        return resultados.rows;
    },
    async obtenerPorId(id) {
        const resultados = await conexion.query(`select id, firstname, lastname from tb_user where id = $1`, [id]);
        return resultados.rows[0];
    },
    async actualizar(id, nombre, precio) {
        const resultados = conexion.query(`update tb_user
        set firstname = $1,
        lastname = $2,
        where id = $3`, [firstname, lastname, id]);
        return resultados;
    },
    async eliminar(id) {
        const resultados = conexion.query(`delete from tb_user
        where id = $1`, [id]);
        return resultados;
    },
}
