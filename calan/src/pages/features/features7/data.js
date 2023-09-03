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
                text: 'Awesome Landing Template'
            },
            child: [
                {
                    id: uuid(),
                    category: 'flex',
                    child: [
                        {
                            id: uuid(),
                            category: 'wrapper',
                            icon: {
                                svg: <EmailSvg />
                            }
                        },
                        {
                            id: uuid(),
                            category: 'wrapper',
                            title: {
                                text: 'Engage Customers'
                            },
                            desc: {
                                text: 'A high quality solution beautifully designed for startups'
                            }
                        }
                    ]

                },
                {
                    id: uuid(),
                    category: 'flex',
                    child: [
                        {
                            id: uuid(),
                            category: 'wrapper',
                            icon: {
                                svg: <LockSvg />
                            }
                        },
                        {
                            id: uuid(),
                            category: 'wrapper',
                            title: {
                                text: 'Team Accounts'
                            },
                            desc: {
                                text: 'A high quality solution beautifully designed for startups'
                            }
                        }
                    ]

                },
                {
                    id: uuid(),
                    category: 'flex',
                    child: [
                        {
                            id: uuid(),
                            category: 'wrapper',
                            icon: {
                                svg: <UserSvg />
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
            ],
        }
    ],
    button: {
        text: 'Explore All Features'
    }
}


export default data;
