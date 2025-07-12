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
import { BurgerComponentType, DragItemTypes, IIngredient } from '../../../services/types';
import { addIngridient, setBun } from '../../../services/reducers/order';
import { Loader } from '../../loader/loader';
import { useLocation, useNavigate } from 'react-router-dom';
import { defaultIngridient } from '../../../services/store/hooks';
import { useAppDispatch, useAppSelector } from '../../../services/store/hook';

export default function BurgerConstructor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { items, totalPrice, createOrder, clearOrder } = useOrder();
  const { user } = useAppSelector((state) => state.userSliceReducer);
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();

  const handleOpenModal = async () => {
    if(!user) {
      return navigate('/login', { state: { from: location } });
    }
    setIsLoading(true);
    await createOrder();
    clearOrder();
    setIsModalOpen(true)
    setIsLoading(false);
  };
  
  const handleCloseModal = () => setIsModalOpen(false);
  const { getBun } = useOrder();
  const bun = getBun();

  const dropRef = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: DragItemTypes.INGREDIENT,
    drop(item: { ingredient: IIngredient }) {
      if(item.ingredient._id === bun._id) {
        return;
      }

      if(item.ingredient.type === 'bun') {
        return dispatch(setBun(item.ingredient));
      }

      if(item.ingredient.type !== 'bun') {
        return dispatch(addIngridient(item.ingredient));
      }
    },
  });
  drop(dropRef);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className={styles.burgerConstructor}>
      <div className={styles.burgerConstructorContent} ref={dropRef}>
        <BurgerComponent {...bun} name={bun.name + ' (верх)'} isLocked={true} index={0} positionType={BurgerComponentType.top}/>
        {
          Object.keys(items).length > 0 ? (
            <div className={styles.scrollableContent}>
              <BurgerComponentList />
            </div>
          ) : (
            <div className={styles.scrollableContent}>
              <BurgerComponent {...defaultIngridient} name={defaultIngridient.name} isLocked={true} index={0} />
            </div>
          )
        }
        <BurgerComponent {...bun} name={bun.name + ' (низ)'} isLocked={true} index={0} positionType={BurgerComponentType.bottom}/>
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
