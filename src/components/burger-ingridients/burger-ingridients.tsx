import { BurgerColumnItemProps } from "../burger-tabs/burger-column/burger-column-item/burger-column-item";
import BurgerColumnList from "../burger-tabs/burger-column/burger-column-list/burger-column-list";
import BurgerTabList, { BurgerTab } from "../burger-tabs/burger-tab-list/burger-tab-list";
import BurgerTitleSecond from "../burger-tabs/burger-title-second/burger-title-second";

import bun01 from '../../images/burger-columns/buns/bun-01.png';
import bun02 from '../../images/burger-columns/buns/bun-02.png';
import sauce01 from '../../images/burger-columns/sauces/sauce-01.png';
import sauce02 from '../../images/burger-columns/sauces/sauce-02.png';
import sauce03 from '../../images/burger-columns/sauces/sauce-03.png';
import sauce04 from '../../images/burger-columns/sauces/sauce-04.png';
import styles from './burger-ingridients.module.css';

export default function BurgerIngridients() {
    const tabs: BurgerTab[] = [
        { name: 'Булки', active: true, },
        { name: 'Соусы', active: false },
        { name: 'Начинки', active: false }
    ];

    const buns: BurgerColumnItemProps[] = [
        { title: 'Краторная булка N-200i', image: bun01, price: 20, count: 1 },
        { title: 'Флюоресцентная булка R2-D3', image: bun02, price: 20, count: 0 },
    ];

    const sauces: BurgerColumnItemProps[] = [
        { title: 'Соус Spicy-X', image: sauce01, price: 30, count: 0 },
        { title: 'Соус фирменный Space Sauce', image: sauce02, price: 30, count: 0 },
        { title: 'Соус традиционный галактический', image: sauce03, price: 30, count: 1 },
        { title: 'Соус с шипами Антарианского плоскоходца', image: sauce04, price: 30, count: 0 },
    ];

    return (
      <section className={styles.section_burger_ingridients}>
        <h1 className={styles.burger_title + ' text_type_main-large'}>
            Соберите бургер
        </h1>
        <BurgerTabList tabs={tabs} />
        <div className={styles.scrollableContent}>
            <BurgerTitleSecond>
                Булки
            </BurgerTitleSecond>
            <BurgerColumnList items={buns} />
            <BurgerTitleSecond>
                Соусы
            </BurgerTitleSecond>
            <BurgerColumnList items={sauces} />
        </div>
    </section>
    )
}
