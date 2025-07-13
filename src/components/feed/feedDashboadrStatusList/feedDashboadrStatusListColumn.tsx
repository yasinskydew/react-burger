import { OrdersStatusEnum } from '../../../services/types';
import styles from './feedDashboadrStatusList.module.css'

interface FeedDashboardStatusListProps {
  orderList: string[]
  orderStatus: OrdersStatusEnum
}

const statusClasses = {
  [OrdersStatusEnum.done]: styles.feedDashboardStatusListDone,
  [OrdersStatusEnum.pending]: styles.feedDashboardStatusListPending,
  [OrdersStatusEnum.created]: styles.feedDashboardStatusListCreated,
};

export const FeedDashboardStatusListColumn = (props: FeedDashboardStatusListProps) => {
  return (
    <div className={styles.feedDashboardStatusList}>
      {props.orderList.map((order) => (
        <div key={order} className={statusClasses[props.orderStatus] + ' text text_type_digits-default'}>{order}</div>
      ))}
    </div>
  )
}