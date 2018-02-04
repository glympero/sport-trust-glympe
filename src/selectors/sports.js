const getVisibleSports = (sports, filters) => {
    const { sport } = filters;
    return sports.filter(sp => {
        const sportMatched = typeof sport === 'string' && sp.name.toLowerCase().indexOf(sport.toLowerCase()) !== -1;
        return sportMatched;
    });
};

export default getVisibleSports;