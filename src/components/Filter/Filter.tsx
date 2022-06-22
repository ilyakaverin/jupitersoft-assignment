import style from './style.module.scss';


const Filter = ({tags}) => {


    return (
        <div className={style.main__filter}>
                {
                    tags.map(tag => <span>{tag}</span>)
                }
        </div>
    )

}
export default Filter