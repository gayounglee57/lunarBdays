// action creators
let id = 0
export function addBday(name, day, existingId) {
    existingId = parseInt(existingId)
    let obj = {}
    if (existingId != 0) {
        obj = { type: 'ADD', id: existingId, name, day}
    }
    else {
        id += 1
        obj = { type: 'ADD', id, name, day}
    }
    return obj
}

export function deleteBday(id) {
    return { type: 'DELETE', id}
}