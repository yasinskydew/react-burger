import { useEffect } from "react";
import { FeedList } from "../../components/feed/feedList/feedList"
import { Loader } from "../../components/loader/loader";
import { useWsUserOrdersQuery } from "../../services/api/wsOrders";

export const ProfileOrdersPage = () => {
    const { data, isError, isLoading } = useWsUserOrdersQuery();


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
        <FeedList orders={data.orders}  linkUrl='profile/orders' />
    )
}
