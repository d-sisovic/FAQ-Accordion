import styles from './AccordionItem.module.scss';
import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';
import { IAccordionItemProps } from './ts/models/accordion-item-props.model';

const AccordionItem = ({ item, showLine, index, handleHeaderClick }: IAccordionItemProps) => {
    const onHeaderClick = () => handleHeaderClick(index);

    return <>
        <div className={styles.container}>
            <div className={`${styles.header} ${item.active ? styles['header--pb'] : ''}`} onClick={onHeaderClick}>
                <h1 className={`accordion__header ${styles['accordion__header']}`}>{item.heading}</h1>

                {!item.active && <img src={plusIcon} alt="plus" />}

                {item.active && <img src={minusIcon} alt="minus" />}
            </div>

            {item.active && <p className="accordion__text">{item.text}</p>}
        </div>

        {showLine && <div className="line"></div>}
    </>
};

export default AccordionItem;
