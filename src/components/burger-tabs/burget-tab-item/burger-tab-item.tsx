import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

interface BurgerTabItemProps {
    children: string;
    active: boolean;
}

export default function BurgerTabItem({ children, active }: BurgerTabItemProps) {
    return (
        <Tab active={active} value={children} onClick={() => {}}>
            {children}
        </Tab>
    )
}
