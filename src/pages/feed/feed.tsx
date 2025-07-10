import { FeedDashboard } from '../../components/feed/feedDashboard/feedDashboard';
import { FeedList } from '../../components/feed/feedList/feedList';
import styles from './feed.module.css';

export const FeedPage = () => {

  const titleText = 'Лента заказов';

  const data = {
    "success": true,
    "orders": [
      {
        "_id": "686eca085a54df001b6dd715",
        "ingredients": [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0941",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa093d"
        ],
        "status": "done",
        "name": "Space флюоресцентный био-марсианский бургер",
        "createdAt": "2025-07-09T19:59:04.526Z",
        "updatedAt": "2025-07-09T19:59:05.356Z",
        "number": 84017
        },
        {
        "_id": "686ebde65a54df001b6dd708",
        "ingredients": [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0941",
        "643d69a5c3f7b9001cfa093d"
        ],
        "status": "done",
        "name": "Флюоресцентный био-марсианский бургер",
        "createdAt": "2025-07-09T19:07:18.745Z",
        "updatedAt": "2025-07-09T19:07:19.596Z",
        "number": 84016
        },
        {
        "_id": "686ea94a5a54df001b6dd6e2",
        "ingredients": [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0942",
        "643d69a5c3f7b9001cfa0944",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa093d"
        ],
        "status": "done",
        "name": "Флюоресцентный антарианский space традиционный-галактический spicy бургер",
        "createdAt": "2025-07-09T17:39:22.573Z",
        "updatedAt": "2025-07-09T17:39:23.277Z",
        "number": 84015
        },
        {
        "_id": "686ea1ae5a54df001b6dd6cd",
        "ingredients": [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0944",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa0942",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa093d"
        ],
        "status": "done",
        "name": "Флюоресцентный антарианский space традиционный-галактический spicy бургер",
        "createdAt": "2025-07-09T17:06:54.889Z",
        "updatedAt": "2025-07-09T17:06:55.689Z",
        "number": 84014
        },
    ],
    "total": 83658,
    "totalToday": 86
    }


  return (
    <div className={styles.feedPage}>
      <h1 className={styles.feedPageTitle + ' text_type_main-large'}>
        {titleText}
      </h1>
      <div className={styles.feedPageContainer}>
        <FeedList data={data}/>
        <FeedDashboard data={data}/>
      </div>
    </div>
  )
}