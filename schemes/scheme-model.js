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
    return await db("schemes").where({ id }).first()
}

async function update(changes, id) {
    const [id] = await db("schemes").update(changes).where({ id })
}

async function remove(id) {
    await db("schemes").del().where({ id })
    return await db("schemes").where("schemes.scheme_id", id).first()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}