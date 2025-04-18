import { BurgerComponentProps } from "../burger-component/burger-component";
import BurgerComponent from "../burger-component/burger-component";
import styles from './burger-component-list.module.css'
export interface BurgerComponentListProps {
  items: BurgerComponentProps[];
}

export default function BurgerComponentList({
  items
}: BurgerComponentListProps) {
  return (
    <div className={styles.burger_component_list}>
      {items.map((item) => (
        <BurgerComponent key={item.id} {...item} />
      ))}
    </div>
  );
}
