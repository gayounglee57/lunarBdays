// action creators
let id = 0
export function addBday(name, day) {
    id += 1
    return { type: 'ADD', id, name, day}
}

export function deleteBday(day) {
    return { type: 'DELETE', day}
}