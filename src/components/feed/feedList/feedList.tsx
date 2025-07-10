import styles from './feedList.module.css';
import { FeedListItem } from '../feedListItem/feedListItem';
import { IOrders } from '../../../services/types';

interface FeedListProps {
  linkUrl: string
  orders: IOrders[]
}

export const FeedList = (props: FeedListProps) => {

  const { orders, linkUrl } = props;
  return (
    <section className={styles.scrollableContent}>
      <ul className={styles.feedList}>
        {
          orders.map((order: any) => <FeedListItem key={order._id} order={order} linkPath={`/${linkUrl}/${order.number}`}/>)
        }
      </ul>
    </section>
  )
}