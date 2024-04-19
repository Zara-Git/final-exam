const initialState = {
    status: 'All',
    colors: []
  }
  
  export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
      case 'filters/statusFilterChanged': {
        return {
          // Again, one less level of nesting to copy
          ...state,
          status: action.payload
        }
      }
      case 'filters/colorFilterChanged': { // Lägg till en ny case för färgändring
        return {
          ...state,
          colors: action.payload
        }
      }
      default:
        return state
    }
  }
  