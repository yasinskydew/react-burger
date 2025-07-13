import React from 'react';
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
    isOpen: boolean,
    extraTitleStyle?: string
}

export default function Modal(props: ModalProps) {
    const { children, onClose, title, isOpen, extraTitleStyle } = props;

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

    const titleStyle = styles.modal_title +  (extraTitleStyle ? ` ${extraTitleStyle}` :  ' text_type_main-large');

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={onClose} data-testid="modal-overlay" />
            <div className={styles.modal} data-testid="modal">
                <div className={styles.modal_header}>
                    <h2 className={titleStyle}>{title}</h2>
                    <button className={styles.modal_close} data-testid="modal-close" onClick={onClose}><img src={closeIcon} alt="close" /></button>
                </div>
                <div className={styles.modal_content}>
                    {children}
                </div>
            </div>
        </>,
        modalRoot
    );
}
