import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../../modal/modal';
import { useOrders } from '../../../services/store/hooks';
import { OrderContent } from '../orderContent/orderContent';

export const OrderModal: React.FC = () => {
  const navigate = useNavigate();
  const { isOrderModalOpen, setIsOrderModalOpen, getOrderByNumber } = useOrders();
  const { id } = useParams();
  const order = getOrderByNumber(id as string);

  useEffect(() => {
    setIsOrderModalOpen(true);
  }, [setIsOrderModalOpen]);

  return (
    <Modal
      title={`#${order?.number}`}
      isOpen={isOrderModalOpen}
      onClose={() => {
        setIsOrderModalOpen(false);
        navigate(-1);
      }}
      extraTitleStyle='text text_type_digits-default'
    >
      { id && <OrderContent order={order} /> }
    </Modal>
  );
};

export default OrderModal; 