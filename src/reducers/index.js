const initialState = {
    notes: [
        {
            id: 1,
            title: 'Dokąd nocą tupta jeż?',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
        },
        {
            id: 2,
            title: 'Como es An Gular?',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
        },
        {
            id: 3,
            title: 'Du bist Reactish?',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '5 days',
        },
        {
            id: 4,
            title: 'Reactuj się kto moze!',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '10 days',
        },
    ],
    articles: [
        {
            id: 1,
            title: 'React on my mind',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/helloroman',
            created: '1 day',
        },
        {
            id: 2,
            title: 'Wish you React',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/helloroman',
            created: '1 day',
        },
        {
            id: 3,
            title: 'You gave React a bad name',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/helloroman',
            created: '5 days',
        },
        {
            id: 4,
            title: 'Is it React you looking for?',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/helloroman',
            created: '10 days',
        },
    ],
    twitters: [
        {
            id: 1,
            title: 'Hello Roman',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
            twitterName: 'hello_roman',
        },
        {
            id: 2,
            title: 'Czy warto było szalec tak?',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
            twitterName: 'dan_abramov',
        },
        {
            id: 3,
            title: 'Afera z żydkami w tle',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '5 days',
            twitterName: 'mjackson',
        },
        {
            id: 4,
            title: 'Super animacje!',
            content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '10 days',
            twitterName: 'sarah_edo',
        },
    ],
};

const rootReducer = (state = initialState) => {
    return state;
};

export default rootReducer;
