import React from 'react';
import { Campus } from '../../interfaces/Campus';
import Header from '../Header/Header';
import './Room.css';
import { Link } from 'react-router-dom';

const Room = () => {
  return (
    <>
      <Header />
      <div className="rooms-container">
        <h1 style={{ marginBottom: '1rem' }}>Ceutec Sede Central</h1>
        <div className="room-container">
          <Link to={'/form'} style={{ textDecoration: 'none', color: '#000' }}>
            <h3>Sala 1</h3>
          </Link>
        </div>
        <div className="room-container">
          <Link to={'/form'} style={{ textDecoration: 'none', color: '#000' }}>
            <h3>Sala 2</h3>
          </Link>
        </div>
        <div className="room-container">
          <Link to={'/form'} style={{ textDecoration: 'none', color: '#000' }}>
            <h3>Sala 3</h3>
          </Link>
        </div>
        <div className="room-container">
          <Link to={'/form'} style={{ textDecoration: 'none', color: '#000' }}>
            <h3>Sala 4</h3>
          </Link>
        </div>
        <div className="room-container">
          <Link to={'/form'} style={{ textDecoration: 'none', color: '#000' }}>
            <h3>Sala 5</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Room;
