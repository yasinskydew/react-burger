import { useParams } from "react-router-dom";
import { useOrders } from "../../services/store/hooks";
import { OrderContent } from "../../components/order/orderContent/orderContent";
import { useEffect } from "react";
import { useGetAllOrdersQuery } from "../../services/api/orders";

export const OrderContentPage = () => {
  const { data, isLoading, isError } = useGetAllOrdersQuery()
  const { getOrderByNumber } = useOrders();

  useEffect(() => {

  }, [isLoading, isError, data])

  const { id: orderNumber } = useParams();

  const order = getOrderByNumber(orderNumber as string);
  return (
     <div className="orderContentPage">
       <OrderContent order={order} />
     </div>
  )
}