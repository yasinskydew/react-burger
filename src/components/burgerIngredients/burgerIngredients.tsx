import BurgerTabList from '../burgerTabs/burgerTabList/burgerTabList';
import styles from './burgerIngredients.module.css';
import { useEffect, useRef } from 'react';
import { ApplicationState } from '../../services/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveTab } from '../../services/reducers/tabs';
import BurgerTitleSecond from '../burgerTabs/burgerTitleSecond/burgerTitleSecond';
import BurgerColumnList from '../burgerTabs/burgerColumn/burgerColumnList/burgerColumnList';

export default function BurgerIngredients() {
    const ingredients = useSelector((state: ApplicationState) => state.ingredients.items);
    const tabs = useSelector((state: ApplicationState) => state.tabs.tabs);
    const activeTab = useSelector((state: ApplicationState) => state.tabs.activeTab);
    const scrollableRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!scrollableRef.current) return;
        const scrollableContent = scrollableRef.current;
        const headings = scrollableContent.querySelectorAll('[data-tab-id]');
        const containerRect = scrollableContent.getBoundingClientRect();
        const handleScroll = () => {
            let closestHeading = headings[0];
            let minDistance = Infinity;
            headings.forEach((heading) => {
                const headingRect = heading.getBoundingClientRect();
                const distance = Math.abs(headingRect.top - containerRect.top);
                if(distance < minDistance) {
                    minDistance = distance;
                    closestHeading = heading;
                }
            });
            const closestTabId = closestHeading.getAttribute('data-tab-id');
            if(closestTabId && closestTabId !== activeTab.id) {
                dispatch(selectActiveTab(closestTabId));    
                    dispatch(selectActiveTab(closestTabId));
            }
        }

        if (scrollableRef.current) {
            scrollableRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollableRef.current) {
                scrollableRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [tabs, dispatch, activeTab]);

    const getByType = (type: string) => {
        return ingredients.filter(ingredient => ingredient.type === type)
    }

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
           {
            tabs.map(tab => (
                <section key={tab.id}>
                    <BurgerTitleSecond tabId={tab.id}>
                        {tab.title}
                    </BurgerTitleSecond>
                    <BurgerColumnList data={getByType(tab.id)} ingredients={ingredients} addIngredient={() => {}}/>
                </section>
            ))
           }
        </div>
    </section>
    )
}
