import { IOrders } from '../../../services/types';
import { FeedDashboardStatus } from '../feedDashboardStatus/feedDashboardStatus';
import { FeedDashboardTotal } from '../feedDashboardTotal/feedDashboardTotal';
import styles from './feedDashboard.module.css';

interface FeedDashboardProps {
  orders: IOrders[]
  total: number
  totalToday: number
}

export const FeedDashboard = (props: FeedDashboardProps) => {
  const { orders,total, totalToday } = props;
  return (
    <section className={styles.feedDashboard}>
      <FeedDashboardStatus 
        doneList={orders.filter((i: any) => i.status === 'done').map((i: any) => i.number)}
        pendingList={orders.filter((i: any) => i.status === 'pending').map((i: any) => i.number)}
      />
      <FeedDashboardTotal 
        title='Выполнено за всё время:'
        value={total}
      />
      <FeedDashboardTotal 
        title='Выполнено за сегодня:'
        value={totalToday}
      />
    </section>
  )
}