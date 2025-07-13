import styles from './feedDashboardTotal.module.css';
interface FeedDashboardTotalProps {
  title: string;
  value: number;
}
export const FeedDashboardTotal = (props: FeedDashboardTotalProps) => {
  return (
    <article className={styles.feedDashboardTotal}>
      <h2 className={'text text_type_main-medium'}>{props.title}</h2>
      <div className={styles.feedDashboardTotalValue + ' text text_type_digits-large'}>{props.value}</div>
    </article>
  )
}