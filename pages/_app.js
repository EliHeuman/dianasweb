import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import NavBar from './navbar';
import Footer from './footer';
import Head from 'next/head';
import Layout from './layout';
import Main from './Main';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      {/* <!-- Google Fonts --> */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i" rel="stylesheet"></link>
        <title>Diana Heuman</title>
      </Head>
      <NavBar/>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
      <Footer/>
    </div>
  )
}

export default MyApp
