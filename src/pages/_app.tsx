import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import {CssBaseline} from "@mui/material";
import Header from "./components/Header";
import Layout from "./components/Layout"

const lightTheme = createTheme({type: "light"})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={lightTheme}>
      <CssBaseline />
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}
