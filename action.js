// action creators
let id = 0
export function addBday(day) {
    id += 1
    return { type: 'ADD', id, day}
}

export function deleteBday(day) {
    return { type: 'DELETE', day}
}