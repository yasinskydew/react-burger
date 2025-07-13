import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './orderTotalPrice.module.css'

export const OrderTotalPrice = ({ totalPrice }: { totalPrice: string }) => {

  
  return (
    <div className={styles.feedListItemTotal}>
      <span className='text text_type_digits-default'>{totalPrice}</span>
      <CurrencyIcon type="primary" />
    </div>
  )
}