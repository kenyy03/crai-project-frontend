import React from 'react';
import { Campus } from '../../interfaces/Campus';
import CampusCard from '../CampusCard/CampusCard';
import Header from '../Header/Header';
import './MainContent.css';

const MainContent = () => {
  const campus :Campus[] = [
    // {
    //   nameImg: 'crai-unitec-ceutec-fundacion-nasser.jpg',
    //   campusName: 'Crai Unitec',
    //   campusPlace: 'Tegucigalpa',
    //   campusDirection: 'Boulevard Kenedy, V-782, frente a Residencial Honduras',
    // },
    {
      nameImg: 'Ceutec-sps-central.jpg',
      campusName: 'Crai Ceutec',
      campusPlace: 'SPS',
      campusDirection: '25 Calle, Bulevar Roberto Micheletti',
    },
  ];
  return (
    <>
      <Header />
      <div className="card-container">
        {
          campus.map((sede:Campus, index) => <CampusCard key={index} sedes={sede} />)
        }
        {/* <CampusCard />
        <CampusCard />
        <CampusCard />
        <CampusCard /> */}
      </div>
    </>
  );
};

export default MainContent;
