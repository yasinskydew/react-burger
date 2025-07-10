import { FeedDashboardStatus } from '../feedDashboardStatus/feedDashboardStatus';
import { FeedDashboardTotal } from '../feedDashboardTotal/feedDashboardTotal';
import styles from './feedDashboard.module.css';

export const FeedDashboard = (props: any) => {
  const { data } = props;
  return (
    <section className={styles.feedDashboard}>
      <FeedDashboardStatus 
        doneList={data.orders.filter((i: any) => i.status === 'done').map((i: any) => i.number)}
        pendingList={data.orders.filter((i: any) => i.status === 'pending').map((i: any) => i.number)}
      />
      <FeedDashboardTotal 
        title='Выполнено за всё время:'
        value={data.total}
      />
      <FeedDashboardTotal 
        title='Выполнено за сегодня:'
        value={data.totalToday}
      />
    </section>
  )
}