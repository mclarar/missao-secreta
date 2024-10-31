import React from 'react';
import styles from './styles.module.css';

export const Modal = ({ onAccept }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Você aceita a missão?</h2>
        <button onClick={onAccept}>Sim</button>
        <button onClick={onAccept}>Sim</button>
      </div>
    </div>
  );
};
