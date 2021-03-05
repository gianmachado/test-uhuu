import TopBar from "../Components/TopBar";
import ShoppingProvider from "../Context/ShoppingContext";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingProvider>
      <TopBar Component={Component} />
      <div className={styles.containerCentral}>
        <Component {...pageProps} />
      </div>
    </ShoppingProvider>
  );
}

export default MyApp;
