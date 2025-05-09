import IngridientNutritionList from "../ingridientNutrition/ingridientNutritionList";
import styles from './ingridientDetails.module.css';
import { useSelector } from "react-redux";
import { ApplicationState } from "../../../services/store/store";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useOrder } from "../../../services/store/hooks/useOrder";


export default function IngridientDetails() {
    const ingridient = useSelector((state: ApplicationState) => state.currentIngredient.currentIngredient);
    const { addPosition } = useOrder();
    if (!ingridient) return null;

    return (
        <article className={styles.ingridientDetails}>
          <img className={styles.ingridientDetailsImage} src={ingridient.image_large} alt={ingridient.name} />
          <p className={styles.ingridientDetailsName + ' text_type_main-medium'}>{ingridient.name}</p>
          <IngridientNutritionList ingridient={ingridient} />
          {
            ingridient.type !== 'bun' && (
              <Button 
                htmlType="submit" 
                type="primary" 
                size="large" 
                onClick={() => addPosition(ingridient)}
                style={{ marginTop: '24px' }}
            >
              Добавить
            </Button>
          )
        }
        </article>
    )
}
