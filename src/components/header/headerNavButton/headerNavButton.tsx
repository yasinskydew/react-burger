import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { TIconProps } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";
import styles from './headerNavButton.module.css';
import { NavLink } from "react-router-dom";

interface HeaderNavButtonProps {
    Icon: FC<TIconProps>;
    text: string;
    path: string;
    'data-testid'?: string;
}

export default function HeaderNavButton(
    { Icon, text, path, 'data-testid': testId }: HeaderNavButtonProps
) {
    return (
      <NavLink to={path} className={styles.header_navigation_link}>
       {({isActive}) => (
        <Button 
          htmlType="button" 
          size="medium" 
          type="secondary" 
          extraClass={styles.header_button}
          data-testid={testId}
        >
          <Icon type={isActive ? "primary" : "secondary"} />
          <span className={isActive 
            ? styles.header_button_text 
            : styles.header_button_text_secondary
          }>{text}</span>
        </Button>
      )}
      </NavLink>
    )
}