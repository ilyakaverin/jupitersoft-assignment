import React from 'react';
import style from './style.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import logo from '../../assets/frame.svg'

interface HeaderProps {
  name: string,
  description: string
}

function Header({ name, description }:HeaderProps) {
  return (
    <header className={style.header}>
      <div className={style.header__navigation}>
        <img src={logo} alt="logo" />
        <Navigation />
        <button type="button" className={style.header__navigation_contact}>CONTACT</button>
      </div>
      <h1>{name}</h1>
      <span>{description}</span>
    </header>
  );
}
export default Header;
