import BurgerTabItem from '../burgetTabItem/burgerTabItem';
import styles from './burgerTabList.module.css'
import { selectActiveTab } from '../../../services/reducers/tabs';
import { useAppDispatch, useAppSelector } from '../../../services/store/hook';

export default function BurgerTabList() {
    const tabs = useAppSelector((state) => state.tabs.tabs);
    const dispatch = useAppDispatch();


    return (
        <div className={styles.burger_tab_list}>
            {tabs.map((tab) => (
                <BurgerTabItem 
                    key={tab.id} 
                    onActive={() => dispatch(selectActiveTab(tab.id))}
                >
                    {tab}
                </BurgerTabItem>
            ))}
        </div>
    )
}
