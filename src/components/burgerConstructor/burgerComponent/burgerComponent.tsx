import {DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burgerComponent.module.css'
import { BurgerComponentType, IIngredient } from "../../../services/types";

export interface BurgerComponentProps extends IIngredient {
  positionType?: BurgerComponentType
  isLocked: boolean
  handleClose?: () => void
}

export default function BurgerComponent({ 
  image, 
  name, 
  price,
  positionType,
  isLocked,
  handleClose,
}: BurgerComponentProps) {
  return (
    <article className={styles.burger_component}>
      {!isLocked ? <DragIcon type="primary" /> : <div/>}
      <ConstructorElement 
          text={name} 
          thumbnail={image} 
          price={price} 
          isLocked={isLocked} 
          type={positionType}
          extraClass={styles.constructor_element}
          handleClose={handleClose}
        />
    </article>
  );
}
