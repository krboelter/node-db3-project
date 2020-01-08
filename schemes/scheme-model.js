const db = require("../data/db-config")

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({ id }).first()
}

function findSteps(id) {
    return db("schemes as s")
        .select("st.id", "s.scheme_name", "st.step_number", "st.instructions")
        .join("steps as st", "s.id", "st.scheme_id")
        .where("s.id", id)
}

function addScheme(shceme) {

}

function update(changes, id) {

}

function remove(id) {

}

module.exports = {
    find,
    findById,
    findSteps,
    addScheme,
    update,
    remove
}