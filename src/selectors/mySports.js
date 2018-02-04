const getVisibleMySports = (sports, filters) => {
    
    const { parentID } = filters;
    return sports.filter(sport => {
        const sportMatched = typeof parentID === 'number' && sport.parent === parentID;
        return sportMatched;
    });
};

export default getVisibleMySports;