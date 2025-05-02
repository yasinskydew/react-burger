import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { ITab } from '../../../utils/data';

interface BurgerTabItemProps {
    children: ITab;
    onActive: (id: string) => void;
}

export default function BurgerTabItem({ children, onActive }: BurgerTabItemProps) {
    return (
        <Tab active={children.isActive} value={children.id} onClick={() => onActive(children.id)}>
            {children.title}
        </Tab>
    )
}
