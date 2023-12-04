import App from './App';
import { accordionData } from './utils/data';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Root component', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('should render main heading and accordion headings', () => {
        const mainHeading = screen.getByText('FAQs');

        expect(mainHeading).toBeVisible();

        for (const item of accordionData) {
            const accordionHeading = screen.getByText(item.heading);

            expect(accordionHeading).toBeVisible();
        }
    });

    it('should have initially first heading text visible', () => {
        const textElement = screen.getByText(accordionData[0].text);

        expect(textElement).toBeVisible();
    });

    it('should have third heading text visible, if third heading is clicked', () => {
        const { heading, text } = accordionData[2];

        const headingElement = screen.getByText(heading);

        fireEvent.click(headingElement);

        const textElement = screen.getByText(text);

        expect(textElement).toBeVisible();
    });

    it('should have second heading text visible, if arrow down is pressed', async () => {
        const { text } = accordionData[1];

        userEvent.keyboard('{ArrowDown}');

        await waitFor(() => {
            const textElement = screen.getByText(text);

            expect(textElement).toBeVisible();
        });
    });

    it('should have last heading text visible, if arrow up is pressed', async () => {
        const { text } = accordionData[accordionData.length - 1];

        userEvent.keyboard('{ArrowUp}');

        await waitFor(() => {
            const textElement = screen.getByText(text);
  
            expect(textElement).toBeVisible();
        });
    });
});