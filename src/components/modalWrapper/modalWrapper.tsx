import { LinksList, ModalLinkItem } from '../linksList/linksList';
import styles from './modalWrapper.module.css';

interface ModalWrapperProps {
  children: React.ReactNode;
  title: string;
  links?: ModalLinkItem[];
}

export const ModalWrapper = (props: ModalWrapperProps) => {
  const { children, title, links } = props;
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_content}>
        <h1 className={styles.title + ' text text_type_main-medium'}>{title}</h1>
        {children}
        {links && <LinksList links={links} />}
      </div>
    </div>
  )
}