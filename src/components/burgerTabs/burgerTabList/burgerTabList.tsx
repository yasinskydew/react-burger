import BurgerTabItem from '../burgetTabItem/burgerTabItem';
import styles from './burgerTabList.module.css'
import { ITab } from '../../../utils/data';

interface BurgerTabListProps {
    tabs: ITab[];
    setActive: (id: string) => void
}

export default function BurgerTabList({
    tabs,
    setActive
}: BurgerTabListProps) {


    return (
        <div className={styles.burger_tab_list}>
            {tabs.map((tab) => (
                <BurgerTabItem 
                    key={tab.id} 
                    onActive={setActive}
                >
                    {tab}
                </BurgerTabItem>
            ))}
        </div>
    )
}
