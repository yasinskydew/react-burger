import { useState } from 'react'
import { IIngredient } from '../../../../services/types'
import Modal from '../../../modal/modal'
import BurgerColumnItem from '../burgerColumnItem/burgerColumnItem'
import styles from './burgerColumnList.module.css'
import IngridientDetails from '../../../burgerIngredients/ingridientDetails/ingridientDetails'
import { useIngridients } from '../../../../services/store/hooks';
import { clearCurrentIngredient, setCurrentIngredient } from '../../../../services/reducers/currentIngridient'
import { useDispatch } from 'react-redux'

interface IBurgerColumnListProps {
    type: string;
}

export default function BurgerColumnList({ type }: IBurgerColumnListProps) {
    const { getIngridientsByType } = useIngridients();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const handleOpenModal = (ingredient: IIngredient) => {
        dispatch(setCurrentIngredient(ingredient));
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        dispatch(clearCurrentIngredient());
        setIsModalOpen(false);
    };

    return (
        <div className={styles.burger_column_list}>
            {getIngridientsByType(type).map((item) => {
                return (
                    <BurgerColumnItem key={item._id} {...item} onClick={() => handleOpenModal(item)}/>
                )
            })}
        <Modal
            title='Детали ингредиента'
            isOpen={isModalOpen}
            onClose={handleCloseModal}
        >
            <IngridientDetails />
        </Modal>
        </div>
    ) 
}
