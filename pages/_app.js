// https://nextjs.org/learn/basics/assets-metadata-css/global-styles
// グローバルに適用させたいCSSをここでインポートする
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}