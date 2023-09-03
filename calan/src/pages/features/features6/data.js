import {v4 as uuid} from 'uuid';
import {ReactComponent as EmailSvg} from '../../../assets/images/features/features6-email.svg';
import {ReactComponent as LockSvg} from '../../../assets/images/features/features6-lock.svg';
import {ReactComponent as UserSvg} from '../../../assets/images/features/features6-user.svg';

const data = {
    id: uuid(),
    category: 'grid',
    child: [
        {
            id: uuid(),
            category: 'wrapper',
            title: {
                text: 'The Best Awesome Startup Landing Template'
            },
            desc: {
                text: 'We\'ve done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.'
            },
            button: {
                text: 'Get Started'
            }
        },
        {
            id: uuid(),
            category: 'wrapper',
            child: [
                {
                    id: uuid(),
                    category: 'flex',
                    icon: {
                        svg: <EmailSvg />
                    },
                    title: {
                        text: 'Email Marketing'
                    },
                    desc: {
                        text: 'A high quality solution beautifully designed for startups'
                    }

                },
                {
                    id: uuid(),
                    category: 'flex',
                    icon: {
                        svg: <LockSvg />
                    },
                    title: {
                        text: 'Security Managment'
                    },
                    desc: {
                        text: 'A high quality solution beautifully designed for startups'
                    }
                },
                {
                    id: uuid(),
                    category: 'flex',
                    icon: {
                        svg: <UserSvg />
                    },
                    title: {
                        text: 'User Administration'
                    },
                    desc: {
                        text: "A high quality solution beautifully designed for startups"
                    }
                }
            ],
            button: {
                text: 'Explore All Features'
            }
        }
    ]
}


export default data;
