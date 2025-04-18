import BurgerTabItem from '../burget-tab-item/burger-tab-item';
import styles from './burger-tab-list.module.css'

export interface BurgerTab {
    name: string;
    active: boolean;
}

interface BurgerTabListProps {
    tabs: BurgerTab[];
}

export default function BurgerTabList({ tabs }: BurgerTabListProps) {
    return (
        <div className={styles.burger_tab_list}>
            {tabs.map((tab) => (
                <BurgerTabItem key={tab.name} active={tab.active}>
                    {tab.name}
                </BurgerTabItem>
            ))}
        </div>
    )
}
