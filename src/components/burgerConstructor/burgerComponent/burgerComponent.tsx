import {DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burgerComponent.module.css'
import { BurgerComponentType, IIngredient } from "../../../utils/data";

export interface BurgerComponentProps extends IIngredient {
  positionType?: BurgerComponentType
  isLocked: boolean
  handleClose: () => void
}

export default function BurgerComponent({ 
  _id,
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
          key={_id} 
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
