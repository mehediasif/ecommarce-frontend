import { createGlobalStyle } from "styled-components"
import '@/styles/globals.css'

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #e0e0e9;
    padding:0;
    margin:0;
    font-family: 'Monoton', cursive;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles />
    <Component {...pageProps} />
    
    </>
)}
