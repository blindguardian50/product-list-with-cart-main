import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.tsx'
import './scss/global.scss'
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./App/theme.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
