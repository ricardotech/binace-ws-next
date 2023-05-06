"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import io from "socket.io-client";
import { formatarBRL } from "@/utils/formatarBRL";

export default function Home() {
  const socket = io("http://localhost:3850", {
    transports: ["websocket"],
    reconnectionAttempts: 3,
  });

  const [btcPrice, setBtcPrice] = useState<{
    price: number;
    percentChange: number;
  }>();
  const [ethPrice, setEthPrice] = useState<{
    price: number;
    percentChange: number;
  }>();
  const [ltcPrice, setLtcPrice] = useState<{
    price: number;
    percentChange: number;
  }>();
  const [dogePrice, setDogePrice] = useState<{
    price: number;
    percentChange: number;
  }>();

  useEffect(() => {
    socket.on(
      "btcPriceUpdate",
      ({ price, percentChange }: { price: any; percentChange: any }) => {
        setBtcPrice({
          price: price,
          percentChange: percentChange,
        });
      }
    );

    socket.on(
      "ethPriceUpdate",
      ({ price, percentChange }: { price: any; percentChange: any }) => {
        setEthPrice({
          price: price,
          percentChange: percentChange,
        });
      }
    );

    socket.on(
      "ltcPriceUpdate",
      ({ price, percentChange }: { price: any; percentChange: any }) => {
        setLtcPrice({
          price: price,
          percentChange: percentChange,
        });
      }
    );

    socket.on(
      "dogePriceUpdate",
      ({ price, percentChange }: { price: any; percentChange: any }) => {
        setDogePrice({
          price: price,
          percentChange: percentChange,
        });
      }
    );

    return () => {
      socket.off("btcPriceUpdate");
      socket.off("ethPriceUpdate");
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202123",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
      }}
    >
      {btcPrice && (
        <div
          style={{
            color: btcPrice.percentChange > 0 ? "green" : "red",
            fontSize: "1.5rem",
          }}
        >
          BTC: {formatarBRL(btcPrice.price)} ({btcPrice.percentChange})
        </div>
      )}
      {ethPrice && (
        <div
          style={{
            marginLeft: 20,
            color: ethPrice.percentChange > 0 ? "green" : "red",
            fontSize: "1.5rem",
          }}
        >
          ETH: {formatarBRL(ethPrice.price)} ({ethPrice.percentChange})
        </div>
      )}
      {ltcPrice && (
        <div
          style={{
            marginLeft: 20,
            color: ltcPrice.percentChange > 0 ? "green" : "red",
            fontSize: "1.5rem",
          }}
        >
          LTC: {formatarBRL(ltcPrice.price)} ({ltcPrice.percentChange})
        </div>
      )}
      {dogePrice && (
        <div
          style={{
            marginLeft: 20,
            color: dogePrice.percentChange > 0 ? "green" : "red",
            fontSize: "1.5rem",
          }}
        >
          DOGE: {formatarBRL(dogePrice.price)} ({dogePrice.percentChange})
        </div>
      )}
    </div>
  );
}
