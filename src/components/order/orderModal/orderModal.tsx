import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../../modal/modal';
import { useOrders } from '../../../services/store/hooks';
import { OrderContent } from '../orderContent/orderContent';
import { useGetOrderByIdQuery } from '../../../services/api/orders';
import { Loader } from '../../loader/loader';

export const OrderModal: React.FC = () => {
  const navigate = useNavigate();
  const { isOrderModalOpen, setIsOrderModalOpen, getOrderByNumber } = useOrders();
  const { id } = useParams();
  const { isLoading, isError, data, isFetching } = useGetOrderByIdQuery(String(id));
  const order = getOrderByNumber(id as string);

  useEffect(() => {
    setIsOrderModalOpen(true);
  }, [setIsOrderModalOpen]);

  if (order) {
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
  }

  if (isLoading || isFetching) {
    return <Loader />
  } 

  if (isError || !data || !data.success) {
    return <div> Error </div>
  }

  return (
    <Modal
      title={`#${data.orders[0].number}`}
      isOpen={isOrderModalOpen}
      onClose={() => {
        setIsOrderModalOpen(false);
        navigate(-1);
      }}
      extraTitleStyle='text text_type_digits-default'
    >
      { id && <OrderContent order={data.orders[0]} /> }
    </Modal>
  );
};

export default OrderModal; 