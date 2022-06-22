import style from './style.module.scss';


const Navigation = () => {
    const links = [
        {   
            id: 1,
            href: '#',
            text: 'About'
        },
        {   
            id: 2,
            href: '#',
            text: 'Services'
        },
        {   
            id: 3,
            href: '#',
            text: 'Pricing'
        },
        {   
            id: 4,
            href: '#',
            text: 'Blog'
        }
    ]
    return (
        <nav className={style.header__menu}>
            {
                links.map(link => <a className={style.link} key={link.id} href={link.href}>{link.text}</a>)
            }

        </nav>
    )
}
export default Navigation