import styles from './modal.module.css';

interface ModalOverlayProps {
    onClose: () => void;
}

export default function ModalOverlay({ onClose }: ModalOverlayProps) {
    return (
        <div className={styles.modal_overlay} onClick={onClose} />
    );
} 