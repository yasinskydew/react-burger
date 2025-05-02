import {DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burgerComponent.module.css'
import { IIngredient } from "../../../utils/data";

export enum BurgerComponentType {
  top = 'top',
  bottom = 'bottom'
}
export interface BurgerComponentProps extends IIngredient {
  positionType?: BurgerComponentType
  isLocked: boolean
}

export default function BurgerComponent({ 
  _id,
  image, 
  name, 
  price,
  type,
  positionType,
  isLocked,
}: BurgerComponentProps) {
  return (
    <article className={styles.burger_component}>
      {!isLocked ? <DragIcon type="primary" /> : <div/>}
      <ConstructorElement 
          key={_id} 
          text={name} 
          thumbnail={image} 
          price={price} 
          isLocked={isLocked} 
          type={positionType}
          extraClass={styles.constructor_element}
        />
    </article>
  );
}
