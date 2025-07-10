import styles from './feedList.module.css';
import { FeedListItem } from '../feedListItem/feedListItem';

export const FeedList = (props: any) => {

  const { data } = props;
  return (
    <section className={styles.scrollableContent}>
      <ul className={styles.feedList}>
        {
          data.orders.map((order: any) => <FeedListItem order={order} />)
        }
      </ul>
    </section>
  )
}