// pages/_app.js
import '../styles/global.css'; // Importa o CSS global aqui

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
