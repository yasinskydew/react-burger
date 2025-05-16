import { Link } from 'react-router-dom';
import styles from './linksList.module.css';

export interface ModalLinkItem {
    text: string;
    linkText: string;
    to: string;
}

interface LinksListProps {
    links: ModalLinkItem[];
}

export const LinksList: React.FC<LinksListProps> = ({ links }) => {
    return (
        <div className={styles.links_container}>
            {links.map((item, index) => (
                <div key={index} className={'text text_type_main-default text_color_inactive'}>
                    {item.text} <Link to={item.to} className={styles.link}>{item.linkText}</Link>
                </div>
            ))}
        </div>
    );
} 