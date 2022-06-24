import React, {
  useRef, SetStateAction, useState, useEffect,
} from 'react';
import style from './style.module.scss';
import { DatabaseElement } from '../../views/Main/service.ts';
import FilterButton from '../FilterButton/FilterButton.tsx';

interface Props {
  project: DatabaseElement,
  click: (argument: null | number) => void,
  isSelected: number,
  pressKey: () => void,
  action: SetStateAction<DatabaseElement[]>,
  filterClick: () => void
}

function ProjectItem({
  project, click, isSelected, pressKey, action, filterClick,
}:Props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const imageWebp = await import(`../../assets/${project.srcWebp}`).then((image) => image.default);
      const imagePng = await import(`../../assets/${project.srcPng}`).then((image) => image.default);

      setImages([imageWebp, imagePng]);
    };

    getImages();
  }, []);

  const divToFocus = useRef(null);

  const handleClick = () => {
    divToFocus.current.focus();
    if (isSelected === project.id) {
      click(null);
    } else {
      click(project.id);
    }
  };
  const onKeyPressed = (e) => {
    if (e.key === 'Delete') pressKey();
  };

  return (
    <div onKeyDown={onKeyPressed} tabIndex={0} ref={divToFocus} className={style.main__projectItem}>
      <picture>
        <source srcSet={images[0]} type="image/png" />
        <img
          className={isSelected === project.id ? style.selected : ''}
          onClick={handleClick}
          src={images[1]}
          alt={project.name}
        />
      </picture>

      <FilterButton
        classname="main__projectItem_filterButton"
        tag={project.tag}
        click={filterClick}
        action={action}
      />
      <span className={style.main__projectItem_name}>{project.name}</span>
    </div>
  );
}
export default ProjectItem;
