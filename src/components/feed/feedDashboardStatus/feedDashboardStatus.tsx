import { FeedDashboardOrderStatusEnum, FeedDashboardStatusList } from '../feedDashboadrStatusList/feedDashboadrStatusList'
import styles from './feedDashboardStatus.module.css'

interface FeedDashboardStatusProps {
  doneList: string[]
  pendingList: string[]
}

export const FeedDashboardStatus = (props: FeedDashboardStatusProps) => {
  return (
    <article className={styles.feedDashboardStatus}>
      <FeedDashboardStatusList 
        title='Готовы:'
        orderList={props.doneList}
        orderStatus={FeedDashboardOrderStatusEnum.done}
      />
      <FeedDashboardStatusList 
        title='В работе:'
        orderList={props.pendingList}
        orderStatus={FeedDashboardOrderStatusEnum.pending}
      />
    </article>
  )
}