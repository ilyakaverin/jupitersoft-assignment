import style from './style.module.scss';
// @ts-ignore
import {links} from '../../service.ts';

const Navigation = () => {
  return (
    <nav className={style.header__menu}>
      {links.map(link => (
        <a className={style.link} key={link.id} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
};
export default Navigation;
