import React from 'react';
import styles from './modal.module.css';

interface ModalOverlayProps {
    onClose: () => void;
    [key: string]: any; // allow forwarding data-testid
}

export default function ModalOverlay({ onClose, ...rest }: ModalOverlayProps) {
    return (
        <div className={styles.modal_overlay} onClick={onClose} {...rest} />
    );
} 