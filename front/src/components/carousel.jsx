import granCanaria from '/granCanaria.jpg'
import gomera from '/gomera.jpg'
import palma from '/palma.jpg'


export function Carousel() {
    return <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
       <div className='d-flex justify-content-center align-items-top position-absolute w-100 h-100'>
          <h1>Gran Canaria</h1>
        </div>
        <img src={granCanaria} className="d-block w-100" alt="Gran Canaria" />
      </div>
      <div className="carousel-item">
        <div className='d-flex justify-content-center align-items-top position-absolute w-100 h-100'>
          <h1>La Palma</h1>
        </div>
        <img src={palma} className="d-block w-100" alt="La Palma" />
      </div>
      <div className="carousel-item">
        <div className='d-flex justify-content-center align-items-top position-absolute w-100 h-100'>
          <h1>La Gomera</h1>
        </div>
        <img src={gomera} className="d-block w-100" alt="La Gomera" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
}