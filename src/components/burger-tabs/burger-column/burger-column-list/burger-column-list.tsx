import BurgerColumnItem, { BurgerColumnItemProps } from "../burger-column-item/burger-column-item"
import styles from './burger-column-list.module.css'
export interface BurgerColumnListProps {
  items: BurgerColumnItemProps[]
}

export default function BurgerColumnList({ items }: BurgerColumnListProps) {
    return (
        <div className={styles.burger_column_list}>
            {items.map((item) => (
                <BurgerColumnItem key={item.title} {...item} />
            ))}
        </div>
    ) 
}
