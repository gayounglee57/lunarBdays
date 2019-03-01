// reducers for adding/editing and deleting bdays

export default function reducer(state = [], action) {
    switch(action.type) {
      case 'ADD' :
        state = state.filter(item => item.id != action.id)
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            day: action.day,
          }
        ]
      case 'DELETE' :
        return state.filter(item => item.id != action.id)
      default:
        return state
    }
  }