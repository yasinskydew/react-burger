import { useEffect } from "react";
import { FeedList } from "../../components/feed/feedList/feedList"
import { useGetAllOrdersQuery } from "../../services/api/orders";
import { Loader } from "../../components/loader/loader";

export const ProfileOrdersPage = () => {
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
        <FeedList orders={data.orders}  linkUrl='profile/orders' />
    )
}
