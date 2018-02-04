const setSportFilter = (sport = '') => ({
    type: 'SET_SPORT_FILTER',
    sport
});

const setParentIDFilter = (parentID = 0) => ({
    type: 'SET_PARENT_ID_FILTER',
    parentID
});

export { setSportFilter, setParentIDFilter};