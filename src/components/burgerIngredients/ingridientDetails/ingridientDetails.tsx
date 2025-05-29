import { useParams } from "react-router-dom";
import IngridientNutritionList from "../ingridientNutrition/ingridientNutritionList";
import styles from './ingridientDetails.module.css';
import { useIngredients } from "../../../services/store/hooks";
import { NotFoundPage } from "../../../pages/notFound/notFoundPage";

export default function IngridientDetails() {
  const { id } = useParams();
  
  const { getIngredientById } = useIngredients();
  const ingredient = getIngredientById(id as string);

  if(!ingredient) {
    return <NotFoundPage />
  }
  return (
      <article className={styles.ingridientDetails}>
        <img className={styles.ingridientDetailsImage} src={ingredient.image_large} alt={ingredient.name} />
        <p className={styles.ingridientDetailsName + ' text_type_main-medium'}>{ingredient.name}</p>
        <IngridientNutritionList ingridient={ingredient} />
      </article>
  )
}
