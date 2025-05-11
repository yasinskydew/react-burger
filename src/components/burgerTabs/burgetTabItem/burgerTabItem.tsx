import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { ITab } from '../../../services/types';
import { ApplicationState } from '../../../services/store/store';
import { useSelector } from 'react-redux';

interface BurgerTabItemProps {
    children: ITab;
    onActive: (id: string) => void;
}

export default function BurgerTabItem({ children, onActive }: BurgerTabItemProps) {
    const activeTab = useSelector((state: ApplicationState) => state.tabs.activeTab);
    return (
        <Tab active={activeTab.id === children.id} value={children.id} onClick={() => onActive(children.id)}>
            {children.title}
        </Tab>
    )
}
