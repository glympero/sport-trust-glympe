const sportsReducerDefaultState = [];

const sportsReducer = (state = sportsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SPORT':
            return [...state, action.sport ];
        default:
            return state;
    }
};

export default sportsReducer;