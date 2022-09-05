import React from 'react';
import Header from '../Header/Header';
import './Room.css';

const Room = () => {
  return (
    <>
      <Header />
      <div className="rooms-container">
        <h1 style={{marginBottom: '1rem'}} >Ceutec Sede Central</h1>
        <div className="room-container">
          <h3>Sala 1</h3>
        </div>
        <div className="room-container">
          <h3>Sala 2</h3>
        </div>
        <div className="room-container">
          <h3>Sala 3</h3>
        </div>
        <div className="room-container">
          <h3>Sala 4</h3>
        </div>
        <div className="room-container">
          <h3>Sala 5</h3>
        </div>
      </div>
    </>
  );
};

export default Room;
