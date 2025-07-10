import styles from './feedDashboadrStatusList.module.css'

export enum FeedDashboardOrderStatusEnum {
  pending = 'pending',
  done = 'done'
}

interface FeedDashboardStatusListProps {
  title: string
  orderList: string[]
  orderStatus: FeedDashboardOrderStatusEnum
}

const statusClasses = {
  [FeedDashboardOrderStatusEnum.done]: styles.feedDashboardStatusListDone,
  [FeedDashboardOrderStatusEnum.pending]: styles.feedDashboardStatusListPending,
};

export const FeedDashboardStatusList = (props: FeedDashboardStatusListProps) => {
  return (
    <div>
      <h2 className={'text_type_main-medium'}>{props.title}</h2>
      <div className={styles.feedDashboardStatusList}>
        {props.orderList.map((order) => (
          <div key={order} className={statusClasses[props.orderStatus] + ' text text_type_digits-default'}>{order}</div>
        ))}
      </div>
    </div>
  )
}