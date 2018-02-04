import uuid from 'uuid';
const addMySport = (
    {
        id=uuid(),
        name = '', 
        parent = 1, 
        icon= 'default.jpg', 
        desc = 'no description',
        levels= []
    } = {}
) => ({
    type: 'ADD_MY_SPORT',
    sport: {
        id,
        name,
        parent,
        icon,
        desc,
        levels
    }
});

const removeMySport = ({ id, parentID } = {}) => ({
    type: 'REMOVE_MY_SPORT',
    id,
    parentID
});

const editMySport = (id, updates) => ({
    type: 'EDIT_MY_SPORT',
    id,
    updates
});

export { addMySport, removeMySport, editMySport };
