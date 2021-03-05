import React, { useContext } from "react";
import { ShoppingContext } from "../Context/ShoppingContext";
import styles from "../styles/TooltipCart.module.css";

export default function TooltipCart() {
  const { cart, valorCart } = useContext(ShoppingContext);
  return (
    <div className={styles.containerOut}>
      {cart.map((item, index) => {
        return (
          <div className={styles.container}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className={styles.infoItem}>
              <p>{item.descricao}</p>
              <p>
                {item.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <strong className={styles.qtdItem}>Qtd: {item.qtd} itens</strong>
            </div>
          </div>
        );
      })}
      <div className={styles.totalizador}>
        <strong>
          Total:
          {valorCart.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
    </div>
  );
}
