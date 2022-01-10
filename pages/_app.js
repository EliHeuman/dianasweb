import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import NavBar from './navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
