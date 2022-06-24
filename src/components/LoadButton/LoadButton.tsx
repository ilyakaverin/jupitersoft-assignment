import style from './style.module.scss';
import cn from 'classnames';

const Button = ({name, click, loadCount, isDisabled}) => {
  const handleClick = (): void => {
    click && click(loadCount);
  };

  return (
    <button
      className={cn(style.main__button, {[style.disabled]: isDisabled})}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
