import { OrdersStatusEnum } from '../../../services/types';
import { getChunks } from '../../../services/utils/chunks';
import styles from './feedDashboadrStatusList.module.css'
import { FeedDashboardStatusListColumn } from './feedDashboadrStatusListColumn';

interface FeedDashboardStatusListProps {
  title: string
  orderList: string[]
  orderStatus: OrdersStatusEnum
}

export const FeedDashboardStatusList = (props: FeedDashboardStatusListProps) => {
  const chunks = getChunks(props.orderList, 10);
  return (
    <div>
      <h2 className={'text_type_main-medium'}>{props.title}</h2>
      <div className={styles.feedDashboardColumnList}>
        {
          chunks.map((chunk, index) => {
            return (
              <FeedDashboardStatusListColumn
                key={index}
                orderList={chunk}
                orderStatus={props.orderStatus}
              />
            )
          })
        }
      </div>
    </div>
  )
}