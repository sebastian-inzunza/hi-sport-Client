import React from 'react';
import { ConfigProvider } from 'antd';
import {NextUIProvider} from "@nextui-org/react";
import type { AppProps } from 'next/app';
import theme from './themeConfig';
import '../styles/globals.css';


const App = ({ Component, pageProps }: AppProps) => (
	<ConfigProvider theme={theme}>
		<NextUIProvider>
			<Component {...pageProps} />
		</NextUIProvider>
	</ConfigProvider> 
);

export default App;