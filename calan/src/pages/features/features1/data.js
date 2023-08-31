import {ReactComponent as EmailSvg} from "../../../assets/images/features/features1-email.svg";
import {ReactComponent as LockSvg} from "../../../assets/images/features/features1-lock.svg";
import {ReactComponent as UserSvg} from "../../../assets/images/features/features1-user.svg";
import {v4 as uuid} from 'uuid';

const data = [
    {
        id: uuid(),
        category: 'wrapper',
        title: {
            text: 'The Best Awesome Startup Landing Template',
        },
    },
    {
        id: uuid(),
        category: 'grid',
        child: [
            {
                id: uuid(),
                category: 'wrapper',
                icon: <EmailSvg />,
                title: {
                    text: 'Email Marketing',
                },
                desc: {
                    text: 'We\'ve done it carefully and simply. Combined with the ingredients makes for beautiful landings.'
                },
            },
            {
                id: uuid(),
                category: 'wrapper',
                icon: <LockSvg />,
                title: {
                    text: 'Security Managment'
                },
                desc: {
                    text: 'We\'ve done it carefully and simply. Combined with the ingredients makes for beautiful landings.'
                },
            },
            {
                id: uuid(),
                category: 'wrapper',
                icon: <UserSvg />,
                title: {
                    text: 'User Administration'
                },
                desc: {
                    text: 'We\'ve done it carefully and simply. Combined with the ingredients makes for beautiful landings.'
                },
            },
        ]
    }
]

export default data;
