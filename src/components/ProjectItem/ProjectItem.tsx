import React, {
  useRef, useState, useEffect,
} from 'react';
import style from './style.module.scss';
import { DatabaseElement } from '../../views/Main/service';
import FilterButton from '../FilterButton/FilterButton';

interface Props {
  project: DatabaseElement,
  click: (argument: null | number) => void,
  isSelected: number,
  pressKey: () => void,
  action: React.Dispatch<DatabaseElement[]>,
  filterClick: (tag: string, action) => void
}

function ProjectItem({
  project, click, isSelected, pressKey, action, filterClick,
}:Props) {
  const [images, setImages] = useState<[string, string] | null>(null);

  useEffect(() => {
    const getImages = async () => {
      const imageWebp: string = await import(`../../assets/${project.srcWebp}`).then((image) => image.default);
      const imagePng: string = await import(`../../assets/${project.srcPng}`).then((image) => image.default);

      setImages([imageWebp, imagePng]);

    };
    getImages();
  }, [project.srcPng, project.srcWebp]);
 

  const divToFocus = useRef(null);

  const handleClick = () => {
    divToFocus.current.focus();
    if (isSelected === project.id) {
      click(null);
    } else {
      click(project.id);
    }
  };
  const onKeyPressed = (e):void => {
    if (e.key === 'Delete') pressKey();
  };

  return (
    <div onKeyDown={onKeyPressed} tabIndex={0} ref={divToFocus} className={style.main__projectItem}>
    {
      images ?   <picture>
      <source srcSet={images[0]} type="image/png" />
        <img
          className={isSelected === project.id ? style.selected : ''}
          onClick={handleClick}
          src={images[1]}
          alt={project.name}
        />
      </picture> : ''
    }

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
