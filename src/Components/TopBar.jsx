import React, { useContext, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "../styles/TopBar.module.css";
import { ShoppingContext } from "../Context/ShoppingContext";
import { Badge, Tooltip } from "@material-ui/core";

import Link from "next/link";
import TooltipCart from "./TooltipCart";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
  },
}))(Tooltip);

export default function TopBar({ Component }) {
  const { qtdCart } = useContext(ShoppingContext);

  // console.log(Component.name);

  return (
    <header className={styles.content}>
      <Link href="/">
        <ArrowBackIcon
          style={{ visibility: Component.name === "Home" && "hidden" }}
        />
      </Link>

      <img src="logo.png" alt="logo" width="120px" />
      <Badge
        badgeContent={qtdCart}
        color="secondary"
        style={{ visibility: Component.name === "Cart" && "hidden" }}
      >
        <Link href="/Cart">
          {qtdCart > 0 ? (
            <LightTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
              title={<TooltipCart />}
            >
              <ShoppingCartIcon />
            </LightTooltip>
          ) : (
            <ShoppingCartIcon />
          )}
        </Link>
      </Badge>
    </header>
  );
}
