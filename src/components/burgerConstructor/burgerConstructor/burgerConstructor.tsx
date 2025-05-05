import { IIngredient } from '../../api/types'
import BurgerPrice from '../../burgerPrice/burgerPrice'
import BurgerComponent from '../burgerComponent/burgerComponent';
import BurgerComponentList from '../burgerComponentList/burgerComponentList'
import styles from './burgerConstructor.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../../modal/modal';
import { useState } from 'react';
import OrderDetails from '../../orderDetails/orderDetails';

interface BurgerConstructorProps {
  ingredients: IIngredient[]
  deleteIngridient: (ingredient:IIngredient) => void
}
export default function BurgerConstructor({ ingredients, deleteIngridient }: BurgerConstructorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const getPrice = () => {
    return ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
  }
  const getTopIngridients = () => {
    return ingredients.find(ingredient => ingredient.positionType === 'top') as IIngredient;
  }
  const getBottomIngridients = () => {
    return ingredients.find(ingredient => ingredient.positionType === 'bottom') as IIngredient;
  }

  const getIngridients = () => {

    return ingredients.filter(ingredient => ingredient.positionType !== 'top' && ingredient.positionType !== 'bottom');
  }
  return (
    <section className={styles.burgerConstructor}>
      <BurgerComponent {...getTopIngridients()} isLocked={true} />
      {
        getIngridients().length > 0 && (
          <div className={styles.scrollableContent}>
            <BurgerComponentList ingredients={getIngridients()} deleteIngridient={deleteIngridient} />
          </div>
        )
      }
      <BurgerComponent {...getBottomIngridients()} isLocked={true} />
      <div className={styles.burgerConstructorBottoms}>
        <BurgerPrice price={getPrice()} size="large" />
        <Button htmlType="submit" type="primary" size="large" onClick={handleOpenModal}>
            Оформить заказ
        </Button>
      </div>
      <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title=""
      >
        <OrderDetails />
      </Modal>
    </section>
  );
}
