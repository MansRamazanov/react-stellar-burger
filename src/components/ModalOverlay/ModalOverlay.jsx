import React, { useEffect } from 'react';
import styles from './ModalOverlay.module.css'

const ModalOverlay = (props) => {
    // console.log({ active, setActive })
    useEffect(() => {
        const keyDownHandler = event => {
            console.log('User pressed: ', event.key);
      
            if (event.key === 'Escape') {
                setActive(false)
            }
          };
          document.addEventListener('keydown', keyDownHandler);
          return () => {
            document.removeEventListener('keydown', keyDownHandler);
          };
        }, []);
    return (
        <div className={active ? styles.overlayActive : styles.overlay } onClick={() => props.onClose}>
        </div>
    );
}

export default ModalOverlay;
