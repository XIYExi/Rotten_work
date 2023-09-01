import {v4 as uuid} from 'uuid';

const data = [
    {
        id: uuid(),
        category: 'wrapper',
        title: {
            text: 'Features of CaLan'
        },
        desc: {
            text: 'We\'ve done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.'
        }
    },
    {
        id: uuid(),
        category: 'grid',
        child: [
            {
                id:uuid(),
                category: 'wrapper',
                title: {
                    text:'Engage Customers'
                },
                desc: {
                    text: 'A high quality solution beautifully designed for startups'
                }

            },
            {
                id: uuid(),
                category: 'wrapper',
                title: {
                    text: 'Team Accounts'
                },
                desc: {
                    text: 'A high quality solution beautifully designed for startups, A high quality solution beautifully designed for startups, A high quality solution beautifully designed for startups'
                }
            },
            {
                id: uuid(),
                category: 'wrapper',
                title: {
                    text: 'Email Marketing'
                },
                desc: {
                    text: 'A high quality solution beautifully designed for startups'
                }
            }
        ]
    }
]

export default data;
