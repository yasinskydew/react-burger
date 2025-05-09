import BurgerTabList from '../burgerTabs/burgerTabList/burgerTabList';
import styles from './burgerIngredients.module.css';
import { useEffect, useRef, useCallback } from 'react';
import { ApplicationState } from '../../services/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveTab } from '../../services/reducers/tabs';
import BurgerTitleSecond from '../burgerTabs/burgerTitleSecond/burgerTitleSecond';
import BurgerColumnList from '../burgerTabs/burgerColumn/burgerColumnList/burgerColumnList';
import { ITab } from '../../services/types';

export default function BurgerIngredients() {
    const tabs = useSelector((state: ApplicationState) => state.tabs.tabs);
    const activeTab = useSelector((state: ApplicationState) => state.tabs.activeTab);
    const dispatch = useDispatch();
    const scrollableRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if (!scrollableRef.current) return;

        const scrollableContent = scrollableRef.current;
        const headings = scrollableContent.querySelectorAll('[data-tab-id]');
        const containerRect = scrollableContent.getBoundingClientRect();

        let closestHeading = headings[0];
        let minDistance = Infinity;

        headings.forEach((heading) => {
            const headingRect = heading.getBoundingClientRect();
            const distance = Math.abs(headingRect.top - containerRect.top);
            
            if (distance < minDistance) {
                minDistance = distance;
                closestHeading = heading;
            }
        });

        const closestTabId = closestHeading.getAttribute('data-tab-id');
        if (closestTabId && closestTabId !== activeTab.id) {
            dispatch(selectActiveTab(closestTabId));
        }
    }, [activeTab.id, dispatch]);

    useEffect(() => {
        const scrollableContent = scrollableRef.current;
        if (!scrollableContent) return;

        scrollableContent.addEventListener('scroll', handleScroll);

        return () => {
            scrollableContent.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <section className={styles.section_burger_ingredients}>
            <h1 className={styles.burger_title + ' text_type_main-large'}>
                Соберите бургер
            </h1>
            <BurgerTabList />
            <div 
                className={styles.scrollableContent} 
                ref={scrollableRef}
            >
                {tabs.map((tab: ITab) => (
                    <section key={tab.id} data-tab-id={tab.id}>
                        <BurgerTitleSecond tabId={tab.id}>
                            {tab.title}
                        </BurgerTitleSecond>
                        <BurgerColumnList type={tab.id} />
                    </section>
                ))}
            </div>
        </section>
    );
}
