import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // 👈 REQUIRED!
import '@/styles/globals.css';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider defaultColorScheme="light">
      <Component {...pageProps} />
    </MantineProvider>
  );
}
