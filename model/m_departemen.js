const db = require('../config/database').db

async function get_all() {
    try {
        let hasil = await db.query(
            `SELECT * FROM departemen
            ORDER BY nama ASC`
        )
        return hasil.rows
    } catch (error) {
        return error
    }
}



module.exports = {
    get_all
}