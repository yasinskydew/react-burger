import { FeedDashboard } from '../../components/feed/feedDashboard/feedDashboard';
import { FeedList } from '../../components/feed/feedList/feedList';
import styles from './feed.module.css';
import { Loader } from '../../components/loader/loader';
import { useWsOrdersQuery } from '../../services/api/wsOrders';
import { NotFoundPage } from '../notFound/notFoundPage';

export const FeedPage = () => {
  const { data, isError, isLoading } = useWsOrdersQuery();
  const titleText = 'Лента заказов';
  
 

  if (isError || !data) {
    return <NotFoundPage />
  }
  
  if (isLoading || !data.total) {
    return <Loader />
  }
  
  return (
    <div className={styles.feedPage}>
      <h1 className={styles.feedPageTitle + ' text_type_main-large'}>
        {titleText}
      </h1>
      <div className={styles.feedPageContainer}>
        <FeedList orders={data.orders} linkUrl='feed' />
        <FeedDashboard orders={data.orders} total={data.total} totalToday={data.totalToday}/>
      </div>
    </div>
  )
}