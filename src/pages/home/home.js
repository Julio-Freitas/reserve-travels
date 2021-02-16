import React, { useState, useEffect } from 'react';
import { MdFlightTakeoff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { addReserve } from '../../store/modules/reserve/actions';

import './styles.css';

export default function Home() {
  const [trips, setTrips] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadApi() {
      const { data } = await api.get('/trips');
      setTrips(data);
    }
    loadApi();
  }, []);

  const _handleAdd = (trip) => dispatch(addReserve(trip));
  return (
    <div className="container-trips">
      {trips.map((trip) => (
        <div className="trip-card" key={trip.id}>
          <img src={trip.image} alt={trip.title} />
          <strong className="trip-tittle">{trip.title}</strong>
          <strong className={`trip-status-${trip.status ? 'on' : 'off'}`}>
            {trip.status ? 'disponível' : 'indisponível'}
          </strong>
          <button
            type="button"
            onClick={() => _handleAdd(trip)}
            className="trip-button"
          >
            <div>
              <MdFlightTakeoff />
            </div>
            <span>Solicitar reserva</span>
          </button>
        </div>
      ))}
    </div>
  );
}
