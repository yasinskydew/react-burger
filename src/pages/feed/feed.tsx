import { useEffect } from 'react';
import { FeedDashboard } from '../../components/feed/feedDashboard/feedDashboard';
import { FeedList } from '../../components/feed/feedList/feedList';
import styles from './feed.module.css';
import { useGetAllOrdersQuery } from '../../services/api/orders';
import { Loader } from '../../components/loader/loader';

export const FeedPage = () => {

  const titleText = 'Лента заказов';
  const { data, isLoading, isError } = useGetAllOrdersQuery()

  useEffect(() => {
    if(isLoading) {
        return;
    }
    
    if(isError) {
        return;
    }
      
  }, [data, isLoading, isError]);

  
  if (isLoading) {
      return <Loader />
  }

  if(!data?.orders) {
    return (
      <div>Error</div>
    )
  }
  
  return (
    <div className={styles.feedPage}>
      <h1 className={styles.feedPageTitle + ' text_type_main-large'}>
        {titleText}
      </h1>
      <div className={styles.feedPageContainer}>
        <FeedList orders={data.orders} linkUrl='feed' />
        <FeedDashboard data={data}/>
      </div>
    </div>
  )
}