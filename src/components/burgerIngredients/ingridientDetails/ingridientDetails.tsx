import IngridientNutritionList from "../ingridientNutrition/ingridientNutritionList";
import styles from './ingridientDetails.module.css';
import { useSelector } from "react-redux";
import { ApplicationState } from "../../../services/store/store";


export default function IngridientDetails() {
    const ingridient = useSelector((state: ApplicationState) => state.currentIngredient.currentIngredient);
    if (!ingridient) return null;

    return (
        <article className={styles.ingridientDetails}>
          <img className={styles.ingridientDetailsImage} src={ingridient.image_large} alt={ingridient.name} />
          <p className={styles.ingridientDetailsName + ' text_type_main-medium'}>{ingridient.name}</p>
          <IngridientNutritionList ingridient={ingridient} />
        </article>
    )
}
