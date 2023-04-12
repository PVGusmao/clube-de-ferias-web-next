import ComponentApp from './ComponentApp';

import { MyProvider } from '@/context/MyContext';

import { ThemeProvider } from "@material-tailwind/react";

import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <ThemeProvider>
        <ComponentApp Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </MyProvider>
  )
}
