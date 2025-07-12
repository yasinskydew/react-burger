import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { ITab } from '../../../services/types';
import { useAppSelector } from '../../../services/store/hook';

interface BurgerTabItemProps {
    children: ITab;
    onActive: (id: string) => void;
}

export default function BurgerTabItem({ children, onActive }: BurgerTabItemProps) {
    const activeTab = useAppSelector((state) => state.tabs.activeTab);

    const onClick = () => {
        onActive(children.id);
        const element = document.querySelector(`[data-tab-id="${children.id}"]`);
        if(!element) return;
        element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <Tab active={activeTab.id === children.id} value={children.id} onClick={onClick}>
            {children.title}
        </Tab>
    )
}
