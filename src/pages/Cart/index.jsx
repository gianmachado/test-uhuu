import React, { useContext, useState } from "react";
import styles from "../../styles/Cart.module.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { ShoppingContext } from "../../Context/ShoppingContext";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ModalConfirmPedido from "../../Components/ModalConfirmPedido";

export default function Cart() {
  const { cart, setCart, minutes, seconds, valorCart, setTime } = useContext(
    ShoppingContext
  );
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");
  const [open, setOpen] = useState(false);

  const addToCart = (item) => {
    let auxCart = [...cart];

    auxCart
      .filter((element) => element.id === item.id)
      .map((element, index) => {
        element.qtd += 1;
      });

    setCart(auxCart);
  };

  const removeToCart = (item) => {
    let auxCart = [...cart];

    auxCart.map((element, index) => {
      if (element.id === item.id) {
        if (element.qtd >= 2) {
          element.qtd -= 1;
        } else {
          auxCart.splice(index, 1);
        }
      }
    });

    setCart(auxCart);
  };

  const closeModalFinalizar = () => {
    setCart([]);
    setOpen(false);
  };

  return (
    <>
      {open && <ModalConfirmPedido closePopUp={() => closeModalFinalizar()} />}
      <div className={styles.container}>
        <h1>Finalizar Pedido</h1>

        <div className={styles.header}>
          <div>
            <LocalMallIcon style={{ fontSize: "6rem", color: "black" }} />
          </div>
          <div>
            <strong>Armazén do Gian Niehues</strong>
            <p>
              {minuteLeft}
              {minuteRight}:{secondLeft}
              {secondRight} restantes
            </p>
          </div>
        </div>

        {cart.length > 0 ? (
          <div>
            <strong>Revise os seus itens</strong>

            {cart.map((item, index) => {
              return (
                <div className={styles.gridCart} key={index}>
                  <div className={styles.gridItem}>
                    <div>
                      <RemoveCircleIcon onClick={() => removeToCart(item)} />
                      <strong> {item.qtd}</strong>
                      <AddCircleIcon onClick={() => addToCart(item)} />
                    </div>

                    <span>{item.descricao}</span>
                    <strong>
                      {(item.preco * item.qtd).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </strong>
                  </div>
                </div>
              );
            })}
            <div className={styles.gridCart}>
              <div className={styles.gridItem}>
                <div>
                  <strong>Total</strong>
                </div>

                <strong>
                  {valorCart.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>
            </div>
            <div className={styles.containerFinish}>
              <button onClick={() => setOpen(true)}>
                Finalizar Compra <ShoppingCartIcon />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <p> Seu carrinho está vazio! </p>
            <SentimentDissatisfiedIcon />
          </div>
        )}
      </div>
    </>
  );
}
