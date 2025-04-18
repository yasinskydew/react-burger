import {DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-component.module.css'

export interface BurgerComponentProps {
  id: number;
  image: string;
  title: string;
  price: number;
  isLocked: boolean;
  type?: string;
}

export default function BurgerComponent({ 
  id,
  image, 
  title, 
  price,
  isLocked,
  type
}: BurgerComponentProps) {
  return (
    <article className={styles.burger_component}>
      {!type ? <DragIcon type="primary" /> : <div/>}
      <ConstructorElement 
          key={id} 
          text={title} 
          thumbnail={image} 
          price={price} 
          isLocked={isLocked} 
          type={type as 'top' | 'bottom'}
          extraClass={styles.constructor_element}
        />
    </article>
  );
}
