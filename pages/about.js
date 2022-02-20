import Image from 'next/image';

export default function AboutPage() {
    return (
      <>
  <main className="container" >
  {/* <!-- Bio information area --> */}
<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading"><span className="text-muted">About me</span></h2>
    <p className="lead">Hi,
I'm Diana, and if you feel like your marketing efforts are falling flat, I'm here to help. I combine my experience in business with my background in visual media to create a marketing impact. Together we'll build a plan that fits your business needs and resources.</p>
    <ul className="list-group">
      <li className="list-group-item">
      <div className="md-v-line"></div>
        <i className="fas fa-cogs mr-5">
          <ul>B.A in Multidisciplinary Arts (Tel Aviv University)</ul>
          <ul>Postgraduate Diploma in Digital Business (Columbia University)</ul>
        </i>
      </li>
    </ul>
    <p className="lead">So let's connect. I'd love to have a chat about your business.</p>    
  </div>
  {/* <!-- Eli Heuman picture image insert --> */}
  <div className="col-md-5 order-md-1">
    <Image src="/diana.jpg" alt="Diana Heuman picture" width="500px" height="500px"/>
  </div>
</div>

</main>
{/* <!-- /.container --> */}

</>

    )
  }