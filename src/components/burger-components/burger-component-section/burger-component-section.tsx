import { BurgerComponentProps } from "../burger-component/burger-component";
import bun1 from '../../../images/constructor/illustration.png'
import bun2 from '../../../images/constructor/illustration01.png'
import sauce1 from '../../../images/constructor/mineral rings.png'
import sauce2 from '../../../images/constructor/sauce-03.png'
import sauce3 from '../../../images/constructor/sp-1.png'
import styles from './burger-component-section.module.css'
import BurgerComponentList from "../burger-component-list/burger-component-list";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerPrice from "../../burger-price/burger-price";

export default function BurgerComponentSection() {

  const components: BurgerComponentProps[] = [
    {
      id: 1,
      image: bun1,
      title: 'Краторная булка N-200i (верх)',
      price: 20,
      isLocked: true,
      type: 'top'
    },
    {
      id: 2,
      image: sauce3,
      title: 'Соус традиционный галактический',
      price: 30,
      isLocked: false
    },
    {
      id: 3,
      image: bun2,
      title: 'Мясо бессмертных моллюсков Protostomia',
      price: 300,
      isLocked: false
    },
    {
      id: 4,
      image: sauce2,
      title: 'Плоды Фалленианского дерева',
      price: 80,
      isLocked: false
    },
    { 
      id: 5,
      image: sauce1,
      title: 'Хрустящие минеральные кольца',
      price: 80,
      isLocked: false
    },
    {
      id: 6,
      image: sauce1,
      title: 'Хрустящие минеральные кольца',
      price: 80,
      isLocked: false
    },
    {
      id: 7,
      image: bun1,
      title: 'Краторная булка N-200i (верх)',
      price: 20,
      isLocked: true,
    },
    {
      id: 8,
      image: bun1,
      title: 'Краторная булка N-200i (верх)',
      price: 20,
      isLocked: true,
    },
    {
      id: 9,
      image: bun1,
      title: 'Краторная булка N-200i (верх)',
      price: 20,
      isLocked: true,
    },
    {
      id: 10,
      image: bun1,
      title: 'Краторная булка N-200i (верх)',
      price: 20,
      isLocked: true,
    },
    {
      id: 11,
      image: bun1,
      title: 'Краторная булка N-200i (верх)',
      price: 20,
      isLocked: true,
    },
    {
      id: 12,
      image: bun1,
      title: 'Краторная булка N-200i (верх)',
      price: 20,
      isLocked: true,
      type: 'bottom'
    }   
  ]
  return (
    <section className={styles.burger_component_section}>
      <div className={styles.scrollableContent}>
        <BurgerComponentList items={components} />
      </div>
      <div className={styles.burger_component_section_bottom}>
        <BurgerPrice price={610} size="large" />
        <Button htmlType="submit" type="primary" size="large">
            Оформить заказ
        </Button>
      </div>
    </section>
  );
}
