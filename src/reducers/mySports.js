const mySportsReducerDefaultState = [];

const mySportsReducer = (state = mySportsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MY_SPORT':
            return [...state, action.sport ];
        case 'REMOVE_MY_SPORT':
            return state.filter(sport => sport.id !== action.id && sport.parent === action.parentID || sport.parent !== action.parentID);
        case 'EDIT_MY_SPORT':
            return state.map(sport => {
                if(sport.id === action.id) {
                    return {
                        ...sport,
                        ...action.updates
                    }
                }
                return sport;
            });
        default:
            return state;
    }
};

export default mySportsReducer;