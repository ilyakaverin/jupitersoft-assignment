import style from './style.module.scss';
import { ReactComponent as Logo } from '../../assets/Frame.svg';
// @ts-ignore
import Navigation from '../../components/Navigation/Navigation.tsx';

const Header = ({name, description}) => {
    return (
        <header className={style.header}>
            <div className={style.header__navigation}>
                <Logo />
                <Navigation />
                <button>CONTACT</button>
            </div>
            <h1>{name}</h1>
            <span>{description}</span>
        </header>
    )
}
export default Header