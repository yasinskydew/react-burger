import BurgerTabItem from '../burgetTabItem/burgerTabItem';
import styles from './burgerTabList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../services/store/store';
import { selectActiveTab } from '../../../services/reducers/tabs';

export default function BurgerTabList() {
    const tabs = useSelector((state: ApplicationState) => state.tabs.tabs);
    const dispatch = useDispatch();


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
