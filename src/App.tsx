import styles from './App.module.scss';
import { accordionData } from './utils/data';
import AccordionItem from './components/AccordionItem';
import iconStarSvg from './assets/images/icon-star.svg';
import { IAccordionItem } from './ts/models/accordion-item.model';
import { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import backgroundImageMobile from './assets/images/background-pattern-mobile.svg';
import backgroundImageDesktop from './assets/images/background-pattern-desktop.svg';

const calculateArrowUpIndex = (activeIndex: number) => {
  return activeIndex === 0 ? accordionData.length - 1 : activeIndex - 1;
};

const calculateArrowDownIndex = (activeIndex: number) => {
  return activeIndex === accordionData.length - 1 ? 0 : activeIndex + 1;
};

const App = () => {
  const [accordionItems, setAccordionItems] = useState<IAccordionItem[]>(accordionData);

  const handleHeaderClick = (selectedIndex: number) => {
    setAccordionItems(accordionItems => accordionItems.map((item, index) => ({ ...item, active: index === selectedIndex })));
  };

  const handleKeyDown = useCallback((event: Event) => {
    const activeIndex = accordionItems.findIndex(item => item.active);

    if (activeIndex === -1) { return; }

    switch ((event as unknown as KeyboardEvent).code) {
      case 'ArrowUp':
        handleHeaderClick(calculateArrowUpIndex(activeIndex));
        break;
      case 'ArrowDown':
        handleHeaderClick(calculateArrowDownIndex(activeIndex));
        break;
      default:
        break;
    }
  }, [accordionItems]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.container}>
      <img src={backgroundImageMobile} alt="background image mobile" className={`${styles.img} ${styles['img--mobile']}`} />
      <img src={backgroundImageDesktop} alt="background image desktop" className={`${styles.img} ${styles['img--desktop']}`} />

      <div className={styles.card}>
        <div className={styles['card__heading']}>
          <img src={iconStarSvg} alt="star icon" />

          <h1 className="title">FAQs</h1>
        </div>

        {accordionItems.map((item, index) => <AccordionItem key={item.heading} item={item} index={index}
          handleHeaderClick={handleHeaderClick} showLine={accordionItems.length - 1 !== index} />)}
      </div>
    </div>
  )
};

export default App;
