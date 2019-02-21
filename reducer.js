// reducers

export default function reducer(state = [], action) {
    switch(action.type) {
      case 'ADD' :
        return [
          ...state,
          {
            id: action.id,
            day: action.day,
          }
        ]
      case 'DELETE' :
        // may want to filter by id instead? 
        // Cos otherwise, gets rid of birthdays of everyone who have same bday
        return state.filter(item => item.day != action.day)
      default:
        return state
    }
  }