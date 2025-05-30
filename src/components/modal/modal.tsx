import styles from './modal.module.css'
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import ModalOverlay from './modal-overlay';
import closeIcon from '../../images/popup/close-icon.svg';

const modalRoot = document.getElementById("react-modals") as Element;

interface ModalProps {
    children: React.ReactNode,
    title: string,
    onClose: () => void,
    isOpen: boolean
}

export default function Modal(props: ModalProps) {
    const { children, onClose, title, isOpen } = props;

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={onClose} />
            <div className={styles.modal}>
                <div className={styles.modal_header}>
                    <h2 className={styles.modal_title + ' text_type_main-large'}>{title}</h2>
                    <button className={styles.modal_close} onClick={onClose}><img src={closeIcon} alt="close" /></button>
                </div>
                <div className={styles.modal_content}>
                    {children}
                </div>
            </div>
        </>,
        modalRoot
    );
}
