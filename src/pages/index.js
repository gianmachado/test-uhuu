import React, { useState, useEffect, useContext } from "react";
import { ShoppingContext } from "../Context/ShoppingContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [filterCategoria, setFilterCategoria] = useState(0);
  const [filteredRows, setfilteredRows] = useState([]);

  const { teste, setCart, cart } = useContext(ShoppingContext);

  const categorias = [
    {
      id: 0,
      name: "Bebidas",
    },
    {
      id: 1,
      name: "Doces",
    },
    {
      id: 2,
      name: "Salgados",
    },
    {
      id: 3,
      name: "Padaria",
    },
  ];

  const produtos = [
    {
      id: 0,
      idCategoria: 0,
      name: "CocaColaLata",
      descricao: "Coca-Cola 250ml",
      preco: 3.5,
      image: "coca.png",
      qtd: 1,
    },
    {
      id: 1,
      idCategoria: 0,
      name: "Fanta",
      descricao: "Fanta Laranja 350ml",
      preco: 3.0,
      image: "fanta.png",
      qtd: 1,
    },
    {
      id: 2,
      idCategoria: 1,
      name: "Croassaint",
      descricao: "Croassaint Combo 20Un.",
      preco: 30.5,
      image: "croassaint.png",
      qtd: 1,
    },
    {
      id: 3,
      idCategoria: 2,
      name: "doritos",
      descricao: "Doritos",
      preco: 10.0,
      image: "doritos.png",
      qtd: 1,
    },
    {
      id: 4,
      idCategoria: 3,
      name: "mortadela",
      descricao: "Mortadela 1kg",
      preco: 8.5,
      image: "mortadela.png",
      qtd: 1,
    },
    {
      id: 5,
      idCategoria: 3,
      name: "paoFrances",
      descricao: "Pão Francês 1Un.",
      preco: 0.5,
      image: "paoFrances.png",
      qtd: 1,
    },
  ];

  const addItemCart = (item) => {
    let auxCart = [...cart];

    const check = auxCart.findIndex((element) => element.id === item.id);
    if (check === -1) {
      item.qtd = 1;
      auxCart.push(item);
    } else {
      auxCart
        .filter((element) => element.id === item.id)
        .map((element, index) => {
          element.qtd += 1;
        });
    }

    setCart(auxCart);
  };

  useEffect(() => {
    setfilteredRows(
      produtos.filter((item) => item.idCategoria == filterCategoria)
    );
  }, [filterCategoria]);

  return (
    <>
      <select onChange={(e) => setFilterCategoria(e.target.value)}>
        {categorias.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>

      <div className={styles.listProdutos}>
        {filteredRows.map((item, index) => {
          return (
            <div>
              <img src={item.image} alt={item.id} />
              <span key={index}>{item.descricao} </span>
              <button onClick={() => addItemCart(item)}>
                Adicionar no carrinho
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
