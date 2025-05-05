import styles from './ingridientNutrition.module.css';

interface IngridientNutritionItemProps {
    title: string;
    value: string;
    type: string;
}
 
export default function IngridientNutritionItem({ title, value, type }: IngridientNutritionItemProps) {
    return (
        <div className={styles.ingridientNutritionItem + ' text_color_inactive text_type_main-default' }>
            <p className={styles.ingridientNutritionItemTitle}>{title}, {type}</p>
            <p className={styles.ingridientNutritionItemValue}>{value}</p>
        </div>
    )
}
