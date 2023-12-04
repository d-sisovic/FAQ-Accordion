import { IAccordionItem } from "../../../ts/models/accordion-item.model";

export interface IAccordionItemProps {
    index: number;
    showLine: boolean;
    item: IAccordionItem;
    handleHeaderClick: (index: number) => void;
}
