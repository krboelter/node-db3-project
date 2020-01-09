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

async function add(scheme) {
    const [id] = await db("schemes").insert(scheme)
    return db("schemes").where({ id })
}

async function update(changes, id) {
    await db("schemes").where({ id }).update(changes);
    return db("schemes").where({ id })
}

async function remove(id) {
    const toDelete = await db("schemes").where({ id })
    await db("schemes").del().where({ id })
    return toDelete
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}