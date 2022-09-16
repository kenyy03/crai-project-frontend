import React from 'react';
import './CampusCard.css';
import { Link } from 'react-router-dom';
import { Campus } from '../../interfaces/Campus';
import { Button, Card, CardActions, CardContent } from '@mui/material';

interface CampusProps {
  sedes: Campus;
}

const CampusCard = ({ sedes }: CampusProps) => {
  return (
    <>
      <Card className="card">
        <img
          src={require(`../../assets/${sedes.nameImg}`)}
          alt="Campus"
          className="img-card"
        />
        <CardContent>
          <p className="title-card">
            <span>{sedes.campusName}</span> {sedes.campusPlace}
          </p>
          <p className="direction-campus-card">{sedes.campusDirection}</p>
        </CardContent>
        <CardActions>
          <Button variant="contained">
            <Link
              to={'/rooms'}
              style={{ textDecoration: 'none', color: '#fff' }}
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
