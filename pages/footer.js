import Link from 'next/link';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Footer() {
  return (
<>
  {/* <!-- Grid container --> */}
<footer className="mt-auto text-center text-dark"
        style={{ position:'absolute',
                 left:0,
                 bottom:0,
                 right:0,
                 backgroundColor: '#D9ECF2'
              }}
>
  <div className="Social-media">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Facebook --> */}
      {/* <Button style={{ width: '50px', height: 'auto' }}  variant="outline-dark" className="btn btn-outline-dark btn-floating m-1" href="https://www.facebook.com/Eli.Heuman/">
        <Image style={{ width: '100%', height: 'auto' , position: 'static' }}  src="./image/facebook.png" alt="my image"/>
      </Button> */}

      {/* <!-- Instagram --> */}
      <Button style={{ width: '60px', height: 'auto'}} variant="outline-dark" className="btn btn-outline-dark btn-floating m-1" href="https://www.instagram.com/diana.heuman/" target="_blank" rel='noreferrer'>
        <Image style={{ width: '100%', height: 'auto' }}  src="./image/instagram.png" loading="lazy" alt="Instagram"/>
      </Button>

      {/* <!-- Linkedin --> */}
      <Button   style={{ width: '60px', height: 'auto' }} variant="outline-dark" className="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/diana-heuman/" target="_blank" rel='noreferrer'>
        <Image style={{ width: '100%', height: 'auto' }} src="./image/linkedin.png" loading="lazy" alt="Linkedin"/>
      </Button>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3">
    {/* © 2021 Copyright: */}
    <a className="text-dark">Diana Heuman ©</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
</>
)
};

export default Footer;