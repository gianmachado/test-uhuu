import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styles from "../styles/ModalConfirm.module.css";

export default function ModalConfirmPedido({ closePopUp }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <CheckCircleIcon />
        <p>Pedido realizado com sucesso!</p>
        <button onClick={closePopUp}>Fechar</button>
      </div>
    </div>
  );
}
