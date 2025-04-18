import styles from './button.module.css'

const buttonVariants = {
    secondary: styles.filled,
    dashed: styles.dashed,
}

const buttonSizes = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
}

const buttonText = {
    secondary: styles.button_text_dashed,
    dashed: styles.button_text_dashed,
}

interface ButtonProps {
    icon: React.ReactNode;
    variant: 'secondary' | 'dashed';
    size: 'small' | 'medium' | 'large';
    inactive: boolean;
    children: React.ReactNode;
}

function Button(props: ButtonProps) {
    const { icon, variant, size, inactive, children } = props;
    return (
        <button className={`${styles.customButton} ${buttonVariants[variant]} ${buttonSizes[size]}` }>
            {!!icon && icon}
            <p className={`${styles.button_text} ${buttonText[variant]} ${inactive ? styles.inactive : ''}` }>{children}</p>
        </button>
    )
}

export default Button;