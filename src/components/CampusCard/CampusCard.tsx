import React from 'react';
import './CampusCard.css';
import { Link } from 'react-router-dom';
import { Campus } from '../../interfaces/Campus';

interface CampusProps  {
  sedes: Campus;
}

const CampusCard = ({sedes}:CampusProps) => {
  return (
    <div className="card">
      <img src={require(`../../assets/${sedes.nameImg}`)} alt='Campus' className='img-card' />
      <div className="content-card">
        <p className="title-card">
          <span>{sedes.campusName}</span> {sedes.campusPlace}
        </p>
        <p className="direction-campus-card">
          {sedes.campusDirection}
        </p>
      </div>
      <Link to={'/rooms'} className="button-card" >Reservar ahora</Link>
    </div>
  );
};

export default CampusCard;
