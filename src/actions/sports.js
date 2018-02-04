
const addSport = (
    { 
        id=1,
        name = '', 
        parent = 0, 
        icon= '', 
        desc = '',
        levels= []
    } = {}
) => ({
    type: 'ADD_SPORT',
    sport: {
        id,
        name,
        parent,
        icon,
        desc,
        levels
    }
});

export { addSport };
