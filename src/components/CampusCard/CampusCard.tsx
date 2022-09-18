import React, { useState } from 'react';
import './CampusCard.css';
import { Link } from 'react-router-dom';
import { Campus } from '../../interfaces/Campus';
import { Button, Card, CardActions, CardContent } from '@mui/material';

interface CampusProps {
  sedes: Campus;
}

const CampusCard = ({ sedes }: CampusProps, index:number) => {
  const [sedeSelected, setSedeSelected] = useState<Campus>();
  return (
    <>
      <Card className="card">
          <img
            src={require(`../../assets/${sedes.nameImg}`)}
            alt="Campus"
            className="img-card"
          />
          <CardContent className='content-card'>
            <p className="title-card">
              <span>{sedes.campusName}</span> {sedes.campusPlace}
            </p>
            <p className="direction-campus-card">{sedes.campusDirection}</p>
          </CardContent>
          <CardActions className="card-actions">
            <Button variant="contained" className="button-card">
              <Link
                to={`/rooms`}
                style={{ textDecoration: 'none', color: '#fff' }}
                onClick={() => setSedeSelected(sedes)}
              >
                Reservar ahora
              </Link>
            </Button>
          </CardActions>
      </Card>
    </>
  );
};

export default CampusCard;
