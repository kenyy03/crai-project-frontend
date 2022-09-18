import React from 'react';
import Header from '../Header/Header';
import './Room.css';
import { Link } from 'react-router-dom';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, Card } from '@mui/material';

const Room = () => {
  return (
    <>
      <Header />
      <div className="rooms-container">
        <h1 style={{ marginBottom: '1rem' }}>Ceutec Sede Central</h1>
        <Card className="room-container">
          <LooksOneIcon className="icon-room" />
          <div style={{ marginRight: '2.5%' }}>
            <h3 style={{ color: '#000', marginBottom: 4 }}>Sala 1</h3>
            <CheckCircleIcon className="available-icon" />
            <h4 style={{ fontSize: 13, color: '#a4a4a4' }}>Disponible</h4>
          </div>

          <Button variant="outlined" style={{ width: '88%' }}>
            <Link to={'/rooms/reservation-form'} className="room-button">
              Reservar
            </Link>
          </Button>
        </Card>

        <Card className='room-container'>
          <LooksTwoIcon className="icon-room" />
          <div style={{ marginRight: '2.5%' }}>
            <h3 style={{ color: '#000', marginBottom: 4 }}>Sala 2</h3>
            <CheckCircleIcon className="available-icon" />
            <h4 style={{ fontSize: 13, color: '#a4a4a4' }}>Disponible</h4>
          </div>

          <Button variant="outlined" style={{ width: '88%' }}>
            <Link to={'/rooms/reservation-form'} className="room-button">
              Reservar
            </Link>
          </Button>
        </Card>

        <Card className="room-container">
          <Looks3Icon className="icon-room" />
          <div style={{ marginRight: '2.5%' }}>
            <h3 style={{ color: '#000', marginBottom: 4 }}>Sala 3</h3>
            <CheckCircleIcon className="available-icon" />
            <h4 style={{ fontSize: 13, color: '#a4a4a4' }}>Disponible</h4>
          </div>

          <Button variant="outlined" style={{ width: '88%' }}>
            <Link to={'/rooms/reservation-form'} className="room-button">
              Reservar
            </Link>
          </Button>
        </Card>

        <Card className="room-container">
          <Looks4Icon className="icon-room" />
          <div style={{ marginRight: '2.5%' }}>
            <h3 style={{ color: '#000', marginBottom: 4 }}>Sala 4</h3>
            <CheckCircleIcon className="available-icon" />
            <h4 style={{ fontSize: 13, color: '#a4a4a4' }}>Disponible</h4>
          </div>

          <Button variant="outlined" style={{ width: '88%' }}>
            <Link to={'/rooms/reservation-form'} className="room-button">
              Reservar
            </Link>
          </Button>
        </Card>

        <Card className="room-container">
          <Looks5Icon className="icon-room" />
          <div style={{ marginRight: '2.5%' }}>
            <h3 style={{ color: '#000', marginBottom: 4 }}>Sala 5</h3>
            <CheckCircleIcon className="available-icon" />
            <h4 style={{ fontSize: 13, color: '#a4a4a4' }}>Disponible</h4>
          </div>

          <Button variant="outlined" style={{ width: '88%' }}>
            <Link to={'/rooms/reservation-form'} className="room-button">
              Reservar
            </Link>
          </Button>
        </Card>
      </div>
    </>
  );
};

export default Room;
