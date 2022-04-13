import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { ListContinentsProvider } from '../contexts/listContinentsContext';
import '../../styles/SwiperConfig.css';
import { makeServer } from '../server';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ListContinentsProvider>      
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ListContinentsProvider>
  )
}