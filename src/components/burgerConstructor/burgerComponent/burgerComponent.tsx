import {DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burgerComponent.module.css'
import { BurgerComponentType, DragItemTypes, IIngredient } from "../../../services/types";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { useOrder } from "../../../services/store/hooks/useOrder";

export interface BurgerComponentProps extends IIngredient {
  positionType?: BurgerComponentType
  isLocked: boolean
  handleClose?: () => void
  index: number,
  dataTestid?: string
}

export default function BurgerComponent({ 
  image, 
  name, 
  price,
  positionType,
  isLocked,
  handleClose,
  index,
  dataTestid,
}: BurgerComponentProps) {
  const { changePosition } = useOrder();
  const dragRef = useRef<HTMLDivElement>(null);

  const [{ isDrag }, drag] = useDrag({
    type: DragItemTypes.COMPONENT,
    item: { index },
    collect: monitor => ({
        isDrag: monitor.isDragging()
    })
  });

  const [, drop] = useDrop({
    accept: DragItemTypes.COMPONENT,
    hover(item: { index: number }) {
      if (item.index === index || isLocked) {
        return;
      }
      changePosition(item.index, index);
      item.index = index;
    }
  });

  drag(drop(dragRef));

  return (
    <article className={styles.burger_component} ref={isLocked ? null : dragRef} style={{ opacity: isDrag ? 0.4 : 1 }} data-testid={dataTestid} >
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
