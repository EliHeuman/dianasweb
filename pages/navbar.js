import Link from 'next/link';
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

function NavBar() {
  return (
<>
{/* <!-- ======= Header ======= --> */}
 <header id="header" class="fixed-top d-flex align-items-center">
 <div class="container d-flex align-items-center justify-content-between">

   <div class="logo">
     <h1 class="text-light"><a href="index.html"><span>Diana Heuman Digital Marketing</span></a></h1>
     <h1>WEBSITE IS UNDER CONSTRUCTION</h1>
     {/* <!-- Uncomment below if you prefer to use an image logo --> */}
     {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
   </div>

   <nav id="navbar" class="navbar">
     <ul>
       <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
       <li><a class="nav-link scrollto" href="#about">About</a></li>
       <li><a class="nav-link scrollto" href="#services">Services</a></li>
       {/* <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li> */}
       {/* <li><a class="nav-link scrollto" href="#team">Team</a></li> */}
       {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
         <ul>
           <li><a href="#">Drop Down 1</a></li>
           <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
             <ul>
               <li><a href="#">Deep Drop Down 1</a></li>
               <li><a href="#">Deep Drop Down 2</a></li>
               <li><a href="#">Deep Drop Down 3</a></li>
               <li><a href="#">Deep Drop Down 4</a></li>
               <li><a href="#">Deep Drop Down 5</a></li>
             </ul>
           </li>
           <li><a href="#">Drop Down 2</a></li>
           <li><a href="#">Drop Down 3</a></li>
           <li><a href="#">Drop Down 4</a></li>
         </ul>
       </li> */}
       {/* <li><a class="nav-link scrollto" href="#contact">Contact</a></li> */}
       <li><a class="getstarted scrollto" href="#contact">Get Started Contact Me</a></li> 
       {/* <li><a class="getstarted scrollto" href="#about">Get Started</a></li> */}
     </ul>
     <i class="bi bi-list mobile-nav-toggle"></i>
   </nav>
   {/* <!-- .navbar --> */}

 </div>
</header>
{/* <!-- End Header --> */}
</>
  )
}

export default NavBar