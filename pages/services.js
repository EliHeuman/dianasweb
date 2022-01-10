import Image from 'next/image';

export default function Services() {
    return (
        <div className="card bg-dark text-white">
        <Image src="/../public/contact.jpg" className="img-fluid" width="1600" height="900"  alt="home page"/>
            {/* <img className="card-img" src="/../public/home.jpg" alt="Card image"> */}
            <div className="card-img-overlay">
              {/* <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Last updated 3 mins ago</p> */}
            </div>
        </div>

    )
  }