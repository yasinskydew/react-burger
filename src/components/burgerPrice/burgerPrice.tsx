import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burgerPrice.module.css';

interface BurgerPriceProps {
  price: number;
  size?: 'default' | 'large';
}

export default function BurgerPrice({ price, size = 'default' }: BurgerPriceProps) {

  const priceTextClass = size === 'large' ? styles.price_large_text : styles.price_text;

  return (
    <div className={styles.price}>
        <h2 className={'text_type_digits-default ' + priceTextClass}>{price}</h2>
        <CurrencyIcon type="primary" className={size === 'large' ? styles.price_large_icon : ''}/>
    </div>
  );
}
