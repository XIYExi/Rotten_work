import {v4 as uuid} from 'uuid';
import {ReactComponent as ShopSvg} from '../../../assets/images/features/features2-shop.svg';
import {ReactComponent as EmailSvg} from '../../../assets/images/features/features2-email.svg';
import {ReactComponent as GroupSvg} from '../../../assets/images/features/features2-group.svg';

const data = [
    {
        id: uuid(),
        category: 'wrapper',
        title: {
            text: 'Calan Landing Page Kit'
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
                icon: <ShopSvg />,
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
                icon: <GroupSvg />,
                title: {
                  text: 'Team Accounts'
                },
                desc: {
                    text: 'A high quality solution beautifully designed for startups'
                }
            },
            {
                id: uuid(),
                category: 'wrapper',
                icon: <EmailSvg/>,
                title: {
                  text: 'Email Marketing'
                },
                desc: {
                    text: 'A high quality solution beautifully designed for startups'
                }
            }
        ]
    },
    {
        id: uuid(),
        category: 'button',
        title: {
            text: 'Explore All Features'
        }
    }
]

export default data;
