import { IIngredient } from "../../api/types"
import IngridientNutritionList from "../ingridientNutrition/ingridientNutritionList";
import styles from './ingridientDetails.module.css';
interface IngridientDetailsProps {
  ingridient: IIngredient | null
}

export default function IngridientDetails(props: IngridientDetailsProps) {
    const { ingridient } = props;
    if (!ingridient) return null;
    return (
        <article className={styles.ingridientDetails}>
          <img className={styles.ingridientDetailsImage} src={ingridient.image_large} alt={ingridient.name} />
          <p className={styles.ingridientDetailsName + ' text_type_main-medium'}>{ingridient.name}</p>
          <IngridientNutritionList ingridient={ingridient} />
        </article>
    )
}
