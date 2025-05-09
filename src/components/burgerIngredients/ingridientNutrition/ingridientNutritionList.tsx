import styles from './ingridientNutrition.module.css';
import { IIngredient } from '../../../services/types';
import IngridientNutritionItem from './ingridientNutritionItem';
interface IngridientNutritionListProps {
    ingridient: IIngredient
}

export default function IngridientNutritionList({ ingridient }: IngridientNutritionListProps) {
    return (
        <div className={styles.ingridientNutritionList}>
            <IngridientNutritionItem title="Калории" value={ingridient.calories.toString()} type="ккал" />
            <IngridientNutritionItem title="Белки" value={ingridient.proteins.toString()} type="г" />
            <IngridientNutritionItem title="Жиры" value={ingridient.fat.toString()} type="г" />
            <IngridientNutritionItem title="Углеводы" value={ingridient.carbohydrates.toString()} type="г" />
        </div>
    )
}
