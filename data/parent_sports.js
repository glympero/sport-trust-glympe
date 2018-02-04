export default [
    {
        id: '1',
        name: 'Dinghy',
        parent: 0,
        icon: 'default.png',
        desc: 'Description text under name and icon',
        levels: []
    },
    {
        id: 2,
        name: 'KiteSurf',
        parent: 0,
        icon: 'default.png',
        desc: 'Description text under name and icon',
        levels: []
    },
    {
        id: '3',
        name: 'Big Boats',
        parent: 0,
        icon: 'default.png',
        desc: 'Description text under name and icon',
        levels: [
            {
                id: 1,
                name: 'Academy',
                icon: 'acedemy.png'
              },
              {
                id: 2,
                name: 'Racing',
                icon: 'racing.png'
              }
        ]
    }
];