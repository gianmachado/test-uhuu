import { createContext, useState, useEffect } from "react";

export const ShoppingContext = createContext({});
export default function ShoppingProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [qtdCart, setqtdCart] = useState(0);
  const [time, setTime] = useState(15 * 60);
  const [valorCart, setValorCart] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const calculaValorTotalCart = () => {
    let valorTotal = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      valorTotal += element.preco * element.qtd;
    }
    return valorTotal;
  };

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time == 0) {
      setCart([]);
    }
  }, [time]);

  useEffect(() => {
    setqtdCart(cart.length);
    setValorCart(calculaValorTotalCart());
  }, [cart]);
  return (
    <ShoppingContext.Provider
      value={{ setCart, cart, qtdCart, minutes, seconds, valorCart, setTime }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
