import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burgerPrice.module.css';

interface BurgerPriceProps {
  size?: 'default' | 'large';
  price?: number;
}

export default function BurgerPrice({ size = 'default', price = 0 }: BurgerPriceProps) {

  const priceTextClass = size === 'large' ? styles.price_large_text : styles.price_text;

  return (
    <div className={styles.price} data-testid="burger-price">
        <h2 className={'text_type_digits-default ' + priceTextClass} data-testid="burger-price-text">{price}</h2>
        <CurrencyIcon type="primary" className={size === 'large' ? styles.price_large_icon : ''} />
    </div>
  );
}
