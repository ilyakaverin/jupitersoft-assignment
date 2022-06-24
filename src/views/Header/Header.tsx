import React from 'react';
import style from './style.module.scss';
import { ReactComponent as Logo } from '../../assets/Frame.svg';
import Navigation from '../../components/Navigation/Navigation.tsx';

interface HeaderProps {
  name: string,
  description: string
}

function Header({ name, description }:HeaderProps) {
  return (
    <header className={style.header}>
      <div className={style.header__navigation}>
        <Logo />
        <Navigation />
        <button type="button" className={style.header__navigation_contact}>CONTACT</button>
      </div>
      <h1>{name}</h1>
      <span>{description}</span>
    </header>
  );
}
export default Header;
