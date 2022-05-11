import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="tourist-cards d-flex justify-content-between container">
      <div className="card">
        <img
          src="https://www.enel.com/content/dam/enel-com/immagini/master-azienda_2400x1160/storie_2400x1160/vista-serale-glasgow_2400x1160.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.rumbo.es/vuelos/rumbo/img/manchester.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <a href="visitmanchester.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h1>London</h1>
          <a href="visitlondon.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;