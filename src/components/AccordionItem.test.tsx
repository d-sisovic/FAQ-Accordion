import AccordionItem from './AccordionItem';
import { accordionData } from '../utils/data';
import { render, screen } from '@testing-library/react';

const handleHeaderClick = vi.fn();

describe('Accordion Item component', () => {
    it('should have minus icon if it\'s active', () => {
        render(<AccordionItem item={accordionData[0]} showLine={true} index={0} handleHeaderClick={handleHeaderClick} />);

        const actionIcon = screen.getByAltText('minus');

        expect(actionIcon).toBeVisible();
    });

    it('should have plus icon if it\'s not active', () => {
        render(<AccordionItem item={accordionData[1]} showLine={true} index={1} handleHeaderClick={handleHeaderClick} />);

        const actionIcon = screen.getByAltText('plus');

        expect(actionIcon).toBeVisible();
    });
});