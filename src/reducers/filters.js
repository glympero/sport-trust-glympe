//Filters Reducer
const filtersReducerDefaultState = {
    sport: '',
    parentID: 0
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SPORT_FILTER':
            return {
                ...state,
                sport: action.sport
            };
            case 'SET_PARENT_ID_FILTER':
            return {
                ...state,
                parentID: Number(action.parentID)
            };
        default:
            return state;
    }
};

export default filtersReducer;