// App.js
//@ts-nocheck

import React from "react";
import { ConfigProvider } from "antd";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import theme from "../components/themeConfig";
import "../styles/globals.css";
import NProgress from "nprogress"; //nprogress module
import Router from "next/router";
import Head from 'next/head'; 

//Route Events.

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <NextUIProvider>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </script>
      </head>
      <Component {...pageProps} />
    </NextUIProvider>
  </ConfigProvider>
);

export default App;
