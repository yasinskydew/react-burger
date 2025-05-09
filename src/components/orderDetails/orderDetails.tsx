import styles from './orderDetails.module.css';
import orderImage from '../../images/popup/done.png';
import { useOrder } from '../../services/store/hooks/useOrder';

export default function OrderDetails() {
    const orderStatus: string = 'Ваш заказ начали готовить';
    const orderStatusSubtitle: string = 'Дождитесь готовности на орбитальной станции';
    const { order } = useOrder();

    return (
        <article className={styles.orderPopup}>
            <h1 className={styles.orderPopupTitle + ' text_type_digits-large'}>{order?.order.number}</h1>
            <p className={styles.orderPopupSubtitle + ' text_type_main-medium'}>идентификатор заказа</p>
            <img className={styles.orderPopupImage} src={orderImage} alt="order" />
            <div className={styles.orderPopupText}>
            <p className={styles.orderPopupText + ' text_type_main-small'}>{orderStatus}</p>
            <p className={styles.orderPopupText + ' text_type_main-small text_color_inactive'}>{orderStatusSubtitle}</p>
            </div>
        </article>
    )
}
