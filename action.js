// action creators

export function addBday(day) {
    // can give same id if in same milisecond
    const id = Date.now()
    return { type: 'ADD', id, day }
}

export function deleteBday(day) {
    return { type: 'DELETE', day}
}