import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import './style.css';

export default function Header() {
  const reserveSize = useSelector((state) => state.reserve.length);
  return (
    <header className="container">
      <Link to="/">
        <img src={logo} className="logo" alt="logo projeto" />
      </Link>
      <Link to="/reservas">
        <div className="reservers-header">
          <strong>Minhas Reservas</strong>
          <span>{reserveSize} Reservas </span>
        </div>
      </Link>
    </header>
  );
}
