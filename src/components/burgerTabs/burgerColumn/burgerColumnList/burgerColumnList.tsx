import { useState } from 'react'
import { IIngredient } from '../../../../services/types'
import Modal from '../../../modal/modal'
import BurgerColumnItem from '../burgerColumnItem/burgerColumnItem'
import styles from './burgerColumnList.module.css'
import IngridientDetails from '../../../burgerIngredients/ingridientDetails/ingridientDetails'
export interface BurgerColumnListProps {
  data: IIngredient[]
  ingredients: IIngredient[]
  addIngredient: (ingredient: IIngredient) => void
}

export default function BurgerColumnList({ data, ingredients, addIngredient }: BurgerColumnListProps) {

    const [ingridient, setIngridient] = useState<IIngredient | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (ingredient: IIngredient) => {
        setIngridient(ingredient);
        setIsModalOpen(true);
        addIngredient(ingredient);
    };

    const handleCloseModal = () => {
        setIngridient(null);
        setIsModalOpen(false);
    };

    return (
        <div className={styles.burger_column_list}>
            {data.map((item) => {
                const count = ingredients.filter((ingredient) => ingredient._id === item._id).length
                return (
                    <BurgerColumnItem key={item._id} {...item} count={count} onClick={() => handleOpenModal(item)}/>
                )
            })}
        <Modal
            title='Детали ингредиента'
            isOpen={isModalOpen}
            onClose={handleCloseModal}
        >
            <IngridientDetails ingridient={ingridient} />
        </Modal>
        </div>
    ) 
}
