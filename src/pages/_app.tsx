// App.js
//@ts-nocheck

import React from "react";
import { ConfigProvider } from "antd";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import theme from "../components/themeConfig";
import "../styles/globals.css";
import NProgress from 'nprogress'; //nprogress module
import Router from 'next/router';

//Route Events. 


Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <NextUIProvider>
        <Component {...pageProps} />
    </NextUIProvider>
  </ConfigProvider>
);

export default App;
