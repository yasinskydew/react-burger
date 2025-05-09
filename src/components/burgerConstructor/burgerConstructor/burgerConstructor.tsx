import styles from './burgerConstructor.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../../modal/modal';
import { useState } from 'react';
import OrderDetails from '../../orderDetails/orderDetails';
import { useOrder } from '../../../services/store/hooks/useOrder';
import BurgerComponentList from '../burgerComponentList/burgerComponentList';
import BurgerPrice from '../../burgerPrice/burgerPrice';
import { useIngridients } from '../../../services/store/hooks/useIngridients';
import BurgerComponent from '../burgerComponent/burgerComponent';

export default function BurgerConstructor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { items, totalPrice, createOrder, order } = useOrder();

  const handleOpenModal = async () => {
    if (order) {
      setIsModalOpen(true)
      return;
    }
    await createOrder({
      ingredients: items.map((item) => item._id),
    });
    setIsModalOpen(true)
  };
  
  const handleCloseModal = () => setIsModalOpen(false);
  const { getDefaultBun } = useIngridients();
  const bun = getDefaultBun();
  return (
    <section className={styles.burgerConstructor}>

      <BurgerComponent {...bun} isLocked={true} />
      {
        Object.keys(items).length > 0 && (
          <div className={styles.scrollableContent}>
            <BurgerComponentList />
          </div>
        )
      }
      <BurgerComponent {...bun} isLocked={true} />
      <div className={styles.burgerConstructorBottoms}>
        <BurgerPrice size="large" price={totalPrice} />
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
