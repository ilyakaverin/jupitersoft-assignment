import cn from 'classnames';
import style from './style.module.scss';

interface ButtonProps {
  name: string
  click: (number:number) => void
  isDiabled: boolean
}

function Button({
  name, click, loadCount, isDisabled,
}:ButtonProps) {
  const handleClick = (): void => {
    click && click(loadCount);
  };

  return (
    <button
      className={cn(style.main__button, { [style.disabled]: isDisabled })}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default Button;
