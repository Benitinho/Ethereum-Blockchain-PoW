import hierro from '/hierro.jpg'
import gomera from '/gomera.jpg'
import granCanaria from '/granCanaria.jpg'
import palma from '/palma.jpg'


export function Card() {
    return <div className="row row-cols-1 row-cols-md-2 g-4">
       <div className="col">
       <div className="card">
      <img src={hierro} className="card-img-top" alt="El Hierro"  width="100" height="300" />
      <div className="card-body">
        <h5 className="card-title">El Hierro</h5>
        <p className="card-text">El Hierro is a volcanic island in the Canary Islands, known for its stunning landscapes, pristine waters, and sustainable energy initiatives. It offers a unique blend of natural beauty and ecological innovation.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={gomera} className="card-img-top" alt="La Gomera"  width="100" height="300" />
      <div className="card-body">
        <h5 className="card-title">La Gomera</h5>
        <p className="card-text">La Gomera is a lush and rugged island in the Canary Islands, famous for its dense laurel forests, dramatic cliffs, and rich cultural heritage. It's a paradise for hikers, nature lovers, and those seeking tranquility.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={granCanaria} className="card-img-top" alt="Gran Canaria"  width="100" height="300" />
      <div className="card-body">
        <h5 className="card-title">Gran Canaria</h5>
        <p className="card-text">Gran Canaria, part of the Canary Islands, is a diverse island with golden sand dunes, lush forests, and vibrant cities. It offers stunning beaches, vibrant nightlife, and a rich history and culture, making it a popular tourist destination.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={palma} className="card-img-top" alt="la palma"  width="100" height="300" />
      <div className="card-body">
        <h5 className="card-title">La Palma</h5>
        <p className="card-text">La Palma, known as the "Isla Bonita," is a volcanic island in the Canary Islands. It boasts pristine nature reserves, stunning black sand beaches, and the world-famous Caldera de Taburiente, making it a paradise for nature enthusiasts and stargazers.</p>
      </div>
    </div>
  </div>
</div>
    
    

}