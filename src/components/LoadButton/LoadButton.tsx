import React from 'react';
import cn from 'classnames';
import style from './style.module.scss';

interface ButtonProps {
  name: string
  click: (number:number) => void
  isDisabled: boolean
  loadCount: number
}

function Button({
  name, click, loadCount, isDisabled,
}:ButtonProps) {
  const handleClick = (): void => click && click(loadCount);

  return (
    <button
      type="button"
      className={cn(style.mainButton, { [style.disabled]: isDisabled })}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default Button;
