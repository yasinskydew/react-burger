import styles from './burgerConstructor.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../../modal/modal';
import { useRef, useState } from 'react';
import OrderDetails from '../../orderDetails/orderDetails';
import { useOrder } from '../../../services/store/hooks/useOrder';
import BurgerComponentList from '../burgerComponentList/burgerComponentList';
import BurgerPrice from '../../burgerPrice/burgerPrice';
import BurgerComponent from '../burgerComponent/burgerComponent';
import { useDrop } from 'react-dnd';
import { DragItemTypes, IIngredient } from '../../../services/types';
import { addIngridient } from '../../../services/reducers/order';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../loader/loader';
import { ApplicationState } from '../../../services/store/store';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BurgerConstructor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { items, totalPrice, createOrder } = useOrder();
  const { user } = useSelector((state: ApplicationState) => state.userSliceReducer);
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleOpenModal = async () => {
    if(!user) {
      return navigate('/login', { state: { from: location } });
    }
    setIsLoading(true);
    await createOrder();
    setIsModalOpen(true)
    setIsLoading(false);
  };
  
  const handleCloseModal = () => setIsModalOpen(false);
  const { getBun, setDefaultBun } = useOrder();
  const bun = getBun();

  const dropRef = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: DragItemTypes.INGREDIENT,
    drop(item: { ingredient: IIngredient }) {
      if(item.ingredient._id === bun._id) {
        return;
      }

      if(item.ingredient.type !== 'bun') {
        return dispatch(addIngridient(item.ingredient));
      }
     
      return setDefaultBun(item.ingredient);
    },
  });
  drop(dropRef);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className={styles.burgerConstructor}>
      <div className={styles.burgerConstructorContent} ref={dropRef}>
        <BurgerComponent {...bun} isLocked={true} index={0} />
        {
          Object.keys(items).length > 0 && (
            <div className={styles.scrollableContent}>
              <BurgerComponentList />
            </div>
          )
        }
        <BurgerComponent {...bun} isLocked={true} index={0} />
      </div>
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
