import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import {CssBaseline} from "@mui/material";

const lightTheme = createTheme({type: "light"})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
