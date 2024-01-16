import AccordionItem from './AccordionItem';
import { accordionData } from '../utils/data';

export default {
    tags: ['autocomplete'],
    title: 'AccordionItem',
    component: AccordionItem
}

export const OrdinaryAccordionItem = {
    args: {
        index: 0,
        showLine: false,
        item: accordionData[0],
        handleHeaderClick: () => {}
    }
}
